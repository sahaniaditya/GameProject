import { useState } from "react";
import Main from "./components/Main.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthState from "./Context/authstate.jsx";
import "./App.css";
import Leaderboard from "./components/Leaderboard.jsx";
import Home from "./components/Home.jsx";
import ScoreState from "./Context/scorestate.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/main",
      element: (
        <>
          {" "}<Navbar/>
          <Main />{" "}
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <SignUp />
        </>
      ),
    },
    {
      path: "/leaderboard",
      element: (
        <><Navbar/>
          <Leaderboard />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <><Navbar/>
          <Home />
        </>
      ),
    },
  ]);

  return (
    <>
      <AuthState>
        <ScoreState>
          <RouterProvider router={router} />
        </ScoreState>
      </AuthState>
    </>
  );
}

export default App;
