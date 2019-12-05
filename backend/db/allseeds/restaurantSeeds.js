// const Restaurant = require('../../models/Restaurant')
// const seededUser = require('../allseeds/userSeed')
// const User = require('../../models/User')


const restaurantSeed = (user) => {
  return [{
    name: 'Padella',
    location: 'South',
    image: 'https://www.google.com/maps/uv?hl=en&pb=!1s0x4876035768a99e75%3A0xaf7a08783e07f5a4!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPm4QNhBQbd-xdv5-1bqHkbtJ5YNalexyAbzlHf%3Dw426-h320-k-no!5spadella%20shoreditch%20-%20Google%20Search!15sCAQ&imagekey=!1e10!2sAF1QipPm4QNhBQbd-xdv5-1bqHkbtJ5YNalexyAbzlHf&sa=X&ved=2ahUKEwiRg9uvx5zmAhWsTBUIHdEdA_4QoiowCnoECAwQBg#',
    category: ['vegetarian', 'italian', 'pasta'],
    cuisine: 'italian',
    type: ['lunch', 'dinner'],
    postcode: 'SE1 1TQ',
    priceRange: '£-££',
    user: user[0]
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
    user: user[0]
  }]
}



module.exports = restaurantSeed