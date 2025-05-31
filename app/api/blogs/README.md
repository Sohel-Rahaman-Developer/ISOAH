Below is a complete Postman‐style documentation for your Blog CRUD APIs (including multi‐image upload). You can copy each section into Postman to create requests.

---

## Common Information

* **Base URL**: `http://localhost:3000`
* **Authorization**: All write operations (Create, Edit, Delete) require an admin token. Add header:

  ```http
  Authorization: Bearer {{ADMIN_TOKEN}}
  ```
* **Environment Variables (Postman)**:

  * `{{BASE_URL}} = http://localhost:3000`
  * `{{ADMIN_TOKEN}} = <your-admin-jwt>`
  * `{{SAMPLE_CATEGORY_ID}} = <24-character MongoDB ObjectId for an existing blog category>`
  * `{{BLOG_ID}} = <ID of a blog returned from Create or List>`

---

## 1. List All Blogs

* **Request**:

  * Method: `GET`
  * URL: `{{BASE_URL}}/api/blogs/all`
  * Headers: None (public endpoint)

* **Sample Response (200 OK)**:

  ```json
  [
    {
      "id": "6445e3c0a8f8c93d2e1fa123",
      "title": "My First Blog Post",
      "content": "<p>Welcome to my blog!</p>",
      "categoryId": "60b8d295f1d2c45e8c9a0e12",
      "images": [
        "/uploads/blogs/blog_1685501234567_123456789.jpg",
        "/uploads/blogs/blog_1685501234568_987654321.png"
      ],
      "createdAt": "2025-05-31T08:00:00.000Z",
      "updatedAt": "2025-05-31T08:00:00.000Z"
    },
    {
      "id": "6445e3c0a8f8c93d2e1fa124",
      "title": "Another Post",
      "content": "<p>Some content here.</p>",
      "categoryId": "60b8d295f1d2c45e8c9a0e13",
      "images": [],
      "createdAt": "2025-05-31T09:00:00.000Z",
      "updatedAt": "2025-05-31T09:00:00.000Z"
    }
  ]
  ```

  * If no blogs exist, response is an empty array `[]`.

* **Error Cases**: None (public). Always returns 200 with zero or more items.

---

## 2. Get One Blog by ID

* **Request**:

  * Method: `GET`
  * URL: `{{BASE_URL}}/api/blogs/{{BLOG_ID}}`
  * Headers: None (public endpoint)

* **Sample Success Response (200 OK)**:

  ```json
  {
    "id": "6445e3c0a8f8c93d2e1fa123",
    "title": "My First Blog Post",
    "content": "<p>Welcome to my blog!</p>",
    "categoryId": "60b8d295f1d2c45e8c9a0e12",
    "images": [
      "/uploads/blogs/blog_1685501234567_123456789.jpg",
      "/uploads/blogs/blog_1685501234568_987654321.png"
    ],
    "createdAt": "2025-05-31T08:00:00.000Z",
    "updatedAt": "2025-05-31T08:00:00.000Z"
  }
  ```

* **Error Responses**:

  1. Invalid ID format (not 24 hex characters):

     * Status: `400 Bad Request`
     * Body:

       ```json
       { "error": "Invalid blog ID" }
       ```
  2. Blog not found:

     * Status: `404 Not Found`
     * Body:

       ```json
       { "error": "Blog post not found" }
       ```

---

## 3. Create a New Blog (with Multiple Images)

> **Endpoint**: `POST /api/blogs/create`
> **Auth**: Required (`Bearer {{ADMIN_TOKEN}}`)
> **Content-Type**: `multipart/form-data`

### 3.1. Request Setup

1. In Postman, choose **POST** and set URL to `{{BASE_URL}}/api/blogs/create`.

2. Under **Headers**, add:

   * `Authorization`: `Bearer {{ADMIN_TOKEN}}`

