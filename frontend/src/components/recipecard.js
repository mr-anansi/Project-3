import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ results }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card-image">
      <figure className='image is-1by1 is-centered'>
        <Link to={`/recipes/${results._id}`}>
          <img className='image-zoom' src={results.image} alt={results.name} />
        </Link>
      </figure>
    </div>
    <div className="card-content">
      <Link className="subtitle" to={`/recipes/${results._id}`}>{results.name}</Link>
    </div>
  </div>
)
export default RecipeCard