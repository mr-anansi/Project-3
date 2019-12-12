import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantCard = ({ restaurant }) => (
  // passing through restaurant object as props
  <div className="column is-one-quarter-desktop is-one-third-tablet is-three-quartes-mobile">
    <div className="card">
      <div className="card-image">
        <figure className='image is-5by4 is-centered'>
          <img src={restaurant.image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="card-footer">
          <Link to={`/restaurants/${restaurant._id}`} className="Links">{restaurant.name}</Link>
        </div>
      </div>
    </div>
  </div>
)


export default RestaurantCard