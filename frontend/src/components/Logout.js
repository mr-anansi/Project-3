import React from 'react'
// import axios from 'axios'
import Auth from '../lib/auth'

/* Reggie: I created a temporary intermediary page for the logout action, so that the logout function could be called on a button click. (The
  function clears local storage thereby kicking the user out of all logged in areas) */

const Logout = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    Auth.logout()
    props.history.push('/')
  }

  return <section className="section">
    <div className="container">
      <div className="title">Is this what you really want?</div>
      <button className="button is-danger" onClick={handleSubmit}>
        Logout
      </button>
      {/* {errors.message && <small className="help is-danger">
        {errors.message}
      </small>} */}
    </div>
  </section>


}

export default Logout