// userModel.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    enum: ["patient", "doctor"], // You can specify other account types if needed
    required: true,
  },
  specialty: {
    type: String, // Only for "doctor" account type
  },
  licenseNumber: {
    type: String, // Only for "doctor" account type
  },
  acceptTerms: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
