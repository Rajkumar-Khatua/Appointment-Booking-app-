// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

// Signup Route
router.post("/signup", authController.signup);

module.exports = router;
