// index.js
import express from "express";
import {
  validateName,
  validatePassword,
  validateEmail,
  validatePhone,
} from "./middleware/validationMiddleware.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST route for user registration
app.post(
  "/register",
  validateName,
  validatePassword,
  validateEmail,
  validatePhone,
  (req, res) => {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    // Simulating successful registration (mock response)
    res.status(200).json({
      success: true,
      message: "User registered successfully!",
      user: { firstName, lastName, email, phoneNumber },
    });
  }
);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
