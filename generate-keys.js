// generate-keys.js
const { generateKeyPairSync } = require('crypto')
const { writeFileSync } = require('fs')

function generate() {
  // Generate Ed25519 key pair
  const { publicKey, privateKey } = generateKeyPairSync('ed25519')
  
  // Export to PEM
  const pubPem = publicKey.export({ type: 'spki', format: 'pem' })
  const privPem = privateKey.export({ type: 'pkcs8', format: 'pem' })
  
  // Write files
  writeFileSync('public_key.pem', pubPem)
  writeFileSync('private_key.pem', privPem)
  console.log('✅ Generated public_key.pem & private_key.pem')
}

try {
  generate()
} catch (err) {
  console.error('❌ Key generation failed:', err)
  process.exit(1)
}
