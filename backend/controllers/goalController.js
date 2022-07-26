// This file is created to control the CRUD functions needed to manage the req/res cycle
// Because mongoose returns promises for the data we use asynchronous js in our case async/await
// Also because we are using express there is a package that handles our async 
const asyncHandler = require('express-async-handler')

// We bring in our models in our Controller file
const Goal = require("../models/goalModel")
const User = require("../models/userModel")


// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoal = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id})

    res.status(200).json(goals);
  })

// @desc Set Goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {

    // Logic to check for text
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }

    const goal = await Goal.create( {
        text:req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal);

})

// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error("Goal Not Find")
    }

    const user = await User.findById(req.user.id)

    // Check for User
    if(!user) {
        res.status(401)
        throw new Error("User not found")
    }

    // Makes sure the logged in user matches the goal user 
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error("User not authorized")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true,})

  res.status(200).json(updatedGoal);
})

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)


    const user = await User.findById(req.user.id)

    // Check for User
    if(!user) {
        res.status(401)
        throw new Error("User not found")
    }

    // Makes sure the logged in user matches the goal user 
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error("User not authorized")
    }


    if(!goal) {
        res.status(400)
        throw new Error("Goal Not Find")
    }

    await goal.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
