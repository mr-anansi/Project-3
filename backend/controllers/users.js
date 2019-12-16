const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

//Reggie: Weekend work
//Reggie: Actions behind register and login requests

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => res.status(200).json({ message: `Hi ${user.username}! Let's change the way you do food..` })) // evaluate if welcome message set up correctly
    .catch(next)
}

// login route -/login
// user supplies in body of request, email and password only
function login(req, res) {
  User
    .findOne({ email: req.body.email }) //find the user by that email
    .then(user => { //check to if we found a record and the password provided matches what is in the database
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' }) // send a response of unauthorized and end the process here
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '2h' }) // if all good, create a JSON web token (jwt), which includes the user id, a secret to encode/decode and an expiry time for the token
      // Reggie: I've included the user in the response object. This is crucial for further info use across the app (I may change profile logic because of this.)
      res.status(202).json({ message: `Welcome Back ${user.username}`, user, token })
    }) //finally send back a message with that created token
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))
}

// Reggie: This is where I'm creating the profile handler. The logic on what to do when the route is followed is all here.
function show(req, res) {
  User
    .findById(req.currentUser)
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'There\'s a problem with this user...' })
      }
      res.status(200).json({ user })
    })
    .catch(() => {
      res.status(401).json({ message: 'Profile Not Found' })
    })
}


function edit(req, res) {
  User
    .findById(req.currentUser)
    .then(user => {
      if (!user) return res.status(401).json({ message: 'There\'s a problem with this user...' })
      return user.set(req.body)
    })
    .then(user => user.save())
    .then(user => res.status(202).json({ user }))
    .catch(() => res.status(401).json({ message: 'Profile Not Found' }))
}

module.exports = {
  register,
  login,
  show,
  edit
}