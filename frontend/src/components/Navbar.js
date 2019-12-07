import React, { useState }from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {
  // const [nav, setNav] = useState()
	

  // function toggleNavBar() {
  //   setNav({ isOpen: !isOpen })
  // }
  // useState({isOpen: false})

  return <nav className="navbar is-black is-fixed-top ">
    <div className="navbar-brand">
      <div className="navbar-item"></div>
      <Link className="navbar-item" to="/">Home</Link>
    </div>
    <div className="navbar-end">
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link is-arrowless" to="/restaurants">
					Restaurants
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="/restaurants">
						All 
          </a>
          <a className="navbar-item">
						South London 
          </a>
          <a className="navbar-item">
						North London 
          </a>
          <a className="navbar-item" href="/restaurants">
						West London 
          </a>
          <a className="navbar-item">
						East London 
          </a>
          <a className="navbar-item">
						Central London 
          </a>
        </div>
      </div>
      {/* {Auth.isAuthorized() &&  */}
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link is-arrowless" href="/recipes">
					Recipes
        </a>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link is-arrowless" to="/">
					User
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" id="user" href="/register">
						Register
          </a>
          <a className="navbar-item" id="user" href="/login">
						Login
          </a>
          {/* {Auth.isAuthorized() &&  */}
          <Link className="navbar-item" id="user" to="/">
					Logout
          </Link> 
        </div>
      </div>
      <div className="navbar-item"></div>
      <div className="navbar-item"></div>
      <div className="navbar-item"></div>
    </div>
  </nav>   
}

export default Navbar

