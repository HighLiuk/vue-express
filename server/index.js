const app = require("./app")

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
