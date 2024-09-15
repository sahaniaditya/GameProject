//Connection link : mongodb://localhost:27017/RideSharing
const mongoose = require("mongoose");
// const mongoURL =  "mongodb://localhost:27017/Game";
const connectToMongo = () =>{
    console.log(process.env.DATABASE_URI)
    mongoose.connect(process.env.DATABASE_URI)
    console.log("Connedted to MongoDB")
}
module.exports = connectToMongo;