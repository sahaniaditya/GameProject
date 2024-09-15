import React, { useState } from "react";
import ScoreContext from "./scorecontext.jsx";

const ScoreState = (props) => {
  const [allScores, setAllScores] = useState(null);
//   const [highest_score, setHighestScore] = useState(0);

  const updateScore = async (score) => {

    console.log("In highest Score.")
    const url = "https://gameproject-x2fm.onrender.com/api/score/updatescore";
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({ highest_score : score })
    });

    const json = await response.json();
    if (json) console.log("Highest Score added.");
  };

  const addScore = async (score) => {
    const url = "https://gameproject-x2fm.onrender.com/api/score/addscore";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({ score }),
    });

    const json = await response.json();
    if (json) console.log("Score added.");
  };

  const getAllScores = async () => {
    const url = "https://gameproject-x2fm.onrender.com/api/score/getuserscore";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log("I am here", json);
    setAllScores(json);
  };

  return (
    <ScoreContext.Provider
      value={{
        allScores,
        getAllScores,
        updateScore,
        addScore,
      }}
    >
      {props.children}
    </ScoreContext.Provider>
  );
};

export default ScoreState;
