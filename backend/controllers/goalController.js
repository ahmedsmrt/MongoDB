// This file is created to control the CRUD functions needed to manage the req/res cycle

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoal = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// @desc Set Goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({ message: "Set Goals" });

};

// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
};

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete Goals ${req.params.id}`})
};

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
