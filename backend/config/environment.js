const port = 8000
const dbURIPrefix = 'mongodb://localhost/'
const dbName = 'just-eat'
const dbURI = `${dbURIPrefix}${dbName}`


// our secret used for encoing our JWT tokens, used in '/controllers/user' and '/lib/secureRoute'
const secret = 'Santa\'s not real. Jaffa cakes are the best in the world'
module.exports = {
  port,
  dbURI,
  secret
}

