const router = require('express').Router();

const workoutAPI = require('./workoutAPI.js')

router.use('/workouts', workoutAPI);

module.exports = router;