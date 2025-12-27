# ✅ TaskFlow API — Professional README

## 📌 TaskFlow API

A backend REST API for task management with authentication, user-based data ownership, and clean API design.

This project is built to demonstrate real-world backend engineering practices, including authentication, authorization, validation, and error handling.

---

## 🚀 Features

- User authentication using JWT  
- Secure password hashing with bcrypt  
- Task CRUD operations with user ownership  
- Request validation using Zod  
- Centralized error handling  
- Clean and scalable project structure  
- MongoDB persistence with Mongoose  

---

## 🛠️ Tech Stack

- Node.js  
- Express  
- MongoDB  
- Mongoose  
- JWT (jsonwebtoken)  
- bcrypt  
- Zod  
- dotenv  

---

## 📁 Project Structure

src/
├── config/ # Database configuration
├── controllers/ # Route controllers (business logic)
├── models/ # Mongoose schemas
├── routes/ # API route definitions
├── middlewares/ # Auth, validation, error handling
├── validations/ # Zod schemas
├── utils/ # Custom utilities (AppError)
└── app.js # App entry point

---

## 🔐 Authentication Flow

1. User registers with name, email, and password  
2. Password is hashed before saving to the database  
3. User logs in and receives a JWT token  
4. Token is sent in the Authorization header for protected routes  

---

Authorization: Bearer <JWT_TOKEN>

## 📦 API Endpoints

### 🔹 Auth Routes

#### Register
POST /api/auth/register

**Body**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
POST /api/auth/login

**Body**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```


#### Response:

{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}


### 🔹 Task Routes (Protected)

All task routes require a valid JWT.

#### Create Task
POST /api/tasks

{
  "title": "Build backend API",
  "description": "Complete TaskFlow backend project"
}

#### Get User Tasks
GET /api/tasks


Returns only tasks belonging to the authenticated user.

#### Update Task
PUT /api/tasks/:id

{
  "completed": true
}

#### Delete Task
DELETE /api/tasks/:id

---

## 🧪 Validation & Error Handling

All incoming requests are validated using Zod

Invalid requests return structured validation errors

Errors are handled centrally using a global error handler

Custom AppError class is used for clean error propagation

### Example error response:

{
  "message": "Validation failed",
  "errors": [
    {
      "path": ["title"],
      "message": "String must contain at least 1 character(s)"
    }
  ]
}

---

## ⚙️ Environment Variables

Create a .env file in the root directory:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/taskflow
JWT_SECRET=your_jwt_secret

---

## ▶️ Run Locally
git clone https://github.com/Nirmal-Goyal/taskflow-api.git
cd taskflow-api
npm install
npm run dev


Server will start at:

http://localhost:3000

---

## 🎯 Design Decisions

User ownership enforced at query level to prevent data leakage

Validation before controllers to keep business logic clean

Centralized error handling for consistency

Minimal feature set in v1 to ensure correctness and clarity

---

## 🔮 Future Improvements (Planned)

Pagination & filtering

Refresh token support

Role-based access control

API documentation with Swagger

Docker support

---

## 👤 Author

Nirmal Goyal

GitHub: https://github.com/Nirmal-Goyal

Portfolio: https://nirmal-goyal.vercel.app

---

## 🏁 Status

✅ Version 1 complete
🛠️ Actively improving and refactoring

