// const Restaurant = require('../../models/Restaurant')
// const seededUser = require('../allseeds/userSeed')
// const User = require('../../models/User')


const restaurantSeed = (user) => {
  return [{
    name: 'Padella',
    location: 'South',
    image: 'https://i0.wp.com/missportmanteau.com/wp-content/uploads/2019/03/Best-Pasta-in-London-Padella-vs-Pastaio.jpg?fit=1440%2C960&ssl=1',
    category: ['Italian', 'Pasta', 'Vegetarian', 'Lunch', 'Dinner'],
    postcode: 'SE1 1TQ',
    priceRange: '£10-30pp',
    user: user
  },
  {
    name: 'Hoppers',
    location: 'West',
    image: 'https://i.imgur.com/LKWokKZ.jpg',
    category: ['Vegetarian', 'Sri Lankan', 'Lunch', 'Dinner'],
    postcode: 'W1D 4SG',
    priceRange: '£10-30pp', 
    link: 'https://www.hopperslondon.com/locations/soho', 
    user: user
  }, 
  {
    name: 'Lahpet', 
    location: 'East', 
    image: 'https://firsttable-images-1n1f2ybvzswiv.s3.us-west-2.amazonaws.com/public/restaurant/2436/f38a6f2232/Lahpet-009__CarouselPhotoW10.JPG', 
    category: ['Vegetarian', 'Burmese', 'Asian', 'Cocktails', 'Vegan', 'Gluten Free Options', 'Lunch', 'Dinner'], 
    postcode: 'E1 6JW', 
    priceRange: '£30-50pp', 
    link: 'https://lahpet.co.uk/', 
    user: user
  }, 
  {
    name: 'Hicce', 
    location: 'North', 
    image: 'https://images.squaremeal.co.uk/cloud/restaurants/12089/images/78334965-0fbd-4fb9-90da-e1022ac12cce.jpg?w=900&h=600&fit=crop', 
    category: ['Vegetarian', 'Tapas', 'Barbecue', 'Cocktails', 'Lunch', 'Dinner', 'Vegan', 'Gluten Free Options'], 
    postcode: 'N1C 4DQ', 
    priceRange: '£30-50pp', 
    link: 'https://www.kingscross.co.uk/hicce', 
    user: user
  }, 
  {
    name: 'Alpes', 
    location: 'South', 
    image: 'https://media.timeout.com/images/105387630/630/472/image.jpg', 
    category: ['Vegetarian', 'Swiss', 'Tapas', 'Lunch', 'Dinner', 'Gluten Free Options'], 
    postcode: 'SW9 8PQ', 
    priceRange: '£10-30pp', 
    link: 'https://www.raclettebrothers.co.uk/', 
    user: user
  },
  {
    name: 'Bao', 
    location: 'West', 
    image: 'http://www.meltingbutter.com/wp-content/uploads/2016/03/000.-BAO-London-meltingbutter.com-Restuarant-Hotspot-1024x683.jpg', 
    category: ['Vegetarian', 'Japanese', 'Lunch', 'Dinner'], 
    postcode: 'W1F 9AS ', 
    priceRange: '£10-30pp', 
    link: 'https://baolondon.com', 
    user: user
  },
  {
    name: 'Morty & Bob/s', 
    location: 'North', 
    image: 'https://media.timeout.com/images/105465697/1372/772/image.jpg', 
    category: ['Vegetarian', 'American', 'Breakfast', 'Lunch', 'Dinner'], 
    postcode: 'N1C 4AB ', 
    priceRange: '£10-30pp', 
    link: 'https://www.mortyandbobs.com', 
    user: user
  },
  {
    name: 'Moio', 
    location: 'North', 
    image: 'https://media.timeout.com/images/105562701/630/472/image.jpg', 
    category: ['Vegetarian', 'Vegan', 'European', 'Lunch', 'Dinner'], 
    postcode: 'N16 7JD', 
    priceRange: '£40-70pp', 
    link: 'https://moiorestaurant.com', 
    user: user
  },
  {
    name: 'Artusi', 
    location: 'South', 
    image: 'https://i.imgur.com/BN7Lrzk.jpg', 
    category: ['Vegetarian', 'Vegan', 'Italian', 'Lunch', 'Dinner'], 
    postcode: 'SE15 4DH ', 
    priceRange: '£30-50pp', 
    link: 'https://artusi.co.uk', 
    user: user
  }, 
  {
    name: 'Babette', 
    location: 'South', 
    image: 'https://i.imgur.com/y6pYy04.jpg', 
    category: ['Vegetarian', 'European', 'Breakfast', 'Lunch', 'Dinner'], 
    postcode: 'SE15 3TR', 
    priceRange: '£30-50pp', 
    link: 'http://babettenunhead.com/food', 
    user: user
  }, 
  {
    name: 'Bombay Bustle', 
    location: 'West', 
    image: 'https://i.imgur.com/59fGMcl.jpg', 
    category: ['Vegetarian', 'Vegan', 'Indian', 'Gluten Free', 'Lunch', 'Dinner'], 
    postcode: 'W1S 2PA', 
    priceRange: '£40-70pp', 
    link: 'https://www.bombaybustle.com', 
    user: user
  }, 
  {
    name: 'Half Cup', 
    location: 'West', 
    image: 'https://imgur.com/1103ceb5-2508-4513-bc1e-4fb31f2fbb3d', 
    category: ['Vegetarian', 'Vegan', 'Gluten Free', 'Breakfast', 'Lunch'], 
    postcode: 'WC1H 9NT', 
    priceRange: '£10-30pp', 
    link: 'http://www.halfcup.co.uk', 
    user: user
  }
  ]
}



module.exports = restaurantSeed