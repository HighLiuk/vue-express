const express = require("express")
const cors = require("cors")
const PostRouter = require("./routes/api/posts")
const errorMiddleware = require("./error")

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
// app.use(express.static("public"))

// API routes
app.use("/api/posts", PostRouter)

// SPA
// app.get("*", (req, res) => {
//   res.sendFile("/public/index.html")
// })

// Error Middleware
// app.use(errorMiddleware)

// 404
app.all("/api/*", (req, res) => {
  res.status(404).json({
    status: "error",
    msg: "Page Not Found",
  })
})

module.exports = app
