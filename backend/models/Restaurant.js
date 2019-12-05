const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  image: { type: [String], required: true },
  category: { type: [String], required: true },
  type: { type: [String], required: true },
  dietary: { type: [String] },
  postcode: { type: [String], required: true },
  priceRange: { type: String, required: true },
  link: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
}, {
  timestamps: true
})


restaurantSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Restaurant', restaurantSchema)