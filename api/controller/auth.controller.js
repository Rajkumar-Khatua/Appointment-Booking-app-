// authController.js

const User = require("../Models/User.model");
const bcrypt = require("bcrypt");

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

    // Check if the user has accepted the terms and conditions
    if (!acceptTerms) {
      return res
        .status(400)
        .json({ message: "Please accept the terms and conditions." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the saltRounds (second argument) as needed.

    const user = new User({
      name,
      email,
      password: hashedPassword,
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
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if a user with the provided email exists
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Email or password is incorrect." });
    }

    // Verify the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Email or password is incorrect." });
    }

    // Return a success message or a JWT token for authentication
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};
