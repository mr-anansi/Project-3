const User = require('../models/User') 
const { secret }  = require('../config/environment') 
const jwt = require('jsonwebtoken') // the actual jwt library, we need a method from this to read a token


//Reggie: Once i've included this secure route there's an evaluation on the basis of the header token that's provided. It runs through the steps
//we're more familiar with and then extracts the user id from the token and sets it to the current user. I've used this logic to then find the user
//details on the route.


function secureRoute(req, res, next) {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) { 
    return res.status(401).json({ message: 'Unauthorized' })
  }
	
  const token = req.headers.authorization.replace('Bearer ', '') 
	
  jwt.verify(token, secret, (err, payload) => { 
    if (err) return res.status(401).json({ message: 'Unauthorized' }) 
    User 
      .findById(payload.sub) // finding that user
      .then(user => {
        if (!user) return res.status(401).json({ message: 'Unauthorized' }) 
        req.currentUser = user
        next() // Reggie: if all is well and the user is found here, the next feature pushes to the route controller
      })
      .catch(() => res.status(401).json({ message: 'Unauthorized' }))
  })
}


module.exports = secureRoute