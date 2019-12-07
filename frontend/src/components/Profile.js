import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Auth from '../lib/auth'

/* Reggie: I created this page over the weekend for the project. Obviously Marissa will have something to say about styling, 
however I had to get my hands on some logic behind it. In this form, there is no need for an id in the path and the user's specific data is
only accessible by the logged in user. It's up to us to decide what to display.*/

const Profile = () => {
  // I've initialised our state with an object
  const [data, setData] = useState({})

  /* In order to get the api to recognise the user as the backend logic dictates, i need to present the token received from the login process.
  Since we're working with local storage (see Auth class), at this point I retrieve the token from local storage and insert it into the 
  header in the bearer syntax */

  useEffect(() => {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(response => {
        setData(response.data)
        console.log(typeof response.data)
      })
      .catch(error => console.log(error))
      // .then(console.log(data))
  }, [])

  /* There's another oddity at this point. The render happens before the data is pulled and thus one of those conditional tricks is needed
  to get the data to show correctly. At a later stage, we can include a couple of loading styles to replace what at times can be blank load
  times.*/

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-half-tablet">
            {data.user && <p className="title">
              {data.user.username}'s Dashboard
            </p>}
            <div className="subtitle">
              {data.email}
            </div>
            <div className="subtitle">
              {data.user && data.user.dietary.map((diet, id) =>
                <p key={id}>{diet}</p>
              )}
            </div>
            <h3>Favourite Restaurants</h3>
            <ul>
              {data.favouriteRestaurants && data.user.favouriteRestaurants.map((eateries, id) =>
                <li key={id}>{eateries}</li>
              )}
            </ul>
            <h3>Favourite Recipes</h3>
            <ul>
              {data.favouriteRecipes && data.user.favouriteRecipes.map((recipes, id) =>
                <li key={id}>{recipes}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Profile