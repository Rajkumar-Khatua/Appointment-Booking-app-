// middleware/authMiddleware.js

// Validation middleware for email
exports.validateEmail = (req, res, next) => {
    // Add your email validation logic here
    // If the email is not valid, return an error response
    // If the email is valid, call next() to proceed to the controller
  };
  
  // Validation middleware for password strength
  exports.validatePassword = (req, res, next) => {
    // Add your password strength validation logic here
    // If the password is not strong enough, return an error response
    // If the password is strong, call next() to proceed to the controller
  };
  