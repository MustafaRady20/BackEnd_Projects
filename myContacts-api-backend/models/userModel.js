const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_id:{
      type: mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"User"
    },
    username: {
      type: String,
      required: [true, "please add a user name"],
    },
    email: {
      type: String,
      required: [true, "please add a unique email address"],
      unique: [true, "email address already taken"],
    },
    password: {
      type: String,
      required: [true, "please add a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
