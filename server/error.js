const { EmptyResultError, ValidationError } = require("sequelize")

function errorMiddleware(err, req, res, next) {
  // Page not Found
  if (err instanceof EmptyResultError) {
    next()
  }

  if (err instanceof ValidationError) {
    const [{ type, message }] = err.errors
    let statusCode

    switch (type) {
      case "notNull Violation":
        statusCode = 422
        break
      case "Validation error":
        statusCode = 400
        break
    }

    res.status(statusCode).json({
      status: "error",
      msg: message,
    })
  }

  // res.status(500).json(err)

  res.status(500).json({
    status: "error",
    msg: "Internal Server Error",
  })
}

module.exports = errorMiddleware
