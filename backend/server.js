// This is the section where you use the Node function require to include external files and then return an object with all the methods and public functions available
const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()

// Created a middleware function that handles errors
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const port = process.env.PORT || 5000

connectDB()

const app = express()

// adding middleware for error handling (its a requirement for setting data to the body)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// This sets our routes up and establishes the api path for req / res
app.use('/api/goals', require('./routes/goalRoutes'))

// This overwrites the default error Handler
app.use(errorHandler)


// This is an express method that listens for the port being used
app.listen(port, () => console.log(`Server started on port ${port}`))