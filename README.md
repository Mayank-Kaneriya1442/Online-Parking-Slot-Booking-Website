<div align="center">

# 🚗 Car Parking Slot Booking System

### A real-time parking slot reservation platform built with the MERN stack.

[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-3C873A?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 📌 Overview

The **Car Parking Slot Booking System** is a MERN stack web application that allows users to book parking slots by providing their vehicle number, date, time, and contact details. It includes a React-based user frontend, a Vite-powered admin dashboard, and a Node.js/Express backend connected to MongoDB with Redis session support.

---

## ✨ Features

### 👤 User
- Register and log in to a personal account
- Book a parking slot with car number, date, and time
- View your current and past bookings (Your Bookings page)
- Update profile — email, username, and password
- Contact support via the Contact Us page

### 🛠️ Admin (Separate Vite App)
- Secure admin login
- View and manage all user bookings
- Manage registered users (view, edit)
- Sidebar navigation dashboard

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| User Frontend | React 18, React Router v6, react-hook-form, Typed.js |
| Admin Frontend | React 19 + Vite 7, React Icons |
| Backend | Node.js, Express.js, Mongoose |
| Database | MongoDB |
| Session | Redis, express-session |
| Other | CORS, dotenv, body-parser |

---

## 📁 Folder Structure

```
car-parking-project/
├── backend/
│   ├── index.js                   # Express server & all API routes
│   ├── .env                       # Environment variables
│   └── scratch/                   # node-localstorage session store
├── admin/                         # Separate Vite-based admin panel
│   └── src/
│       └── components/
│           ├── AdminLogin.jsx
│           ├── ManageBookings.jsx
│           ├── ManageUsers.jsx
│           └── Sidebar.jsx
└── src/                           # Main React user app
    └── components/
        ├── Homepage/
        ├── Navbar/
        ├── login/
        ├── Signup/
        ├── bookparking/           # Slot booking form
        ├── Yourbooking/           # View user bookings
        ├── profile/
        ├── updateemail/
        ├── updateusername/
        ├── updatepassword/
        ├── Country/               # Phone country selector
        ├── ContactUs/
        ├── Footer/
        ├── Subscribe/
        └── admin/                 # Admin view (inline)
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [MongoDB](https://www.mongodb.com/) running locally on `mongodb://localhost:27017`
- [Redis](https://redis.io/) running locally (optional — for session features)

### 1. Clone the Repository

```bash
git clone https://github.com/Mayank-Kaneriya1442/Online-Parking-Slot-Booking-Website.git
cd Online-Parking-Slot-Booking-Website
```

### 2. Backend Setup

```bash
cd backend
npm install
node index.js              # Starts on http://localhost:5000
```

**Environment Variables (`.env`)**
```env
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=admin123
JWT_SECRET=admin
```

### 3. User Frontend Setup

```bash
cd ..                      # Back to project root
npm install
npm start                  # Starts on http://localhost:3000
```

### 4. Admin Panel Setup

```bash
cd admin
npm install
npm run dev                # Starts on http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/login` | User login |
| POST | `/booking` | Book a parking slot |
| GET | `/showSlots` | Get current user's bookings |
| GET | `/showprofile` | Get logged-in user profile |
| POST | `/resetemail` | Update user email |
| POST | `/resetusername` | Update username |
| POST | `/resetpassword` | Update password |
| POST | `/admin/login` | Admin login |
| GET | `/admin/users` | Get all users (Admin) |
| PUT | `/admin/users/:id` | Update user (Admin) |
| GET | `/admin/bookings` | Get all bookings (Admin) |
| GET | `/health` | Server health check |

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
