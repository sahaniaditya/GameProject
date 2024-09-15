import React, { useEffect, useState, useContext } from "react";
import profile from "../assets/profile.jpg";
import Navbar from "./Navbar.jsx";
import authContext from "../Context/authcontext.jsx";
import scoreContext from "../Context/scorecontext.jsx";

const Home = () => {
  const auth_context = useContext(authContext);
  const { getuserbyid, user } = auth_context;

  const score_context = useContext(scoreContext);
  const { getAllScores, allScores } = score_context;

  useEffect(() => {
    getuserbyid();
  }, []);

  useEffect(() => {
    getAllScores();
    console.log("This is all ", allScores);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg w-full max-w-3xl p-8">
          <div className="text-center mb-8">
            <img
              src={profile}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h1 className="text-3xl font-bold text-gray-900">
              {user && user.name}
            </h1>
            <p className="text-gray-600">{user && user.email}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Top 10 Games
            </h2>
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-indigo-600 text-white">Serial</th>
                  <th className="py-2 px-4 bg-indigo-600 text-white">Score</th>
                  <th className="py-2 px-4 bg-indigo-600 text-white">Date</th>
                </tr>
              </thead>
              <tbody>
                {allScores &&
                  allScores.map((game, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4 text-center">{index + 1}</td>
                      <td className="py-2 px-4 text-center">{game.score}</td>
                      <td className="py-2 px-4 text-center">
                        {new Date(game.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              className="bg-indigo-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
              onClick={() => (window.location.href = "/leaderboard")}
            >
              Visit Leaderboard
            </button>
            <button
              className="bg-green-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-green-700 transition duration-300"
              onClick={() => (window.location.href = "/main")}
            >
              Start Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
