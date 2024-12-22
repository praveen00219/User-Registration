// middleware/errorMiddleware.js
function errorHandler(err, req, res, next) {
  console.error(err); // Logs the error to the console
  res.status(400).json({
    success: false,
    message: err.message,
  });
}

export default errorHandler;
