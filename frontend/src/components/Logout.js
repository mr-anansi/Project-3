import React, { useContext } from 'react'
import Auth from '../lib/auth'

import { UserContext } from './UserContext'

/* Reggie: I created a temporary intermediary page for the logout action, so that the logout function could be called on a button click. (The
  function clears local storage thereby kicking the user out of all logged in areas) */

const Logout = (props) => {

  const { setUserInfo } = useContext(UserContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    Auth.logout()
    setUserInfo(null)
    props.history.push('/')
  }

  return <section className="section">
    <div className="container">
      <div className="title">But....but....food...</div>
      <button className="button is-danger" onClick={handleSubmit}>
        Complete logout
      </button>
      {/* {errors.message && <small className="help is-danger">
        {errors.message}
      </small>} */}
    </div>
  </section>


}

export default Logout