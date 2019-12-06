import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import axios from 'axios'
// import Auth from './lib/auth'

import 'bulma'
import '../src/style.scss'

import Restaurants from './components/Restaurants'
import SingleRestaurant from './components/SingleRestaurant'
import Navbar from './components/Navbar'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch> 
      {/* <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} /> */}
      {/* <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/recipes/:id" component={SingleRecipe} /> */}
      <Route exact path="/restaurants" component={Restaurants} />
      <Route exact path="/restaurants/:id" component={SingleRestaurant} />
      {/* <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <SecureRoute path="/recipes/new" component={NewRecipe} />
      <SecureRoute path="/recipes/edit/:id" component={EditRecipe} />
      <SecureRoute path="/user/:id" component={UserProfile} /> */}
    </Switch>
  </BrowserRouter>
)
ReactDOM.render(<App />, 
  document.getElementById('root'))