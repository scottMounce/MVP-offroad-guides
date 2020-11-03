const express = require('express');
const app = express();
const cors = require('cors');
const OffroadShop = require('../DB/shop.js');
const Trails = require('../DB/trails.js');
require('dotenv').config()


const port = 3010;

app.use(cors())
app.use(express.static(__dirname + '/../public'));


app.get('/shops', (req, res) => {
  OffroadShop.find({})
  .then((results) => res.json(results))
  .catch((error) => console.log(error))
})

app.get('/trails', (req,res) => {
  Trails.find({})
  .then((results) => res.json(results))
  .catch((error) => console.log(error))
})

app.listen(port, () => {
  console.log('listening on port :', port)
})