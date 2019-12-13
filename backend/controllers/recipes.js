const Recipe = require('../models/Recipe')

function index(req, res) {
  Recipe
    .find()
    .populate('user')
    .populate('comments.user')
    .then(recipes => res.status(200).json(recipes))
    .catch(err => console.log(err))
}

function show(req, res) {
  Recipe
    .findById(req.params.id)
    .populate('comments.user')
    .then(recipe => {
      console.log('My recipe is', recipe.name)
      if (!recipe) res.status(404).json({ message: '404 Not found' })
      else res.status(200).json(recipe)
    })
    .catch(err => console.log(err))
}


function createRecipe(req, res) {
  req.body.user = req.currentUser
  Recipe
    .create(req.body)
    .then(recipe => res.status(201).json(recipe))
    .catch(err => console.log(err))
}


//************************ADDING COMMENTS FUNCTIONALITY */
function createComment(req, res) {
  req.body.user = req.currentUser
  Recipe
    .findById(req.params.id)
    .populate('comments.user')
    .then(recipe => {
      if (!recipe) return res.status(404).json({ message: 'Not Found' })
      recipe.comments.push(req.body)
      return recipe.save()
    })
    .then(recipe => res.status(201).json(recipe))
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

function deleteComment(req, res) {
  Recipe
    .findById(req.params.id)
    .populate('comments.user')
    .then(recipe => {
      if (!recipe) return res.status(404).json({ message: 'Not Found' })
      const comment = recipe.comments.id(req.params.commentId)
      comment.remove()
      return recipe.save()
    })
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.json(err))
}


module.exports = {
  index,
  show,
  createRecipe,
  createComment,
  deleteComment
}