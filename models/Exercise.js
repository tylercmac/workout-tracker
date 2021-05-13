const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  duration: {
    type: Number,
  },

  distance: {
    type: Number,
  },

  weight: {
    type: Number,
  },

  reps: {
    type: Number,
    default: 1
  },

  sets: {
    type: Number,
    default: 1
  },

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;