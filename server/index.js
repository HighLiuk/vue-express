const express = require("express")
const cors = require("cors")
const { sequelize } = require("./models")
const PostRouter = require("./routes/api/posts")
const errorMiddleware = require("./error")

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(cors())

// API routes
app.use("/api/posts", PostRouter)

// Error Middleware
app.use(errorMiddleware)

// 404
app.all("/api/*", (req, res) => {
  res.status(404).json({
    status: "error",
    msg: "Page Not Found",
  })
})

app.listen(PORT, async () => {
  console.log(`Server started at http://localhost:${PORT}`)
  await sequelize.authenticate()
  console.log("Database Connected")
})
