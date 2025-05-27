// lib/axios.ts
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

export function setAccessToken(token: string) {
  sessionStorage.setItem('accessToken', token)
}

function clearAuthAndRedirect() {
  // clear the in-memory and persisted tokens
  sessionStorage.removeItem('accessToken')
  // you could also clear any auth context state here if you expose it
  // force navigation to login
  window.location.href = '/admin'
}

const api = axios.create({
  baseURL: '/api',
  withCredentials: true, // send/receive httpOnly refresh cookie
})

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken')
  if (token) {
    config.headers = config.headers ?? {}
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

let isRefreshing = false
type QueueEntry = {
  resolve: (value: AxiosResponse | Promise<AxiosResponse>) => void
  reject: (error: unknown) => void
  config: InternalAxiosRequestConfig
}
let queue: QueueEntry[] = []

const processQueue = (err: unknown, newToken: string | null = null) => {
  queue.forEach(({ resolve, reject, config }) => {
    if (newToken) {
      config.headers = config.headers ?? {}
      config.headers['Authorization'] = `Bearer ${newToken}`
      resolve(api(config))
    } else {
      reject(err)
    }
  })
  queue = []
}

api.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const originalReq = error.config as InternalAxiosRequestConfig & { _retry?: boolean }

    // 1) If it's a 403 from a protected endpoint (not refresh), log out
    if (error.response?.status === 403 && !originalReq.url?.includes('/auth/refresh')) {
      clearAuthAndRedirect()
      return Promise.reject(error)
    }

    // 2) Your existing 401→refresh flow
    if (error.response?.status === 401 && !originalReq._retry) {
      if (isRefreshing) {
        return new Promise<AxiosResponse>((res, rej) => {
          queue.push({ resolve: res, reject: rej, config: originalReq })
        })
      }
      originalReq._retry = true
      isRefreshing = true

      return new Promise<AxiosResponse>(async (resolve, reject) => {
        try {
          const { data } = await api.get<{ accessToken: string }>('/auth/refresh')
          const fresh = data.accessToken
          setAccessToken(fresh)
          processQueue(null, fresh)
          resolve(api(originalReq))
        } catch (refreshErr) {
          processQueue(refreshErr, null)
          clearAuthAndRedirect()
          reject(refreshErr)
        } finally {
          isRefreshing = false
        }
      })
    }

    return Promise.reject(error)
  }
)

export default api