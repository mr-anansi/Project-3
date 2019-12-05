const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Restaurant = require('../models/Restaurant')
const Recipe = require('../models/Recipe')
const User = require('../models/User')
const restaurantSeed = require('./allseeds/restaurantSeeds')
const recipeSeed = require('./allseeds/recipeSeeds')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([{
          username: 'Nick',
          email: 'nick@email',
          password: 'nick',
          passwordConfirmation: 'nick'
        }])
      })
      .then(users => {
        // Insert data
        console.log(`${'🍷'.repeat(users.length)} users created`)
        // Restaurant.create(restaurantSeed(users))
        return Recipe.create(recipeSeed(users))
      })
      .then(recipes => console.log(`${recipes.length} recipes created`))
      .catch(err => console.log(err))
      .then(() => {
        return User.find({
          username: 'Nick'
        })
      })
      .then(user => {
        console.log(`${user} found`)
        return Restaurant.create(restaurantSeed(user))
      })
      .then(restaurant => console.log(`${restaurant.length} restaurant created`))
      .finally(() => mongoose.connection.close())
  }
)