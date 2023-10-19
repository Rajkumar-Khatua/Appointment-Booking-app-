// Sign up models using mongoDB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    accountType: String,
    specialty: String,
    licenseNumber: String,
    acceptTerms: Boolean,
    dob: Date,
    mobileNumber: String,
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
