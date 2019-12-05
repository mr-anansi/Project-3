const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Restaurant = require('../models/Restaurant')
const User = require('../models/User')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([{
          username: 'Marissa',
          email: 'marissa@email',
          password: 'mar100',
          passwordConfirmation: 'mar100'
        }])
      })
      .then(users => {
        // Insert data
        console.log(`${'🙍‍♀️'.repeat(users.length)} users created`)
        return Restaurant.create([
          {
            name: 'Padella',
            location: 'South',
            image: 'https://www.google.com/maps/uv?hl=en&pb=!1s0x4876035768a99e75%3A0xaf7a08783e07f5a4!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPm4QNhBQbd-xdv5-1bqHkbtJ5YNalexyAbzlHf%3Dw426-h320-k-no!5spadella%20shoreditch%20-%20Google%20Search!15sCAQ&imagekey=!1e10!2sAF1QipPm4QNhBQbd-xdv5-1bqHkbtJ5YNalexyAbzlHf&sa=X&ved=2ahUKEwiRg9uvx5zmAhWsTBUIHdEdA_4QoiowCnoECAwQBg#',
            category: ['Vegetarian', 'Italian', 'Pasta'], 
            type: ['Lunch', 'Dinner'],
            dietary: ['Vegetarian'],
            postcode: 'SE1 1TQ',
            priceRange: '£10-30', 
            link: 'https://www.padella.co/', 
            user: users[0]
          }, 
          {
            name: 'Hoppers',
            location: 'West',
            image: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/06/17/taste-of-hoppers.jpg?w968',
            category: ['Vegetarian', 'Sri Lankan', ''], 
            type: ['Lunch', 'Dinner'],
            dietary: ['Vegetarian'],
            postcode: 'W1D 4SG',
            priceRange: '£10-30', 
            link: 'https://www.hopperslondon.com/locations/soho', 
            user: users[0]
          }
        ])
      })
      .then(restaurants => console.log(`${restaurants.length} Restaurants created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)