// const Restaurant = require('../../models/Restaurant')
// const seededUser = require('../allseeds/userSeed')
// const User = require('../../models/User')


const restaurantSeed = (user) => {
  return [{
    name: 'Padella',
    location: 'South',
    image: 'https://media.timeout.com/images/104828760/630/472/image.jpg',
    category: ['italian', 'pasta'],
    dietary: ['Vegetarian friendly'],
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
    type: ['Lunch', 'Dinner'],
    dietary: ['Vegetarian friendly'],
    postcode: 'W1D 4SG',
    priceRange: '£10-30pp', 
    link: 'https://www.hopperslondon.com/locations/soho', 
    user: user
  }, 
  {
    name: 'Lahpet', 
    location: 'East', 
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/a8/c7/8a/nangyi-thohk.jpg', 
    category: ['Vegetarian', 'Burmese', 'Asian', 'Cocktails'], 
    type: ['Lunch', 'Dinner'], 
    dietary: ['Vegetarian friendly', 'Vegan', 'Gluten Free Options'], 
    postcode: 'E1 6JW', 
    priceRange: '£30-50pp', 
    link: 'https://lahpet.co.uk/', 
    user: user
	}]
}



module.exports = restaurantSeed