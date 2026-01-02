# TaskFlow API

A production-ready backend REST API for task management with authentication, pagination, filtering, and user-based data ownership.

This project demonstrates real-world backend engineering practices including API design, authentication, validation, documentation, and system evolution from v1 to v2.


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

## 🚀 What's New in v2

- Pagination support for task listing
- Filtering tasks by completion status
- API sorting by creation date
- Interactive API documentation using Swagger (OpenAPI)
- Improved API usability for real-world consumers

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

```text
src/
├── config/          # Database configuration
├── controllers/     # Route controllers (business logic)
├── models/          # Mongoose schemas
├── routes/          # API route definitions
├── middlewares/     # Auth, validation, error handling
├── validations/     # Zod schemas
├── utils/           # Custom utilities (AppError)
└── app.js           # Application entry point
```

---

## 🔐 Authentication Flow

1. User registers with name, email, and password  
2. Password is hashed before saving to the database  
3. User logs in and receives a JWT token  
4. Token is sent in the Authorization header for protected routes  

Authorization: Bearer <JWT_TOKEN>

---

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

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```


### 🔹 Task Routes (Protected)

All task routes require a valid JWT.

#### Create Task
POST /api/tasks

```json
{
  "title": "Build backend API",
  "description": "Complete TaskFlow backend project"
}
```

#### Get User Tasks
GET /api/tasks

Returns only tasks belonging to the authenticated user.


#### Update Task
PUT /api/tasks/:id

```json
{
  "completed": true
}
```

#### Delete Task
DELETE /api/tasks/:id

---

## Pagination & Filtering Examples (v2)

#### Get first page of tasks (default limit):
GET /api/tasks

#### Get second page with custom limit:
GET /api/tasks?page=2&limit=5

#### Get only completed tasks:
GET /api/tasks?completed=true

#### Combine filtering with pagination:
GET /api/tasks?completed=false&page=1&limit=10

---

## API Documentation

### Interactive API documentation is available using Swagger (OpenAPI).

#### When running locally:
http://localhost:3000/api/docs


#### The documentation includes:

- Authentication endpoints
- Task CRUD endpoints
- Query parameters for pagination and filtering
- JWT authentication support

---

## 🧪 Validation & Error Handling

- All incoming requests are validated using Zod
- Invalid requests return structured validation errors
- Errors are handled centrally using a global error handler
- Custom AppError class is used for clean error propagation

### Example error response:

```json
{
  "message": "Validation failed",
  "errors": [
    {
      "path": ["title"],
      "message": "String must contain at least 1 character(s)"
    }
  ]
}
```

---

## ⚙️ Environment Variables

#### Create a .env file in the root directory:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/taskflow
JWT_SECRET=your_jwt_secret

---

## ▶️ Run Locally

git clone https://github.com/Nirmal-Goyal/taskflow-api.git
cd taskflow-api
npm install
npm run dev


#### Server will start at:

http://localhost:3000

---

## 🎯 Design Decisions

- Pagination and filtering implemented to support large datasets
- User ownership enforced at query level for strict data isolation
- Validation handled before controllers to keep business logic clean
- Centralized error handling for consistent API responses
- Swagger used to improve developer experience

---

## 🔮 Future Improvements (Planned)

- Cursor-based pagination
- Refresh token support
- Role-based access control (RBAC)
- Rate limiting and API security hardening
- Docker support

---

## 👤 Author

#### Nirmal Goyal

GitHub: https://github.com/Nirmal-Goyal

Portfolio: https://nirmal-goyal.vercel.app

---

## 🏁 Status

✅ Version 2 active
🛠️ Actively improving and refactoring

---