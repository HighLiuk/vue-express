const express = require("express")
const serverless = require("serverless-http")
const router = require("../server/app")

const app = express()

app.use("/", router)

module.exports.handler = serverless(app)
