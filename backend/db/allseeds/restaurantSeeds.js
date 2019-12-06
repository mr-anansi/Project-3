// const Restaurant = require('../../models/Restaurant')
// const seededUser = require('../allseeds/userSeed')
// const User = require('../../models/User')


const restaurantSeed = (user) => {
  return [{
    name: 'Padella',
    location: 'South',
    image: 'https://media.timeout.com/images/104828760/630/472/image.jpg',
    category: ['vegetarian', 'italian', 'pasta'],
    cuisine: 'italian',
    type: ['lunch', 'dinner'],
    postcode: 'SE1 1TQ',
    priceRange: '£-££',
    user: user
  },
  {
    name: 'Hoppers',
    location: 'West',
    image: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/06/17/taste-of-hoppers.jpg?w968',
    category: ['Vegetarian', 'Sri Lankan', ''],
    cuisine: 'italian', 
    type: ['Lunch', 'Dinner'],
    dietary: ['Vegetarian'],
    postcode: 'W1D 4SG',
    priceRange: '£10-30', 
    link: 'https://www.hopperslondon.com/locations/soho', 
    user: user
  }]
}



module.exports = restaurantSeed