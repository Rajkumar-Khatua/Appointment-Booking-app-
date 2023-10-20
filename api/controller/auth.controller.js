// authController.js

const User = require("../Models/User.model");

// Signup controller
exports.signup = async (req, res) => {
  try {
    // Extract user data from the request
    const {
      name,
      email,
      password,
      dob,
      mobileNumber,
      accountType,
      specialty,
      licenseNumber,
      acceptTerms,
    } = req.body;

    // Create a new user document
    const user = new User({
      name,
      email,
      password,
      dob,
      mobileNumber,
      accountType,
      specialty,
      licenseNumber,
      acceptTerms,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

// Login controller
exports.login = async (req, res) => {};
