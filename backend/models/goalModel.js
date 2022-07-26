// Defining Schemea for particular resource

const mongoose = require("mongoose");

// The rules defining the way we consume data
const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
//   Creates an updated at and created at field
  {
    timestamps: true,
  }
);


// Specifies that we are exporting not the whole const by the model that is named Goal and the schema that defines it
module.exports = mongoose.model('Goal', goalSchema)