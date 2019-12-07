import React, { useState } from 'react'
import axios from 'axios'
import Auth from '../lib/auth'

//Reggie: This page had some slight changes to make with regards to the syntax for state on the page. The initial state had to be initialised to
// specific values so that the code would stay intact. Errors at the foot of the form reference the message for incorrect details




const Login = (props) => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState('')


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({ errors: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/login', data)

      .then(response => {
        Auth.setToken(response.data.token)
        props.history.push('/recipes')
      })

      .catch(() => setErrors({ message: 'Incorrect credentials' }))
  }


  return <section className="section">
    <div className="container">
      <div className="title">Login</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="" className="label">
            Email
          </label>
          <div className="control">
            <input
              onChange={handleChange}
              type="text"
              name="email"
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Password
          </label>
          <div className="control">
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="input"
            />
          </div>
          {errors.message && <small className="help is-danger">
            {errors.message}
          </small>}
        </div>
        <button className="button is-success">
          Login
        </button>
      </form>
    </div>
  </section>


}

export default Login