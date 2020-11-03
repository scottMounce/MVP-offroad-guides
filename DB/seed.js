const db = require('./index.js');
const OffroadShop = require('./shop.js');
const Trails = require('./trails.js');

let data = [];

let ltw = {
  name: 'LTW Motorsports',
  logo: 'https://reviewsimages.s3-us-west-1.amazonaws.com/logo.png',
  address: '11881 Magnolia Ave STE 30, Riverside, CA 92503',
  phone: '(951) 651-4150',
  email: 'info@ltw-motorsports.com',
  coords: '33.896517, -117.490350'
}



let rubicon = {
  name: 'Rubicon',
  image: 'https://reviewsimages.s3-us-west-1.amazonaws.com/How-long-does-it-take-to-drive-the-Rubicon-trail.jpeg',
  trailHeadCoords: '39.003319, -120.311535'  
}
data.push(rubicon);

let fordyce = {
  name: 'Fordyce',
  image: 'https://reviewsimages.s3-us-west-1.amazonaws.com/fordyce.jpg',
  trailHeadCoords: '39.33151, -120.57257'
}
data.push(fordyce);

let moab = {
  name: 'Moab',
  image: 'https://reviewsimages.s3-us-west-1.amazonaws.com/3a2dce7379.jpeg',
  trailHeadCoords: '38.577641, -109.554331'
}
data.push(moab);



Trails.create(data)
  .then(() => {console.log('trails seeded')})
  .catch((error) => {console.log('error seeding trails :', error)})


OffroadShop.create(ltw)
  .then(() => {console.log('ltw seeded');})
  .catch((error) => {console.log('error seeding LTW :', error);});