const mongoose = require("../db/connection.js");

const Schema = mongoose.Schema;

const Driver = new Schema({
  name: String,
  birthplace: String,
  team: String,
  rank: Number,
  image: String
});

module.exports = mongoose.model("Driver", Driver);
