import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { UserContext } from './UserContext'

//Some bugs exist. Too many changes across the form. Needs some updates

const EditProfile = (props) => {
  const [data, setData] = useState({
    username: 'loading',
    email: 'loading',
    age: 0,
    dietary: 'loading'
  })
  const [errors, setErrors] = useState({})

  const { userInfo } = useContext(UserContext)

  useEffect(() => {
    console.log('running form')
    if (userInfo) {
      setData(userInfo)
    } return
    // getUserDetails()
    // console.log('running')
  }, [userInfo])

  // const getUserDetails = () => {

  // }

  const sendUpdates = () => {
    axios.put('/api/profile/edit', data)
      .then(() => props.history.push('/profile'))
      .catch(err => {
        setErrors(err.response.data.errors)
        console.log(err.response.data.errors)
      })
  }

  const handleChange = (e) => {
    e.value = e.target.value
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({})
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendUpdates()
  }

  return (
    <section className='section'>
      <div className="title">Edit Profile</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              Username
              <input onChange={handleChange} className='input is-info' type='text' name='username' value={data.username} />
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
              <input onChange={handleChange} className='input is-info' type='text' name='email' value={data.email} />
            </label>
          </div>
          {errors.email && <small className="help is-danger">
            {errors.email}
          </small>}
        </div>
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              Age
              <input onChange={handleChange} className='input is-info' type='text' name='age' value={data.age} />
            </label>
          </div>
          {errors.age && <small className="help is-danger">
            {errors.age}
          </small>}
        </div>
        {/* I might need some Marissa tag magic on this field for array entry */}
        <div className='field'>
          <div className='control'>
            <label htmlFor=''>
              Dietary
              <input onChange={handleChange} className='input is-info' type='text' name='dietary' value={data.dietary} />
            </label>
          </div>
          {errors.dietary && <small className="help is-danger">
            {errors.dietary}
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
          Change Info
        </button>
      </form>
    </section>
  )
}

export default EditProfile



