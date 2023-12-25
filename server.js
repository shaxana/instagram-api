const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
require('./src/config/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require("./src/router/userRouter")

app.use(cors())
app.use(bodyParser.json())
app.use("/", userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  