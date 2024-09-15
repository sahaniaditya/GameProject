import React, { useState, useContext, useEffect } from "react";
import Confetti from "react-confetti";
import authContext from "../Context/authcontext.jsx";
import scoreContext from "../Context/scorecontext.jsx";

const App = () => {
  const auth_context = useContext(authContext);
  const { getuserbyid, user } = auth_context;

  const score_context = useContext(scoreContext);
  const { getAllScores, allScores, addScore, updateScore } = score_context;

  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [minRange, setMinRange] = useState(1);
  const [maxRange, setMaxRange] = useState(100);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isHighScore, setIsHighScore] = useState(false);

  const handleGuess = () => {
    const numericGuess = parseInt(guess);
    if (numericGuess === targetNumber) {
      setFeedback("🎉 Correct! You guessed the number!");
      setScore(score + 1);
      setIsGameOver(true);

      addScore(score + 1);
      if (score + 1 > user.highest_score) {
        setHighScore(score + 1);
        updateScore(score + 1);
        getuserbyid();
        setIsHighScore(true);
      }
    } else if (numericGuess < targetNumber) {
      setFeedback("Too Low!");
      setMinRange(numericGuess + 1); // Update minimum range
      setScore(score + 1);
    } else {
      setFeedback("Too High!");
      setMaxRange(numericGuess - 1); // Update maximum range
      setScore(score + 1);
    }
  };

  const handleReset = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setScore(0);
    setFeedback("");
    setMinRange(1);
    setMaxRange(100);
    setIsGameOver(false);
    setIsHighScore(false);
  };

  useEffect(() => {
    getuserbyid();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {isHighScore && <Confetti />}
      <div className="text-center bg-white text-gray-800 shadow-lg p-10 rounded-md max-w-md">
        <h1 className="text-4xl font-bold mb-5">🎯 Guess the Number</h1>
        <p className="text-lg mb-2">
          The number is between <span className="font-bold">{minRange}</span>{" "}
          and <span className="font-bold">{maxRange}</span>.
        </p>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 w-full text-center text-xl"
          placeholder="Enter your guess"
        />
        <button
          onClick={handleGuess}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 w-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Guess
        </button>
        {feedback && <p className="mt-3 text-xl font-semibold">{feedback}</p>}
        <div className="mt-5">
          <p className="text-lg">
            Score: <span className="font-bold">{score}</span>
          </p>
          <p className="text-lg">
            High Score:{" "}
            <span className="font-bold">
              {user && user.highest_score > highScore
                ? user.highest_score
                : highScore}
            </span>
          </p>
        </div>
        {isGameOver && (
          <button
            onClick={handleReset}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
