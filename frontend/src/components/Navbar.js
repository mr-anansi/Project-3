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

