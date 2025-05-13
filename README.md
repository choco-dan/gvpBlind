# Blinder - Student Community Hub

Blinder is an exclusive online community hub designed for students with valid college email domains. This project allows students to create posts, engage in discussions, and collaborate with peers in various communities. The app features real-time feed filtering, smooth transitions, and personalized animations for an intuitive and engaging user experience.
## Contributors
  This project was created by [Aravind B](https://github.com/danixDe) and [Dileep kumar R](https://github.com/dileepkumarrambarki). 
  We collaborated to build an exclusive online community hub for students, utilizing the latest web technologies and focusing on a smooth, user-friendly experience.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Sign up and login with college domain email verification.
- **Real-time Feed Search**: Filter posts in real-time with a responsive search bar.
- **Dynamic Post Creation**: Users can create, edit, and like posts in various communities.
- **Smooth Animations**: Page transitions and UI elements are enhanced with Framer Motion animations.
- **Community Segmentation**: Categorize posts under branches, industries, and general topics.
- **Dark Mode**: Fully responsive dark mode design with customizable themes.

## Technologies used
- **Frontend**:
  - React.js
  - Framer Motion (for animations)
  - React Router (for route management)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for data storage)

- **Authentication**:
  - Email verification (via OTP)
  - JWT (JSON Web Token)

## Project Structure

```bash
├── frontend
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       ├── assets
│       └── App.jsx
└── backend
    ├── controllers
    ├── models
    ├── routes
    └── server.js
```

## Installation
 - **Prerequisites**:
     Make sure you have the following installed:
      - Node.js (v14 or higher)
      - MongoDB (for database setup)
Clone the Repository
```bash
git clone https://github.com/choco-dan/blinder.git
cd blinder
```
- **Backend Setup**:
Navigate to the backend folder:
```bash
cd backend
```
Install backend dependencies:
```bash
npm install
```
Create a .env file for environment variables (like MongoDB URI, JWT secret):
```bash
touch .env
```
Start the backend server:
```bash
npm start
```
-**Frontend Setup**:
Navigate to the frontend folder:
```bash
cd frontend
```
- Install frontend dependencies:
```bash
npm install
```
- Start the frontend development server:
```bash
npm start
```
Combine Backend and Frontend
The backend is set to automatically serve the frontend when running npm start in the backend folder.
Usage
Run the backend and frontend:

```bash
cd backend
npm start
Access the app at http://localhost:3000.
```

Register or log in using a valid college domain email to explore the community hub.

## API Endpoints
- **Authentication**:
  -  POST /auth/signup: Register a new user.
  - POST /auth/login: Log in an existing user.
  
- **Posts**:
  - GET /posts: Fetch all posts.
  - POST /posts: Create a new post.
  - GET /posts/:id/like-status/:usermail: Check like status for a specific post.
  - POST /posts/:id/like: Like or unlike a post.
 
## 🚀 Deployment

This project is deployed using **Render**.

🔗 **Live App**: [Blinder](https://gvpblind-pi69.onrender.com/)

## Contributing
Feel free to contribute by opening an issue or submitting a pull request.

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a pull request.
