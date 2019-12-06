import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

const SingleRestaurant = (props) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/api/restaurants/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  
  return <div className="section has-text-centered is-full-height">
    <div className="container is-center">
      <div className="columns is-multiline">
        <div className="column is-half-tablet">
          <div className="title">
            {data.name}
          </div>
          <div className="subtitle">
            {data.category}
          </div>
          <img src={data.image} alt="Placeholder image"/>
          <p>
            {data.type}
          </p>
          <p>
            {data.location}
          </p>
          <p>
            {data.postcode}
          </p>
          <p>
            {data.priceRange}
          </p>
        </div>
      </div>
    </div>
  </div>

}

export default SingleRestaurant