// middleware/validationMiddleware.js

// Function to capitalize the first letter of names
function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Validate first and last name
export function validateName(req, res, next) {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({
      success: false,
      message: "First Name and Last Name are required.",
    });
  }

  // Ensure first letter is capitalized
  if (
    firstName !== capitalizeName(firstName) ||
    lastName !== capitalizeName(lastName)
  ) {
    return res.status(400).json({
      success: false,
      message: "First Name and Last Name must start with a capital letter.",
    });
  }

  next();
}

// Validate password strength
export function validatePassword(req, res, next) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      success: false,
      message: "Password is required.",
    });
  }

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      success: false,
      message:
        "Password must contain at least one uppercase letter, one number, one special character, and be at least 8 characters long.",
    });
  }

  next();
}

// Validate email format
export function validateEmail(req, res, next) {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({
      success: false,
      message: "Invalid email address.",
    });
  }

  next();
}

// Validate phone number length
export function validatePhone(req, res, next) {
  const { phoneNumber } = req.body;

  if (!phoneNumber || phoneNumber.length < 10) {
    return res.status(400).json({
      success: false,
      message: "Phone number must be at least 10 digits long.",
    });
  }

  next();
}
