import React, { useState } from 'react'
import axios from 'axios'


const Register = (props) => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})
 

  const postIt = () => {
    axios.post('/api/register', data)
      .then(() => props.history.push('/login'))
      .catch(err => {
        setErrors(err.response.data.errors)
        console.log(err.response.data.errors)
      })
  }


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({})
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    postIt()
  }

  return (
    <section className='section'>
      <div className="title">Add a new Recipe</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              What's it called?
              <input onChange={handleChange} className='input is-info' type='text' name='name' />
            </label>
          </div>
          {errors.name && <small className="help is-danger">
            {errors.name}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              Who created it?
              <input onChange={handleChange} className='input is-info' type='text' name='author' />
            </label>
          </div>
          {errors.author && <small className="help is-danger">
            {errors.author}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              What&apos;s the story behind this dish?
              <input onChange={handleChange} className='input is-info' type='text' name='author' />
            </label>
          </div>
          {errors.author && <small className="help is-danger">
            {errors.author}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              List the ingredients
              <input onChange={handleChange} className='input is-info' type='text' name='author' />
            </label>
          </div>
          {errors.author && <small className="help is-danger">
            {errors.author}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              List the steps to make it
              <input onChange={handleChange} className='input is-info' type='text' name='author' />
            </label>
          </div>
          {errors.author && <small className="help is-danger">
            {errors.author}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              Add categories
              <input onChange={handleChange} className='input is-info' type='text' name='author' />
            </label>
          </div>
          {errors.author && <small className="help is-danger">
            {errors.author}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              Add a link to a picture of it
              <input onChange={handleChange} className='input is-info' type='text' name='image' value={data.image ? data.image : ''} />
            </label>
          </div>
          {errors.image && <small className="help is-danger">
            {errors.image}
          </small>}
        </div>
        <button className="button is-info">
          Submit Recipe!
        </button>
      </form>
    </section>
  )
}

export default Register