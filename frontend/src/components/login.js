import React, { useState } from 'react'
import axios from 'axios'
import Auth from '../lib/auth'

const Login = (props) => {
  const [data, setData] = useState()
  const [errors, setErrors] = useState()


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
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="field">
          <label htmlFor="" className="label">
            Email
          </label>
          <div className="control">
            <input
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
              type="text"
              name="password"
              className="input"
            />
          </div>
          {/* {errors.error && <small className="help is-danger">
            {errors.error}
          </small>} */}
        </div>
        <button className="button is-success">
          Login
        </button>
      </form>
    </div>
  </section>


}

export default Login