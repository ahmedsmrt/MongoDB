// This middleware function takes in 4 params the err, request, responst, and next
const errorHandler = (err, req, res, next) => {
    // set the statuscode based on a ternary that checks if the response statuscode is exists if it does then set it as is if not set the status code as 500 which means its an internal server
    const statusCode = res.statusCode ? res.statusCode : 500

    // This is an express method that lets you set the status code
    res.status(statusCode)

    // This is a build in middleware function used to parse incoming requests with JSON payloads and is baded upon the bodyparser
    // This looks at the reqests where the content-tpe header matches the type option
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}


module.exports = {
    errorHandler,
}