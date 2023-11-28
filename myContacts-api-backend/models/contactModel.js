const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a contact name"],
    },
    email: {
      type: String,
      require: [true, "Please add a contact email address"],
    },
    phone: {
      type: String,
      require: [true, "Please add a contact phone number"],
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Conatact",contactSchema)