import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantCard = ({ restaurant }) => (
  // passing through restaurant object as props
  <div className="column is-full-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-96x128">
          <img src={restaurant.image} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <Link to={`/restaurants/${restaurant._id}`} className="Links">{restaurant.name}</Link>
      </div>
    </div>
  </div>
)


export default RestaurantCard