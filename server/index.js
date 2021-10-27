const express = require("express")
const { sequelize } = require("./models")
const router = require("./app")

const app = express()
const PORT = process.env.PORT || 5000

app.use("/", router)

app.listen(PORT, async () => {
  console.log(`Server started at http://localhost:${PORT}`)
  await sequelize.authenticate()
  console.log("Database Connected")
})
