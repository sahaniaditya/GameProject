import React, { useContext, useState, useEffect } from "react";
import authContext from "../Context/authcontext.jsx";
import scoreContext from "../Context/scorecontext.jsx";
import { useNavigate, Link } from "react-router-dom";

const Leaderboard = () => {
  const auth_context = useContext(authContext);
  const { getuser, allUser } = auth_context;

  const score_context = useContext(scoreContext);
  const {} = score_context;
  const [scores, setScores] = useState(null);
  useEffect(() => {
    getuser();
  }, []);

  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    setScores(allUser);
    if (Array.isArray(allUser)) {
      setScores(allUser);

      const sortedTopUsers = [...allUser]
        .sort((a, b) => b.highest_score - a.highest_score)
        .slice(0, 10);

      setTopUsers(sortedTopUsers);
    }
  }, [allUser]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-lg p-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">
          Leaderboard
        </h2>

        <table className="min-w-full table-auto bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <th className="py-4 px-6 text-center text-lg">Ranking</th>
              <th className="py-4 px-6 text-left text-lg">User</th>
              <th className="py-4 px-6 text-right text-lg">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {scores &&
              topUsers.map((score, index) => (
                <tr
                  key={index}
                  className="hover:bg-indigo-50 transition duration-200 ease-in-out"
                >
                  <td className="py-4 px-6 text-center text-lg font-medium text-gray-700">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6 text-left text-lg font-medium text-gray-800">
                    {score.name}
                  </td>
                  <td className="py-4 px-6 text-right text-lg font-bold text-indigo-600">
                    {score.highest_score}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
