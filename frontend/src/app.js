import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
// import './styles/style.scss'

import Recipes from './components/recipes'
import SingleRecipe from './components/singlerecipe'
import Login from './components/login'


import Mailjet from './components/EmailRecipes'



const App = () => (
  <BrowserRouter>
    {/* <Navbar /> */}
    <Switch>
      {/* <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} /> */}
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/recipes/:id" component={SingleRecipe} />
      {/* <Route exact path="/restaurants" component={Restaurants} /> */}
      {/* <Route exact path="/restaurants/:id" component={SingleRestaurant} /> */}
      {/* <Route path="/register" component={Register} /> */}
      <Route path="/login" component={Login} />
      <Route path="/Mailjet" component={Mailjet} />
      {/* <SecureRoute path="/recipes/new" component={NewRecipe} /> */}
      {/* <SecureRoute path="/recipes/edit/:id" component={EditRecipe} /> */}
      {/* <SecureRoute path="/user/:id" component={UserProfile} /> */}
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />,
  document.getElementById('root'))