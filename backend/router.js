const router = require('express').Router()
const recipes = require('./controllers/recipes')
const restaurants = require('./controllers/restaurants')
const users = require('./controllers/users')
const secureRoute = require('./lib/secureRoute')

// Reggie: Weekend Work

router.route('/recipes')
  .get(recipes.index)

router.route('/recipes/:id')
  .get(recipes.show)

router.route('/restaurants')
  .get(restaurants.index)

router.route('/restaurants/:id')
  .get(restaurants.show)

// Reggie: I've put a secure route on the profile to enable it to verify, pull data and then show. It does this through following the secure
//process, extracting the id and then following the controller logic.

router.route('/profile')
  .get(secureRoute, users.show)

router.route('/profile/edit')
  .put(secureRoute, users.edit)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router


