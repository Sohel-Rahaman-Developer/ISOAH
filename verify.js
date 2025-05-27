// verify.js
const { V2 } = require('paseto')
const { createPublicKey } = require('crypto')
const { readFileSync } = require('fs')

const token = process.argv[2]
if (!token) {
  console.error('Usage: node verify.js <token>')
  process.exit(1)
}

const pubKey = createPublicKey({
  key: readFileSync('public_key.pem'),
  format: 'pem',
  type: 'spki',
})

V2.verify(token, pubKey)
  .then((payload) => {
    console.log('✅ Token is valid. Payload:', payload)
    process.exit(0)
  })
  .catch((err) => {
    console.error('🚫 Verification failed:', err.message)
    process.exit(1)
  })
