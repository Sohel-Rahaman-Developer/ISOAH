# Forensic App

This project uses Ed25519 key pairs for signing and verifying PASETO tokens. Follow the instructions below to generate keys and verify tokens.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Key Management](#key-management)

   * [1. Generating a Key Pair](#1-generating-a-key-pair)
   * [2. Rotating Keys](#2-rotating-keys)
3. [Token Verification](#token-verification)
4. [File Structure Overview](#file-structure-overview)

---

## Prerequisites

* **Node.js** ≥ v16
* **npm** or **pnpm** (any package manager that runs `node` scripts)
* A Unix-like shell (bash, zsh, PowerShell, etc.)
* Make sure you are in your project root (where `package.json` lives) when running any commands below.

---

## Key Management

Your app relies on an Ed25519 key pair to sign PASETO tokens. You only need to generate these keys:

* **Once** when you first set up the project, and
* **Again** whenever you need to rotate (replace) your key pair.

### 1. Generating a Key Pair

Instead of running inline `node -e` commands, we have a helper script called `generate-keys.js` in the project root. To generate both your private and public keys, simply run:

```bash
node generate-keys.js
```

> **What this does:**
>
> * Reads the Ed25519 key‐pair generation logic from `generate-keys.js`.
> * Writes two files into the project root:
>
>   * `private_key.pem` (PKCS#8 PEM-format private key)
>   * `public_key.pem`  (SPKI PEM-format public key)

After running the script, you should see log messages like:

```
✅ private_key.pem written
✅ public_key.pem written
```

#### `generate-keys.js` (for reference)

```js
// generate-keys.js
const { generateKeyPairSync } = require("crypto");
const fs = require("fs");

// Generate an Ed25519 key pair:
const { publicKey, privateKey } = generateKeyPairSync("ed25519", {
  privateKeyEncoding:  { type: "pkcs8", format: "pem" },
  publicKeyEncoding:   { type: "spki",  format: "pem" }
});

// Write the private key to disk:
fs.writeFileSync("private_key.pem", privateKey);
console.log("✅ private_key.pem written");

// Write the public key to disk:
fs.writeFileSync("public_key.pem", publicKey);
console.log("✅ public_key.pem written");
```

---

### 2. Rotating Keys

If you ever need to rotate (replace) your existing signing keys:

1. **Backup** or **delete** the old `private_key.pem` and `public_key.pem` (so you don’t accidentally keep both sets).

2. Re–run:

   ```bash
   node generate-keys.js
   ```

3. Restart your application (if it caches or reads keys at startup).

4. Distribute the new **public\_key.pem** to any service or client that needs to verify tokens signed by the new private key.

---

## Token Verification

We include a simple script called `verify.js` to verify PASETO tokens using your public key. Place your tokens (the PASETO string) as an argument when running the script.

```bash
node verify.js <paseto-token-string>
```

### Example

```bash
node verify.js v2.public.eyJhbGciOiJFZERTQSJ9.eyJzdWIiOiJ1c2VySWQiLCJleHAiOjE3MzAwMDAwMDB9.wGk...
```

> **What this does:**
>
> 1. Reads `public_key.pem` from the project root.
> 2. Attempts to verify the passed‐in token against that public key.
> 3. Prints either the decoded payload (if verification succeeds) or an error message (if it fails).

#### `verify.js` (for reference)

```js
// verify.js
const fs = require("fs");
const { V2 } = require("paseto"); // make sure paseto v2 is installed
const path = require("path");

// Read the public key:
const publicKeyPath = path.resolve(__dirname, "public_key.pem");
if (!fs.existsSync(publicKeyPath)) {
  console.error("❌ public_key.pem not found. Generate keys first.");
  process.exit(1);
}
const publicKey = fs.readFileSync(publicKeyPath, "utf-8");

// Accept the token as the first command-line argument:
const token = process.argv[2];
if (!token) {
  console.error("❌ No token provided. Usage: node verify.js <paseto-token-string>");
  process.exit(1);
}

(async () => {
  try {
    // Verify the token with the public key:
    const payload = await V2.public.verify(token, publicKey);
    console.log("✅ Token verified successfully. Payload:");
    console.log(JSON.stringify(payload, null, 2));
  } catch (err) {
    console.error("❌ Token verification failed:", err.message);
    process.exit(1);
  }
})();
```

* Make sure you have installed the Paseto library (v2) as a dependency:

  ```bash
  npm install paseto
  # or, if you use pnpm:
  # pnpm add paseto
  ```

---

## File Structure Overview

```plaintext
/
├─ .env
├─ generate-keys.js     ← Script to create `private_key.pem` and `public_key.pem`
├─ verify.js            ← Script to verify PASETO tokens (uses `public_key.pem`)
├─ private_key.pem      ← (AUTO-GENERATED) Ed25519 private key
├─ public_key.pem       ← (AUTO-GENERATED) Ed25519 public key
├─ package.json
├─ README.md            ← (This file)
├─ src/…                ← Your application source code
├─ …                    ← Other config files, folders (e.g., `app/`, `components/`, etc.)
```

* **Do not commit** `private_key.pem` to version control if this is a production or public repository. Add it to your `.gitignore` if you haven’t already.
* Sharing only `public_key.pem` is safe; the private key should remain secret.

---

## Summary

1. **Generate keys** (once or on rotation):

   ```bash
   node generate-keys.js
   ```

2. **Sign tokens** inside your application code using `private_key.pem`.

3. **Verify tokens** as needed with:

   ```bash
   node verify.js <paseto-token-string>
   ```

That’s it! Your Ed25519 key pair is now managed via a single script, and token verification is handled by `verify.js`. If you have any questions or need to troubleshoot, make sure:

* `private_key.pem` & `public_key.pem` exist in the project root.
* You have installed all dependencies (`npm install`).
* You’re running commands from the project root directory.

Happy coding!