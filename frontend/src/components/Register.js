import React, { useState } from 'react'
import axios from 'axios'


const Register = (props) => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})
  // const [formReady, setFormReady] = useState(false)

  //Reggie: This commented out code is on queue to be removed as a code reduction has been managed.

  //I've used use effect over here, however it's not entirely necessary. At the moment though it runs on the basis of the 
  //form boolean state. This state changes on the form submit and once it changes useEffect hears the change and runs the function with the
  //api request in it.

  // useEffect(() => {
  //   postIt()
  //   console.log('running')
  // }, [formReady])

  //This is the function that calls to the api. It has a condition that blocks the code run on the basis of the form boolean state.

  const postIt = () => {
    // if (formReady) {
    // setFormReady(false)
    axios.post('/api/register', data)
      .then(() => props.history.push('/login'))
      .catch(err => {
        setErrors(err.response.data.errors)
        console.log(err.response.data.errors)
      })
    // } else return
  }

  //Reggie: This adds the data to the state. I've changed the errors setting work in better practice. It's initialised to an object instead of
  // a string (the quotation marks) and then when a change is made, its replaced with an empty object

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({})
    // console.log(errors.email.message)
  }

  //Reggie: This form submit function only affects the form submit (setFormReady) boolean

  const handleSubmit = (e) => {
    e.preventDefault()
    postIt()
    // setFormReady(true)
  }

  return (
    <section className='section'>
      <div className="title">Register</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              Username
              <input onChange={handleChange} className='input is-info' type='text' name='username' />
            </label>
          </div>
          {errors.username && <small className="help is-danger">
            {errors.username}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              E-mail
              <input onChange={handleChange} className='input is-info' type='text' name='email' />
            </label>
          </div>
          {errors.email && <small className="help is-danger">
            {errors.email}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              Password
              <input onChange={handleChange} className='input is-info' type='password' name='password' />
            </label>
          </div>
          {errors.password && <small className="help is-danger">
            {errors.password}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              Confirm Password
              <input onChange={handleChange} className='input is-info' type='password' name='passwordConfirmation' />
            </label>
          </div>
          {errors.passwordConfirmation && <small className="help is-danger">
            {errors.passwordConfirmation}
          </small>}
        </div>
        <button className="button is-info">
          Register
        </button>
      </form>
    </section>
  )
}

export default Register