3. Under **Body**, select **form-data** and add the following key/value pairs:

   | Key        | Value                                   | Type | Description                                                     |
   | ---------- | --------------------------------------- | ---- | --------------------------------------------------------------- |
   | title      | My Test Blog Post                       | Text | The blog’s title (non-empty string).                            |
   | content    | `<p>This is a sample blog content.</p>` | Text | The HTML/Markdown output from your text editor (non-empty).     |
   | categoryId | {{SAMPLE\_CATEGORY\_ID}}                | Text | A valid 24-char MongoDB ObjectId for an existing blog category. |
   | images     | *(choose file A)*                       | File | One or more image files (JPEG, PNG, WEBP, GIF). Up to 5 images. |
   | images     | *(choose file B)*                       | File | (Repeat “images” field for each file. Maximum count enforced.)  |

4. Do **not** manually set `Content-Type`; Postman will set the correct `multipart/form-data` header.

5. Click **Send**.

### 3.2. Sample Successful Response (201 Created)

```json
{
  "id": "6445e3c0a8f8c93d2e1fa123",
  "title": "My Test Blog Post",
  "content": "<p>This is a sample blog content.</p>",
  "categoryId": "60b8d295f1d2c45e8c9a0e12",
  "images": [
    "/uploads/blogs/blog_1685501234567_123456789.jpg",
    "/uploads/blogs/blog_1685501234568_987654321.png"
  ],
  "createdAt": "2025-05-31T14:00:00.000Z",
  "updatedAt": "2025-05-31T14:00:00.000Z"
}
```

* Verify that `id` is a 24-character hex string.
* Verify that `images` lists the public URLs for each saved file.
* Check the `public/uploads/blogs/` folder on disk; your files should be saved there with unique names like `blog_<timestamp>_<random>.jpg`.

### 3.3. Error Responses

1. **Validation Errors (400 Bad Request)**

   * If `title`, `content`, or `categoryId` are missing or invalid, you’ll see:

     ```json
     {
       "error": {
         "title": ["Title is required"],
         "categoryId": ["categoryId must be a valid Mongo ObjectId"]
       }
     }
     ```
   * The `error` object maps each invalid field to an array of error messages.

2. **Too Many Images (400 Bad Request)**

   * If more than 5 images are sent:

     ```json
     { "error": "You can upload up to 5 images." }
     ```

3. **Disallowed MIME Type (400 Bad Request)**

   * If any file is not JPEG, PNG, WEBP, or GIF:

     ```json
     { "error": "Only JPEG, PNG, WEBP, or GIF images are allowed." }
     ```

4. **Not an Admin (403 Forbidden)**

   * If `Authorization` header is missing, malformed, or the token is invalid, the `requireAdmin` middleware will return a 403 or a redirect to login.
   * Example:

     * Status: `403 Forbidden`
     * Body:

       ```json
       { "error": "Admin privileges required" }
       ```

5. **Server Error (500 Internal Server Error)**

   * If file system operations or DB insertion fail, you’ll get:

     ```json
     { "error": "Server error. Could not save blog post." }
     ```
   * Check server logs for details.

---

## 4. Edit an Existing Blog (Text + New Images)

> **Endpoint**: `PUT /api/blogs/edit/{{BLOG_ID}}`
> **Auth**: Required (`Bearer {{ADMIN_TOKEN}}`)
> **Content-Type**: `multipart/form-data`

### 4.1. Request Setup

1. **Method**: PUT

2. **URL**: `{{BASE_URL}}/api/blogs/edit/{{BLOG_ID}}`

   * Replace `{{BLOG_ID}}` with a valid 24-char blog ID (e.g., returned from Create or List).

3. **Headers**:

   * `Authorization`: `Bearer {{ADMIN_TOKEN}}`

4. **Body** → **form-data**. You may include any combination of the following fields (all optional, but at least one must be sent):

   | Key        | Value                          | Type | Description                                                                  |
   | ---------- | ------------------------------ | ---- | ---------------------------------------------------------------------------- |
   | title      | Updated Blog Title             | Text | If provided, must be non-empty.                                              |
   | content    | `<p>Updated content here.</p>` | Text | If provided, must be non-empty.                                              |
   | categoryId | {{SAMPLE\_CATEGORY\_ID}}       | Text | If provided, 24-char ObjectId.                                               |
   | images     | *(choose a new image file)*    | File | Optional: one or more new images to append to the existing `images[]` array. |
   | images     | *(choose another file)*        | File | Repeat “images” for each new file.                                           |

5. Hit **Send**.

### 4.2. Sample Success Response (200 OK)

