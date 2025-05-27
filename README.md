## Key Management

Your app uses Ed25519 key-pairs for signing PASETO tokens. You only need to generate these once—when you first set up the project, and again only if you ever need to rotate keys.

### 1. Initial Key Generation

Run these two commands **in your project root** (where your `package.json` lives):

```bash
# Generate the private key (PKCS#8 PEM)
node -e "const { generateKeyPairSync } = require('crypto');
const { privateKey } = generateKeyPairSync('ed25519', {
  privateKeyEncoding: { type:'pkcs8', format:'pem' },
  publicKeyEncoding:  { type:'spki',  format:'pem' }
});
require('fs').writeFileSync('private_key.pem', privateKey);
console.log('✅ private_key.pem written');"

# Generate the public key (SPKI PEM)
node -e "const { generateKeyPairSync } = require('crypto');
const { publicKey } = generateKeyPairSync('ed25519', {
  privateKeyEncoding: { type:'pkcs8', format:'pem' },
  publicKeyEncoding:  { type:'spki',  format:'pem' }
});
require('fs').writeFileSync('public_key.pem', publicKey);
console.log('✅ public_key.pem written');"
