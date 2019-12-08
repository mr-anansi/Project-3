import React, { useState, useMemo } from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import axios from 'axios'
// import Auth from './lib/auth'

import 'bulma'
import '../src/style.scss'

import Restaurants from './components/Restaurants'
import SingleRestaurant from './components/SingleRestaurant'
import Navbar from './components/Navbar'
import Login from './components/login'
import Recipes from './components/recipes'
import SingleRecipe from './components/singlerecipe'
import Register from './components/Register'
import Profile from './components/Profile'
import Logout from './components/LogOut'
import { UserContext } from './components/UserContext'

const App = () => {
  /* Reggie: (First methods) The issue of authentication for user specific features has come up and so i'm experimenting with setting state at an app level and passing down
  the information that's required at a single point. I've also included a logout component and route*/

  const [userInfo, setUserInfo] = useState(null)
  // const [profile, setProfile] = useState(false)

  /* Reggie: This top level constant is written with the help of another hook (useMemo). This hook allows the variable to be changed when one of the dependencies
  change. */
  const sharedInfo = useMemo(() => ({ userInfo, setUserInfo }), [userInfo, setUserInfo])

  // useEffect(() => {
  //   console.log('running', Auth.isAuthorized())
  //   console.log(profile)
  //   axios.get('/api/profile', {
  //     headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //   })
  //     .then(response => {
  //       setUserInfo(response.data)
  //     })
  //     .catch(error => console.log(error))
  //   // .then(console.log(data))
  // }, [profile])

  //Reggie: Logout and Profile paths were created over the weekend
  /* This is where the wrapper that establishes the scope of the sharing of changeable information is provided. The constant defined up
  top is passed down into the wrapper at the value property. */

  return (<BrowserRouter>
    <UserContext.Provider value={sharedInfo}>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} /> */}
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/recipes/:id" component={SingleRecipe} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route exact path="/restaurants/:id" component={SingleRestaurant} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        {/* <SecureRoute path="/recipes/new" component={NewRecipe} />
      <SecureRoute path="/recipes/edit/:id" component={EditRecipe} /> */}
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </UserContext.Provider>
  </BrowserRouter>)
}
ReactDOM.render(<App />,
  document.getElementById('root'))