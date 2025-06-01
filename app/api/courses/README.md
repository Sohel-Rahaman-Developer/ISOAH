# Courses API Documentation

This README provides full API documentation for managing `Course` (certification) resources. Use the routes below to list, retrieve, create, update, and delete courses. Protected routes require an `Authorization` header with a valid Admin JWT.

---

## Base URL

```
{{BASE_URL}}/api/courses
```

Replace `{{BASE_URL}}` with your server origin (e.g., `http://localhost:3000`).

---

## Table of Contents

1. [List All Courses](#list-all-courses)
2. [Get One Course](#get-one-course)
3. [Create New Course](#create-new-course)
4. [Edit Existing Course](#edit-existing-course)
5. [Delete Course](#delete-course)

---

## List All Courses

**Endpoint:**

```
GET /api/courses/all
```

**Protected:** No

**Headers:** None

**Request:** No body

**Response 200 OK:**

```json
[
  {
    "id": "650f7b2bc2a3e1234567890a",
    "slug": "dark-web-forensics",
    "title": "Certified Dark Web Forensics Expert",
    "des": "Deep dive into dark web investigation, from TOR to crypto-forensics.",
    "img": "/c1.webp",
    "iconLists": ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
    "link": "/certifications/dark-web-forensics",
    "availability": "online",
    "details": { /* ...full details object... */ },
    "overview": { /* ...overview object... */ },
    "objectives": [ /* ...array of strings... */ ],
    "curriculum": [ /* ...array of curriculum items with `id` field... */ ],
    "tools": [ /* ...array of tools... */ ],
    "certificateFeatures": [ /* ...array of certificate features... */ ],
    "createdAt": "2025-05-31T10:15:31.000Z",
    "updatedAt": "2025-05-31T10:15:31.000Z"
  }
  // ...more courses
]
```

**Errors:**

* None (always returns an array, possibly empty)

---

## Get One Course

**Endpoint:**

```
GET /api/courses/{courseId}
```

**Protected:** No

**Headers:** None

**URL Parameters:**

* `courseId` (string, 24-character hex Mongo ID)

**Request:** No body

**Response 200 OK:**

```json
{
  "id": "650f7b2bc2a3e1234567890a",
  "slug": "dark-web-forensics",
  "title": "Certified Dark Web Forensics Expert",
  "des": "Deep dive into dark web investigation, from TOR to crypto-forensics.",
  "img": "/c1.webp",
  "iconLists": ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
  "link": "/certifications/dark-web-forensics",
  "availability": "online",
  "details": { /* ... */ },
  "overview": { /* ... */ },
  "objectives": [ /* ... */ ],
  "curriculum": [ /* ... */ ],
  "tools": [ /* ... */ ],
  "certificateFeatures": [ /* ... */ ],
  "createdAt": "2025-05-31T10:15:31.000Z",
  "updatedAt": "2025-05-31T10:15:31.000Z"
}
```

**Error Responses:**

* **400 Bad Request** (invalid ID format)

  ```json
  { "error": "Invalid course ID" }
  ```
* **404 Not Found** (no course with that ID)

  ```json
  { "error": "Course not found" }
  ```

---

## Create New Course

**Endpoint:**

```
POST /api/courses/create
```

**Protected:** Yes (Admin only)

**Headers:**

```
Content-Type: application/json
Authorization: Bearer <ADMIN_TOKEN>
```

**Request Body (JSON):**

```jsonc
{
  "slug": "dark-web-forensics",
  "title": "Certified Dark Web Forensics Expert",
  "des": "Deep dive into dark web investigation, from TOR to crypto-forensics.",
  "img": "/c1.webp",
  "iconLists": ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
  "link": "/certifications/dark-web-forensics",
  "availability": "online",
  "details": {
    "title": "Certified Dark Web Forensics Expert",
    "tagline": "AI Powered",
    "description": "This course takes you into the dark corners...",
    "stats": {
      "averageCtc": "₹14 LPA",
      "linkedinJobs": "2600+ Jobs on LinkedIn Alone",
      "mentors": "4+ Industry Mentors"
    },
    "actions": [
      { "type": "primary", "label": "Book Demo Now", "href": "#" },
      { "type": "secondary", "label": "Download Curriculum", "href": "#" }
    ],
    "heroImage": "/dark-web.webp",
    "playDemoLink": "#",
    "cohortStart": "2025-05-12",
    "pricing": {
      "original": 515,
      "discounted": 414,
      "currency": "USD",
      "emiInfo": "No cost EMI options available."
    },
    "demoOffer": {
      "text": "Experience our demo class for just $10 (refundable)",
      "icon": "✓"
    },
    "finePrint": "The Cohort Fee can be paid via custom payment link..."
  },
  "overview": {
    "eligibility": "Knowledge of Computer Forensics",
    "learningOutcome": "Participants will gain the skills to explore...",
    "statsRow": [
      { "label": "Duration", "value": "40 hrs" },
      { "label": "Course Fees", "value": "$414" }
    ],
    "icons": ["FaRegStar", "FaLightbulb", "FaHourglassHalf"]
  },
  "objectives": [
    "Know how to navigate the dark web safely",
    "Learn how to use cutting-edge search",
    "Trace and analyze cryptocurrency transactions",
    "Hands-on experience with forensic tools"
  ],
  "curriculum": [
    {
      "title": "Cyber Foundations & Lab Arsenal",
      "duration": "2 weeks",
      "stats": { "liveSessions": 12, "projects": 2, "caseStudies": 1, "quizzes": 2 },
      "modules": [
        {
          "title": "Networking Fundamentals & Cyber Basics",
          "bullets": [
            "Intro to Networking Concepts",
            "IP Addressing (Public/Private, IPv6)",
            "How Internet Works",
            "HTTP, DNS Records",
            "Doubt Solving"
          ],
          "project": "Label the diagram (Networking)",
          "caseStudy": "2008 Ahmedabad Bombings – Tracing the Digital Footprint"
        },
        {
          "title": "Linux + Lab Setup with AI",
          "bullets": [
            "Lab Setup (Kali Linux, VM, Dual Boot)",
            "Linux Commands, File Structure",
            "Software Installation",
            "Hands-on with Terminal Commands",
            "Doubt Solving using AI"
          ],
          "project": "Updating sources.list"
        }
      ]
    }
    // ...add more curriculum items as needed...
  ],
  "tools": [
    { "name": "Tor Browser", "src": "/images/tools/tor-logo.png" },
    { "name": "InTrack", "src": "/images/tools/intrack-logo.png" },
    { "name": "Hunchly", "src": "/images/tools/hunchly-logo.webp" }
  ],
  "certificateFeatures": [
    {
      "icon": "/certificate.webp",
      "title": "Industry-Recognized Certificate",
      "description": "Earn a certificate valued by top companies."
    },
    {
      "icon": "FiUserCheck",
      "title": "Stand Out in Job Market",
      "description": "Fortify your profile to increase credibility."
    }
  ]
}
```

**Response 201 Created:**

```jsonc
{
  "id": "650f7b2bc2a3e1234567890a",
  "slug": "dark-web-forensics",
  "title": "Certified Dark Web Forensics Expert",
  "des": "Deep dive into dark web investigation, from TOR to crypto-forensics.",
  "img": "/c1.webp",
  "iconLists": ["FaRegStar", "FaLightbulb", "FaHourglassHalf"],
  "link": "/certifications/dark-web-forensics",
  "availability": "online",
  "details": { /* ... */ },
  "overview": { /* ... */ },
  "objectives": [ /* ... */ ],
  "curriculum": [
    {
      "id": "650f7b35c2a3e1234567890b",
      "title": "Cyber Foundations & Lab Arsenal",
      "duration": "2 weeks",
      "stats": { "liveSessions": 12, "projects": 2, "caseStudies": 1, "quizzes": 2 },
      "modules": [ /* ... */ ]
    }
    // ...
  ],
  "tools": [ /* ... */ ],
  "certificateFeatures": [ /* ... */ ],
  "createdAt": "2025-05-31T10:15:31.000Z",
  "updatedAt": "2025-05-31T10:15:31.000Z"
}
```

**Error Responses:**

* **400 Bad Request** (validation failed):

  ```json
  { "error": { "link": ["link must be a relative path (starting with '/')"], ... } }
  ```
* **401 Unauthorized** (no or invalid JWT):

  ```json
  { "error": "Unauthorized" }
  ```
* **403 Forbidden** (JWT valid but not an admin):

  ```json
  { "error": "Forbidden: Admin access required" }
  ```
* **500 Internal Server Error** (DB insertion failure):

  ```json
  { "error": "Server error. Could not save course." }
  ```

---

## Edit Existing Course

**Endpoint:**

```
PUT /api/courses/edit/{courseId}
```

**Protected:** Yes (Admin only)

**Headers:**

```
Content-Type: application/json
Authorization: Bearer <ADMIN_TOKEN>
```

**URL Parameters:**

* `courseId` (string, 24-character hex Mongo ID)

**Request Body (JSON):**

> Include only the fields you want to update. Example:

```jsonc
{
  "title": "Certified Dark Web Forensics Expert (Updated)",
  "availability": "both",
  "curriculum": [
    {
      "title": "Cyber Foundations & Lab Arsenal",
      "duration": "3 weeks",
      "stats": { "liveSessions": 14, "projects": 3, "caseStudies": 2, "quizzes": 3 },
      "modules": [
        {
          "title": "Networking Fundamentals & Cyber Basics (Revised)",
          "bullets": [
            "Intro to Networking Concepts",
            "IP Addressing (Public/Private, IPv6)",
            "How Internet Works",
            "HTTP, DNS Records",
            "DNS Resolver Config"
          ],
          "project": "Label the new networking diagram",
          "caseStudy": "2010 Mumbai Attacks – Digital Footprint Analysis"
        }
      ]
    }
  ]
}
```

**Response 200 OK:**

```json
{ "message": "Course updated" }
```

**Error Responses:**

* **400 Bad Request** (invalid ID or validation fails):

  ```json
  { "error": "Invalid course ID" }
  ```

  or

  ```json
  { "error": { "curriculum.0.duration": ["curriculum.duration is required"] } }
  ```
* **401 Unauthorized** (no or invalid JWT):

  ```json
  { "error": "Unauthorized" }
  ```
* **403 Forbidden** (JWT valid but not admin):

  ```json
  { "error": "Forbidden: Admin access required" }
  ```
* **404 Not Found** (course does not exist):

  ```json
  { "error": "Course not found" }
  ```
* **500 Internal Server Error** (DB update failure):

  ```json
  { "error": "Server error. Could not update course." }
  ```

---

## Delete Course

**Endpoint:**

```
DELETE /api/courses/delete/{courseId}
```

**Protected:** Yes (Admin only)

**Headers:**

```
Authorization: Bearer <ADMIN_TOKEN>
```

**URL Parameters:**

* `courseId` (string, 24-character hex Mongo ID)

**Request:** No body

**Response 200 OK:**

```json
{ "message": "Course deleted" }
```

**Error Responses:**

* **400 Bad Request** (invalid ID format):

  ```json
  { "error": "Invalid course ID" }
  ```
* **401 Unauthorized** (no/invalid JWT):

  ```json
  { "error": "Unauthorized" }
  ```
* **403 Forbidden** (JWT valid but not admin):

  ```json
  { "error": "Forbidden: Admin access required" }
  ```
* **404 Not Found** (course not found):

  ```json
  { "error": "Course not found" }
  ```
* **500 Internal Server Error** (DB deletion failure):

  ```json
  { "error": "Server error. Could not delete course." }
  ```

---

## Tips for Using Postman

1. **Set your base URL** environment variable as `{{BASE_URL}}` (e.g., `http://localhost:3000`).
2. **For protected routes**, create an environment variable `{{ADMIN_TOKEN}}` containing a valid JWT for an admin user. Then in the header section of Postman, add:

   ```text
   Authorization: Bearer {{ADMIN_TOKEN}}
   ```
3. **Ensure `Content-Type: application/json`** for POST and PUT requests.
4. **Do not include `curriculum[].id`** in any request body; the server generates those automatically.

---

*End of Courses API Documentation.*
