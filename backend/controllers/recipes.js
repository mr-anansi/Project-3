const Recipe = require('../models/Recipe')

function index(req, res) {
  Recipe
    .find()
    .populate('user')
    .then(recipes => res.status(200).json(recipes))
    .catch(err => console.log(err))
}

function show(req, res) {
  Recipe
    .findById(req.params.id)
    .then(recipe => {
      // Reggie: console logged the name as opposed to the whole object
      console.log('My recipe is', recipe.name)
      if (!recipe) res.status(404).json({ message: '404 Not found' })
      else res.status(200).json(recipe)
    })
    .catch(err => console.log(err))
}

module.exports = {
  index,
  show
}