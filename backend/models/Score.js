const mongoose = require("mongoose")
const {Schema}  = mongoose;
const ScoreSchema = new Schema({
   user:{
      type : mongoose.Schema.Types.ObjectId,
      ref : "User"
   }, 
   score : {
    type : Number,
    required : true
   },
   date : {
    type : Date,
    default : Date.now
   }

})
module.exports = mongoose.model("Score",ScoreSchema)