# GuessTheNumber Game

## Overview

**GuessTheNumber** is an interactive game built with **React.js** that allows users to play a number guessing game, track their scores, and save their progress. The game features user authentication, score tracking, and backend integration for data persistence.

## Features

### 1. Game Functionality:
- A simple, fun **number guessing game** where users try to guess a random number within a given range.
- Real-time display of the user's score during gameplay.
  
### 2. Score Tracking:
- Display the current score to the user during the game.
- At the end of each game session, show the user's final score and offer the option to play again.

### 3. High Score Feature:
- The user's **highest score** is tracked and displayed.
- If a user breaks their high score, a **confetti animation** is triggered to celebrate their achievement.

### 4. User Data Storage (Backend Integration):
- User data (username, past scores, and high scores) is saved to a database using **Node.js/Express** with either **MongoDB**.
- All data is persistent across sessions and available once the user logs in again.

### 5. User Authentication:
- Users can **register** and **log in** to track their game data.
- Passwords are securely stored using **bcrypt** hashing.

### 6. Data Fetching:
- Upon logging in, the system fetches the user's **past scores** and **high score** from the database and displays them on the screen.

### 7. Deployment:
- The frontend is deployed using **Netlify**.
- The backend (Node.js/Express API) is deployed on **Vercel**.

## Technologies Used

### Frontend:
- **React.js** for the game interface.
- **Tailwind CSS** for styling.
- **React Router** for navigation.
- **Axios** for making API requests to the backend.
- **Confetti Animation** using `react-confetti`.

### Backend:
- **Node.js** and **Express.js** for the server.
- **MongoDB** (with **Mongoose**)  for data persistence.
- **JWT (JSON Web Token)** for secure user authentication.
- **Bcrypt.js** for password hashing.

### Deployment:
- **Netlify** for frontend hosting.
- **Vercel**  for backend deployment.

## Project Structure

```bash
.
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   └── index.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   └── index.js
├── README.md
└── package.json

```

## Installation

### Prerequisites
- **Node.js** installed on your machine.
- **MongoDB**  set up if you plan to use a database locally.

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sahaniaditya/GameProject.git
   cd GameProject
   cd backend
   npm install

   ```
2. Create a .env file with the following environment variables:
   ```bash

   PORT=5000
   DATABASE_URI=<paste link here>
   JWT_SECRET=your-secret-key

   ```
3. Start the backend server:
   ```bash
   node index.js
   ```
4. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
5. Install Frontend Libraries
   ```bash
   npm install
   ```
6. Run the Fronted.
   ```bash
   npm run dev
   ```


