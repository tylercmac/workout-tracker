const express = require("express");
const routes = require('./routes');
const logger = require("morgan");
const path = require('path');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { useNewUrlParser: true });

app.get("/", (req, res) => {
  res.sendFile('/index.html')
})

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, `/public/exercise.html`));
})

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, `/public/stats.html`));
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});