function errorHandler(err, req, res, next) {
  if (err.name === 'ValidationError') {
    const errors = {}
    for (const key in err.errors) {
      errors[key] = err.errors[key].message
    }
    //This error handler that was built by Nick reduces the nesting of the error object, and formats it a little better.
    return res.status(422).json({ message: 'Unprocessable Entity', errors })
  }
  res.sendStatus(500)
  next(err)
}
module.exports = errorHandler