```json
{ "message": "Blog updated" }
```

* The blog’s `title`, `content`, or `categoryId` will be updated if you provided them.
* Any new images will be appended to the existing `images[]` array.
* You can verify changes by fetching `GET /api/blogs/{{BLOG_ID}}` again.

### 4.3. Error Responses

1. **Validation Errors (400 Bad Request)**

   * If no fields are provided at all (empty form-data):

     ```json
     { "error": { "": ["At least one field must be provided to update"] } }
     ```
   * If any provided text field fails Zod:

     ```json
     {
       "error": { "title": ["Title is required"] }
     }
     ```

2. **Invalid Blog ID (400 Bad Request)**

   ```json
   { "error": "Invalid blog ID" }
   ```

3. **Blog Not Found (404 Not Found)**

   ```json
   { "error": "Blog not found" }
   ```

4. **Disallowed MIME Type (400 Bad Request)**

   ```json
   { "error": "Only JPEG, PNG, WEBP, or GIF images are allowed." }
   ```

5. **Not an Admin (403 Forbidden)**

   ```json
   { "error": "Admin privileges required" }
   ```

6. **Server Error (500 Internal Server Error)**

   ```json
   { "error": "Server error. Could not save one of the images." }
   ```

---

## 5. Delete a Blog by ID

> **Endpoint**: `DELETE /api/blogs/delete/{{BLOG_ID}}`
> **Auth**: Required (`Bearer {{ADMIN_TOKEN}}`)

### 5.1. Request Setup

* **Method**: DELETE
* **URL**: `{{BASE_URL}}/api/blogs/delete/{{BLOG_ID}}`

  * Replace `{{BLOG_ID}}` with the ID of the blog you want to remove.
* **Headers**:

  * `Authorization`: `Bearer {{ADMIN_TOKEN}}`
* **Body**: None
* Hit **Send**.

### 5.2. Sample Success Response (200 OK)

```json
{ "message": "Blog deleted" }
```

* After this, fetching `GET /api/blogs/{{BLOG_ID}}` should return 404.

### 5.3. Error Responses

1. **Invalid Blog ID (400 Bad Request)**

   ```json
   { "error": "Invalid blog ID" }
   ```

2. **Blog Not Found (404 Not Found)**

   ```json
   { "error": "Blog not found" }
   ```

3. **Not an Admin (403 Forbidden)**

   ```json
   { "error": "Admin privileges required" }
   ```

4. **Server Error (500 Internal Server Error)** (rare, e.g. DB failure)

   ```json
   { "error": "Server error. Could not delete blog." }
   ```

---

### Quick Recap of All Endpoints

| Purpose                         | Method | URL                             | Auth Required | Body Type           | Success Status | Sample Response Body                                        |
| ------------------------------- | ------ | ------------------------------- | ------------- | ------------------- | -------------- | ----------------------------------------------------------- |
| List all blogs                  | GET    | `/api/blogs/all`                | No            | —                   | 200 OK         | Array of blog objects (empty array if none)                 |
| Get one blog by ID              | GET    | `/api/blogs/{{BLOG_ID}}`        | No            | —                   | 200 OK         | Single blog object (404 if not found)                       |
| Create a new blog (with images) | POST   | `/api/blogs/create`             | Yes (Admin)   | multipart/form-data | 201 Created    | Created blog object with `id`, `images[]`, timestamps, etc. |
| Edit an existing blog           | PUT    | `/api/blogs/edit/{{BLOG_ID}}`   | Yes (Admin)   | multipart/form-data | 200 OK         | `{ "message": "Blog updated" }`                             |
| Delete a blog by ID             | DELETE | `/api/blogs/delete/{{BLOG_ID}}` | Yes (Admin)   | —                   | 200 OK         | `{ "message": "Blog deleted" }`                             |

---

Copy each request specification into Postman, substituting your environment variables (`{{BASE_URL}}`, `{{ADMIN_TOKEN}}`, `{{SAMPLE_CATEGORY_ID}}`, and `{{BLOG_ID}}`) as needed. This documentation covers request setup, required headers, sample request bodies (for form-data), and expected responses (both success and error cases). Feel free to bookmark this canvas for quick reference when testing your APIs.
