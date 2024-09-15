require("dotenv").config();
const connectToMongo = require("./database.js")
connectToMongo();
var cors = require('cors')
const express = require('express');
const app = express()



app.use(cors())
const port = 5000
app.use(express.json())

app.use("/api/auth",require('./routes/auth'));
app.use("/api/score",require('./routes/score'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})