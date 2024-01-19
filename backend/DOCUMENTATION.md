## SimpleNote API Documentation

### Overview

SimpleNote is a RESTful API for a simple note-taking application using Node.js and Express.js, with MongoDB as the database. The API allows users to create, retrieve, update, and delete text notes.

### Base URL

The base URL for the SimpleNote API is `http://localhost:5000`.

### Authentication

The API uses JSON Web Tokens (JWT) for authentication and bcrypt for password encryption. Users need to sign up or log in to obtain an authentication token (`authToken`), which they must include in the headers of authenticated requests.

### Endpoints

#### 1. Signup

- **Route:** `POST /api/auth/signup`
- **Description:** Creates a new user account.
- **Request Body:**
  - `email`: User's email address.
  - `name`: User's name.
  - `password`: User's password (must contain at least one digit, one lowercase, and one uppercase letter and be at least 6 characters long).
- **Response:**
  - `authToken`: JWT authentication token.

#### 2. Login

- **Route:** `POST /api/auth/login`
- **Description:** Logs in an existing user.
- **Request Body:**
  - `email`: User's email address.
  - `password`: User's password.
- **Response:**
  - `authToken`: JWT authentication token.

#### 3. Get User

- **Route:** `GET /api/auth/getuser`
- **Description:** Fetches details of the authenticated user.
- **Authentication:** Requires a valid JWT token in the headers.
- **Response:**
  - `user`: Object containing user details excluding the password.

#### 4. Fetch All Notes

- **Route:** `GET /api/notes/fetch`
- **Description:** Fetches all notes for the authenticated user.
- **Authentication:** Requires a valid JWT token in the headers.
- **Response:**
  - Array of note objects.

#### 5. Add New Note

- **Route:** `POST /api/notes/`
- **Description:** Adds a new note for the authenticated user.
- **Authentication:** Requires a valid JWT token in the headers.
- **Request Body:**
  - `title`: Title of the note.
  - `content`: Content of the note.
- **Response:**
  - Created note object.

#### 6. Update Note

- **Route:** `PUT /api/notes/:id`
- **Description:** Updates an existing note for the authenticated user.
- **Authentication:** Requires a valid JWT token in the headers.
- **Request Parameters:**
  - `id`: ID of the note to be updated.
- **Request Body (Optional):**
  - `title`: New title of the note.
  - `content`: New content of the note.
- **Response:**
  - Updated note object.

#### 7. Delete Note

- **Route:** `DELETE /api/notes/:id`
- **Description:** Deletes an existing note for the authenticated user.
- **Authentication:** Requires a valid JWT token in the headers.
- **Request Parameters:**
  - `id`: ID of the note to be deleted.
- **Response:**
  - JSON object with a message indicating the deletion status and details of the deleted note.

#### 8. Fetch Note by ID

- **Route:** `GET /api/notes/fetch/:id`
- **Description:** Fetches details of a specific note for the authenticated user.
- **Authentication:** Requires a valid JWT token in the headers.
- **Request Parameters:**
  - `id`: ID of the note to be fetched.
- **Response:**
  - Details of the specified note.

### Error Handling

- **400 Bad Request:** Invalid input or request format.
- **401 Unauthorized:** Missing or invalid JWT token.
- **404 Not Found:** Resource not found.
- **500 Internal Server Error:** Server-side issues.

### Usage

- **Install dependencies:**
  ```bash
  npm i
  ```
- **Start server:**
  ```bash
  npm run server
  ```

### Testing

- **Using Jest:**
  ```bash
  npm test
  ```