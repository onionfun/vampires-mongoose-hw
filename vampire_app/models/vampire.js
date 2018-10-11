const mongoose = require('mongoose')

const vampireSchema = new Schema({
    name: {type: String, require: true},
    hair_color: {type: String, default: "blonde"},
    eye_color: String,
    dob: new Date(Number),
    loves: [String],
    location: String,
    gender: String,
    victims: {type: Number, min: 0}
  });
  module.exports = mongoose.model('Vampire', vampireSchema);