import React, { useContext } from 'react'
import Auth from '../lib/auth'

import { UserContext } from './UserContext'

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
      <div className="title" style={{ marginTop: 400 }}>See you soon</div>
      <button className="button is-black" onClick={handleSubmit}>
        Complete logout
      </button>
    </div>
  </section>


}

export default Logout