// lib/axios.ts
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

export function setAccessToken(token: string) {
  // keep for response-refresh flow
  sessionStorage.setItem('accessToken', token)
}

const api = axios.create({
  baseURL: '/api',
})

// 1) Attach token on every request
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken')
  if (token) {
    config.headers = config.headers ?? {}
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

// 2) Handle 401 → silent refresh → retry queue
let isRefreshing = false
type QueueEntry = {
  resolve: (value: AxiosResponse | Promise<AxiosResponse>) => void
  reject: (error: unknown) => void
  config: InternalAxiosRequestConfig
}
let queue: QueueEntry[] = []

const processQueue = (error: unknown, token: string | null = null) => {
  queue.forEach(({ resolve, reject, config }) => {
    if (token) {
      config.headers = config.headers ?? {}
      config.headers['Authorization'] = `Bearer ${token}`
      resolve(api(config))
    } else {
      reject(error)
    }
  })
  queue = []
}

api.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    const originalReq = err.config as InternalAxiosRequestConfig & { _retry?: boolean }

    if (err.response?.status === 401 && !originalReq._retry) {
      if (isRefreshing) {
        return new Promise<AxiosResponse>((resolve, reject) => {
          queue.push({ resolve, reject, config: originalReq })
        })
      }

      originalReq._retry = true
      isRefreshing = true

      return new Promise<AxiosResponse>(async (resolve, reject) => {
        try {
          const { data } = await axios.get<{ accessToken: string }>('/api/auth/refresh')
          const newToken = data.accessToken
          setAccessToken(newToken)        // writes to sessionStorage :contentReference[oaicite:3]{index=3}
          processQueue(null, newToken)
          resolve(api(originalReq))
        } catch (refreshError) {
          processQueue(refreshError, null)
          window.location.href = '/admin/login'
          reject(refreshError)
        } finally {
          isRefreshing = false
        }
      })
    }

    return Promise.reject(err)
  },
)

export default api
