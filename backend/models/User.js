const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  dietary: { type: [String] },
  favouriteRestaurants: { type: [String] },
  favouriteRecipes: { type: [String] }

}, {
  timestamps: true,
  toJSON: {
    transform(doc, json) {
      delete json.password
      delete json.__v
      return json
    }
    /// Reggie: I've changed the data conversion to json here to exlude our sensitive details, which at this point is just password and then an exlusion of 
    /// of a mongoose number generator.
  }
})

//This is the mongoose specific check to make sure each user is unique

userSchema.plugin(require('mongoose-unique-validator'))

//This is the virtual method to check that the password confirmation field has been provided. It sets a virutal schema field, then runs a function.
//In the function created it checks to see that the confirmatino field has been filled.

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

//This is the validation stage. It uses the pre method to make sure the check is done before submission. It uses the method 'is modified'
//to check that there has been a submission and then checks the condition regarding matching password and confirmatino field. If the conditions
//are true then it stops the submission and returns a response.

userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

//this is the hashing process pre submission to protect data. It operates before submission with the pre method.

userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

//this is the final function run if all is well

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}
module.exports = mongoose.model('User', userSchema) 