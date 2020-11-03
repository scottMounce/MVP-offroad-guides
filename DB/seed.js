const db = require('./index.js');
const OffroadShop = require('./shop.js');

let data = [];

let ltw = {
  name: 'LTW Motorsports',
  logo: 'https://reviewsimages.s3-us-west-1.amazonaws.com/logo.png',
  address: '11881 Magnolia Ave STE 30, Riverside, CA 92503',
  phone: '(951) 651-4150',
  email: 'info@ltw-motorsports.com',
  coords: '33.896517, -117.490350'
}

OffroadShop.create(ltw)
  .then(() => {console.log('ltw seeded');})
  .catch((error) => {console.log(error);});