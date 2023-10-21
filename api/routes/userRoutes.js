const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

// Create a new user
router.post("/", userController.createUser);

// Get all users
router.get("/", userController.getAllUsers);

// Get a specific user by ID
router.get("/:id", userController.getUserById);

// Update a user by ID
router.put("/:id", userController.updateUser);

// Delete a user by ID
router.delete("/:id", userController.deleteUser);

module.exports = router;
