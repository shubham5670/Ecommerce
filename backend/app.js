const express = require("express")
const app = express();
const errorMiddleWare = require('./middleware/error')

app.use(express.json())

//Route import
const product = require('./routes/ProductRoute')

app.use("/api/v1",product)

//Middleware for errors
app.use(errorMiddleWare)

module.exports = app