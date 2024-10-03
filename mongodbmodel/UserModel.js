
const mongoose = require("mongoose");

// Define the schema for the User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact_number: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
  cnfpassword: {
    type: String,
    required: true,
  },
});

// Create and export the User model
const User = mongoose.model("User", userSchema);
module.exports = User;
