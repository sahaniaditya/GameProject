/*User Schema to hold the login and sign up data of the user.*/

const mongoose =  require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
   
  name:{
    type : String,
    required : true
  },
  email:{
    type : String,
    required : true,
    unique : true
  },
  password:{
    type : String,
    required : true
  },
  highest_score : {
    type : Number, 
    default : 0
  },
  date:{
    type : Date,
    default : Date.now
  }
});
module.exports = mongoose.model("User",UserSchema);