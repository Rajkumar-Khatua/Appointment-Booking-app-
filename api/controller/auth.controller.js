// authController.js

const User = require("../Models/User.model");

// Signup controller
exports.signup = async (req, res) => {
  try {
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

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use." });
    }

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

    await user.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

// Login controller
exports.login = async (req, res) => {};
