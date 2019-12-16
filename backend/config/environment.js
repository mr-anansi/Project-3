const port = process.env.PORT || 4000
// const dbURIPrefix = 'mongodb://localhost/'
// const dbName = 'just-eat'
// const dbURI = `${dbURIPrefix}${dbName}`
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/the-kitchen'


// our secret used for encoing our JWT tokens, used in '/controllers/user' and '/lib/secureRoute'
const secret = 'Santa\'s not real. Jaffa cakes are the best in the world'
module.exports = {
  port,
  dbURI,
  secret
}

