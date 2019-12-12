import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'

//Reggie: Weekend Work
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
        {/* <div className="columns is-multiline">
          <div className="column is-half-tablet"> */}
        {data.user && <h1>
          Welcome to The Kitchen, {data.user.username}!
        </h1>}
        {data.user && <h2>
          {data.user.email}
        </h2>}
        <div className="subtitle">
          {data.user && data.user.dietary.map((diet, id) =>
            <p key={id}>{diet}</p>
          )}
        </div>
        <div>
          <h3>Quicklinks</h3>
          <Link className="tag is-info is-light" to='/profile/edit'>Edit Profile</Link>
          <Link className="tag is-info is-light" to='/recipes'>Recipes</Link>
          <Link className="tag is-info is-light" to='/restaurants'>Restaurants</Link>
          <Link className="tag is-info is-light" to='/'>Home</Link>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2>Your Favourite Restaurants...</h2>
          <div className="columns is-multiline is-gapless">
            {data.user && data.user.favouriteRestaurants.map((rest, id) => {
              return (
                <div key={id} className="column is-one-quarter-desktop is-one-third-tablet is-three-quartes-mobile">
                  <div className="card">
                    <h3 className="fav-title card-header-title is-centered"><Link className='fav-link' to={`/restaurants/${rest._id}`}>{rest.name}</Link></h3>
                    <p className="fav-sub">{rest.location}</p>
                    <div className="card-image">
                      <figure className="image is-5by4 is-centered">
                        <img className="image" src={rest.image[0]} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="card-footer">

                        <br />
                        <Link to="/" className="card-footer-item">Remove</Link>
                      </div>
                      <br />
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="container">
          <h3>Your Favourite Recipes...</h3>
          <div className="columns is-multiline">
            {data.user && data.user.favouriteRecipes.map((recipes, id) => {
              return (
                <div key={id} className="column is-one-quarter-desktop is-one-third-tablet is-three-quartes-mobile">
                  <div className="card">
                    <h3 className="fav-title-recipe card-header-title is-centered"><Link className='fav-title-recipe' to={`/restaurants/${recipes._id}`}>{recipes.name}</Link></h3>
                    <p className="fav-sub">by {recipes.author}</p>
                    <div className="card-image">
                      <figure className="image is-5by4">
                        <img className="image" src={recipes.image[0]} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="card-footer">
                        <Link to="/" className="card-footer-item">Remove</Link>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>)
            })}
          </div>
        </div>
        {/* </div>
        </div> */}
      </div>
    </div>
  )
}


export default Profile