const router = require('express').Router()
const recipes = require('./controllers/recipes')
const restaurants = require('./controllers/restaurants')
// const users = require('./controllers/users')

// const secureRoute = require('./lib/secureRoute')

router.route('/recipes')
  .get(recipes.index)

router.route('/recipes/:id')
  .get(recipes.show)

router.route('/restaurants')
  .get(restaurants.index)

router.route('/restaurants/:id')
  .get(restaurants.show)

// router.route('/register')
//   .post(users.register)

// router.route('/login')
//   .post(users.login)

module.exports = router


