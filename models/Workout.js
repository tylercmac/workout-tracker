const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    }
  ],

  totalDuration: Number,
  totalDistance: Number,
  totalWeight: Number,
  totalSets: Number,
  totalReps: Number,

});

WorkoutSchema.methods.addUpDuration = function() {
  let totDur = 0;
  for (var i = 0; i < this.exercises.length; i++) {
    totDur += this.exercises[i].duration;
  }
  return this.totalDuration = totDur;
}
WorkoutSchema.methods.addUpDistance = function() {
  let totDist = 0;
  for (var i = 0; i < this.exercises.distance; i++) {
    totDist += this.exercises[i].distance;
  }
  return this.totalDistance = totDist;
}



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;