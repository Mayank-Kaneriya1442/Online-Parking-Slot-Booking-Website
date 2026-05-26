<div align="center">

# 🚗 Car Parking Slot Booking System

### A real-time parking slot reservation platform built with the MERN stack.

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-3C873A?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

</div>

---

## 📌 Overview

The **Car Parking Slot Booking System** is a MERN stack web application that allows users to search, book, and manage parking slots in real time. It eliminates the hassle of manually finding parking by providing a live view of slot availability along with seamless online reservation.

---

## ✨ Features

### 👤 User
- Register and log in securely
- View real-time parking slot availability
- Book, modify, or cancel reservations
- View booking history and active reservations

### 🛠️ Admin
- Add, update, and manage parking locations and slots
- View all bookings and monitor occupancy
- Manage user accounts

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, CSS3 |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ODM) |
| Authentication | JWT (JSON Web Tokens) |
| Architecture | REST API |

---

## 📁 Folder Structure

```
car-parking-slot-booking/
├── backend/
│   ├── controllers/        # Business logic for bookings & slots
│   ├── models/             # Mongoose schemas (User, Slot, Booking)
│   ├── routes/             # API route definitions
│   ├── middleware/         # JWT auth middleware
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page-level views
│   │   ├── services/       # Axios API calls
│   │   └── App.js
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [MongoDB](https://www.mongodb.com/) running locally or Atlas URI

### 1. Clone the Repository

```bash
git clone https://github.com/Mayank-Kaneriya1442/Online-Parking-Slot-Booking-Website.git
cd Online-Parking-Slot-Booking-Website
```

### 2. Backend Setup

```bash
cd backend
cp .env.example .env       # Configure your environment variables
npm install
npm run dev                # Starts on http://localhost:5000
```

**Environment Variables (`.env`)**
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/parking_db
JWT_SECRET=your_jwt_secret_key
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start                  # Starts on http://localhost:3000
```

Open your browser at **http://localhost:3000**

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| GET | `/api/slots` | Get all available slots |
| POST | `/api/bookings` | Create a booking |
| GET | `/api/bookings/:userId` | Get user's bookings |
| DELETE | `/api/bookings/:id` | Cancel a booking |

---

## 👨‍💻 Author

**Mayank Kaneriya**
- 🌐 [LinkedIn](https://www.linkedin.com/in/mayank-kaneriya-011729363/)
- 📧 mayankkaneriya15@gmail.com
- 💻 [GitHub](https://github.com/Mayank-Kaneriya1442)

---

<div align="center">

⭐ If you found this project helpful, please give it a star!

</div>
