const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  about: { type: String },
  ingredients: { type: [String], required: true },
  method: { type: [String], required: true },
  image: { type: [String], required: true },
  category: { type: [String], required: true },
  cuisine: { type: String },
  type: { type: [String], required: true },
  dietary: { type: [String] },
  complexity: { type: [String], required: true },
  time: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ] 
}, {
  timestamps: true
})


recipeSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Recipe', recipeSchema)