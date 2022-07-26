These are impromptu notes on the process of creating a backend using Express.js, Node.js, Nodemon and Postman to test

Steps
    1.) Create a backend folder and in that backend folder create a controllers, middleware and routes folder and at the top level of this folder create a server.js file that initializes the express server logic
    2.) Start writing the server.js logic by requiring all of the modules needed such as express
        2a.)create const and set the first to req("express")
        2b.)create const and set it to the dotenv and require the dotenv then chain a config method to it and call it.
        2c.)create a const and call it app (or whatever you want to call it) and call the express function created in the step 2a.)
        2d.)create a port const and set it equal to a boolean that takes either an .env variable or a port number of your choosing
        2e.)test out whether the server is created by listening to it using a express function called listen
            2e.1)to do this you declare the app and then chain the listen method and in that listen method it'll take two parameters (port, and a function that will console log the start of the server after running it with npm run dev or whatever script you created to run the app)





// This is the section where you use the Node function require to include external files and then return an object with all the methods and public functions available
const express = require("express")
const dotenv = require("dotenv").config()

// Created a middleware function that handles errors
const {errorHandler} = require("./middleware/errorMiddleware")
const port = process.env.PORT || 5000

const app = express()

// adding middleware for error handling (its a requirement for setting data to the body)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// This overwrites the default error Handler
app.use(errorHandler)

// This sets our routes up and establishes the api path for req / res
app.use('/api/goals', require('./routes/goalRoutes'))


// This is an express method that listens for the port being used
app.listen(port, () => console.log(`Server started on port ${port}`))