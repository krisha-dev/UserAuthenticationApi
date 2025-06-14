# User Authentication API

## Description
A secure user authentication API using Node.js, Express, MongoDB, and JWT. Includes features like register, login, logout, and protected routes.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/user-auth-api.git
cd user-auth-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

In the root folder, create a `.env` file and add:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 4. Start the Server

```bash
npm run dev
```

---

## API Endpoints

### Register
`POST /api/auth/register`

**Body:**
```json
{
  "name": "Harry Potter",
  "email": "harry@hogwarts.com",
  "password": "gryffin123"
}
```

### Login
`POST /api/auth/login`

**Body:**
```json
{
  "email": "harry@hogwarts.com",
  "password": "gryffin123"
}
```

### Logout
`POST /api/auth/logout`  

---

## Protected Route Example

### Get current user (after login)
`GET /api/auth/me`

**Headers:**
```
x-auth-token: JWT_TOKEN
```

---

## 🛠 Tech Stack

- Node.js
- Express
- MongoDB Atlas
- JWT (jsonwebtoken)
- express-validator

---

## Project Structure

```
user-auth-api/
│
├── .env
├── server.js
├── config/
│   └── db.js
├── models/
│   └── User.js
├── routes/
│   └── auth.js
├── middleware/
│   └── authMiddleware.js
├── controllers/
│   └── authController.js
└── postman_collection.json
```

---

## Postman Testing

Use the `postman_collection.json` file included in the repo to test endpoints.

---

## Author

Krisha Devannavar
