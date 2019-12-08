import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import Auth from '../lib/auth'
import { UserContext } from './UserContext'

//Reggie: Weekend work

const Navbar = () => {
  // const [nav, setNav] = useState()

  /* Reggie: useContext is once again used here. I used the navbar to experiment and figured out what can be done and what the limitations of the new
  feature are. Refresh actions need to be removed. I briefly substituted a dummy component to test out the user data retrieval on the single pages. 
  I've returned most links to their original places. */
  const { userInfo } = useContext(UserContext)

  // function toggleNavBar() {
  //   setNav({ isOpen: !isOpen })
  // }
  // useState({isOpen: false})

  return <nav className="navbar is-black is-fixed-top ">
    <div className="navbar-brand">
      <div className="navbar-item"></div>
      <Link className="navbar-item" to="/">Home</Link>
      {/* Reggie: The following line displays the change in status of the logged in user by displaying an internet icon on logon */}
      {userInfo ? <img className="navbar-item" src="https://bit.ly/2PtuQAG" alt="" /> : <span className="navbar-item">Try Log in...</span>}
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
        <a className="navbar-link is-arrowless" to="/recipes">
          Recipes
        </a>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link is-arrowless" to="/">
          User
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" id="user" to="/register">
            Register
          </a>
          <a className="navbar-item" id="user" to="/login">
            Login
          </a>
          {/* {Auth.isAuthorized() &&  */}
          {/* Added a logout path */}
          <Link className="navbar-item" id="user" to="/logout">
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

