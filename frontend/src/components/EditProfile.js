import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Auth from '../lib/auth'

import { UserContext } from './UserContext'

const EditProfile = (props) => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})

  const { userInfo, setUserInfo } = useContext(UserContext)

  useEffect(() => {
    if (userInfo) {
      setData(userInfo)
    } return
  }, [userInfo])

  const sendUpdates = () => {
    axios.put('/api/profile/edit', data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        setUserInfo(res.data.user)
        props.history.push('/profile')
      })
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
    sendUpdates()
  }

  return (
    <section className='section has-text-centered is-full-height'>
      <div className="container has-text-centered" id="editpro">
        <div className="title is-size-1 title has-text-white">Edit Profile</div>
        <form className="form has-text-centered" onSubmit={handleSubmit}>
          <div className='field'>
            <div className='control'>
              <label htmlFor='' className="label has-text-white">
                Full Name
              <input onChange={handleChange} className='input is-info' type='text' name='username' value={data.username ? data.username : ''} />
              </label>
            </div>
            {errors.username && <small className="help is-danger">
              {errors.username}
            </small>}
          </div>
          <div className='field'>
            <div className='control'>
              <label htmlFor='' className="label has-text-white">
                E-mail
              <input onChange={handleChange} className='input is-info' type='text' name='email' value={data.email ? data.email : ''} />
              </label>
            </div>
            {errors.email && <small className="help is-danger">
              {errors.email}
            </small>}
          </div>
          <div className='field'>
            <div className='control'>
              <label htmlFor='' className="label has-text-white">
                Age
              <input onChange={handleChange} className='input is-info' type='text' name='age' value={data.age ? data.age : ''} />
              </label>
            </div>
            {errors.age && <small className="help is-danger">
              {errors.age}
            </small>}
          </div>
          <div className='field'>
            <div className='control'>
              <label htmlFor='' className="label has-text-white">
                Link to Profile Picture
              <input onChange={handleChange} className='input is-info' type='text' name='image' value={data.image ? data.image : ''} />
              </label>
            </div>
            {errors.image && <small className="help is-danger">
              {errors.image}
            </small>}
          </div>
          <div className='field'>
            <div className='control'>
              <label htmlFor='' className="label has-text-white">
                Dietary
              <input onChange={handleChange} className='input is-info' type='text' name='dietary' value={data.dietary ? data.dietary : ''} />
              </label>
            </div>
            {errors.dietary && <small className="help is-danger">
              {errors.dietary}
            </small>}
          </div>
          <div className='field'>
            <div className='control'>
              <label htmlFor='' className="label has-text-white">
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
              <label htmlFor='' className="label has-text-white">
                Confirm Password
              <input onChange={handleChange} className='input is-info' type='password' name='passwordConfirmation' />
              </label>
            </div>
            {errors.passwordConfirmation && <small className="help is-danger">
              {errors.passwordConfirmation}
            </small>}
          </div>
          <button className="button is-info">
            Change Info
        </button>
        </form>
      </div>
    </section>
  )
}

export default EditProfile



