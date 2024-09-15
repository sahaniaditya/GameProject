const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser.js");
const Score = require("../models/Score.js");
const User = require("../models/User");

require("dotenv").config();

router.post("/addscore", fetchUser, async (req, res) => {
  try {
    var score = await Score.create({
      score: req.body.score,
      user: req.user,
    });

    const savedScore = await score.save();
    res.json(savedScore);
  } catch (error) {
    return res.status(401).send({ error: "There is some error." });
  }
});

router.get("/getallscores", fetchUser, async (req, res) => {
  let scores = await Score.find();
  res.json(scores);
});

router.get("/getuserscore", fetchUser, async (req, res) => {
  try {
    var userId = req.user;
    const userScore = await Score.find({ user: req.user });
    res.send(userScore);
  } catch (error) {
    res.status(500).send("Some error occured");
  }
});

/* Api to update the highest score of the user. */

router.put("/updatescore", fetchUser, async (req, res) => {
  var userId = req.user;

  const { highest_score } = req.body;
  var userData = await User.findById(userId);
  if (!userData) {
    return res.status(401).send("User not found");
  }

  let response = await User.findByIdAndUpdate(
    userId,
    { highest_score },
    { new: true }
  );
  res.json(response);
});

module.exports = router;
