import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ results }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-three-quartes-mobile">
    <div className="card">
      <div className="card-image">
        <figure className='image is-5by4 is-centered'>
          <Link to={`/recipes/${results._id}`}>
            <img className='image' src={results.image} alt={results.name} />
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="card-footer">
          <Link className="Links" to={`/recipes/${results._id}`}>{results.name}</Link>
        </div>
        <br />
      </div>
    </div>
  </div>
)
export default RecipeCard