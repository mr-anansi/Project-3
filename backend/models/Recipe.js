const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
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
  serves: { type: String },
  complexity: { type: [String] },
  time: { type: String  },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ] 
}, {
  timestamps: true
})


recipeSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Recipe', recipeSchema)