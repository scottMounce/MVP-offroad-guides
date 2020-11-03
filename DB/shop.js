const mongoose = require('mongoose');
const db = require('./index.js');


const offroadSchema = new mongoose.Schema ({
  name: String,
  logo: String,
  address: String,
  phone: String,
  email: String,
  coords: String
})

const OffroadShop = mongoose.model('OffroadShop', offroadSchema);

module.exports = OffroadShop;