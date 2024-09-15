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
- User data (username, past scores, and high scores) is saved to a database using **Node.js/Express** with either **MongoDB** or **MySQL**.
- All data is persistent across sessions and available once the user logs in again.

### 5. User Authentication:
- Users can **register** and **log in** to track their game data.
- Passwords are securely stored using **bcrypt** hashing.

### 6. Data Fetching:
- Upon logging in, the system fetches the user's **past scores** and **high score** from the database and displays them on the screen.

### 7. Deployment:
- The frontend is deployed using **Netlify** or **Vercel**.
- The backend (Node.js/Express API) is deployed on **Heroku** or **Railway**.

## Technologies Used

### Frontend:
- **React.js** for the game interface.
- **Tailwind CSS** for styling.
- **React Router** for navigation.
- **Axios** for making API requests to the backend.
- **Confetti Animation** using `react-confetti`.

### Backend:
- **Node.js** and **Express.js** for the server.
- **MongoDB** (with **Mongoose**) or **MySQL** (with **Sequelize**) for data persistence.
- **JWT (JSON Web Token)** for secure user authentication.
- **Bcrypt.js** for password hashing.

### Deployment:
- **Netlify** or **Vercel** for frontend hosting.
- **Heroku** or **Railway** for backend deployment.

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
