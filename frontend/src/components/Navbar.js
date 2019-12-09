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
        <Link className="navbar-link is-arrowless" to="/restaurants">
					Restaurants
        </Link>
        <div className="navbar-dropdown is-boxed">
          <Link className="navbar-item" to="/restaurants">
						All 
          </Link>
          <Link className="navbar-item">
						South London 
          </Link>
          <Link className="navbar-item">
						North London 
          </Link>
          <Link className="navbar-item" to="/restaurants">
						West London 
          </Link>
          <Link className="navbar-item">
						East London 
          </Link>
          <Link className="navbar-item">
						Central London 
          </Link>
        </div>
      </div>
      {/* {Auth.isAuthorized() &&  */}
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link is-arrowless" to="/recipes">
					Recipes
        </Link>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link is-arrowless" to="/">
					User
        </Link>
        <div className="navbar-dropdown is-boxed">
          <Link className="navbar-item" id="user" to="/register">
						Register
          </Link>
          <Link className="navbar-item" id="user" to="/login">
						Login
          </Link>
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

