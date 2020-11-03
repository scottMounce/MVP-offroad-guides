const mongoose = require('mongoose');
const db = require('./index.js');



const trailsSchema = new mongoose.Schema ({
  name: String,
  image: String,
  trailHeadCoords: String,
  trailEndCoords: String
})

const Trails = mongoose.model('Trails', trailsSchema);
module.exports = Trails;