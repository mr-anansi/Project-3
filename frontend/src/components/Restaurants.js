import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import axios from 'axios'

import InputTags from './Tags'

const Restaurants = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/restaurants')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return  <div className="restaurants">
    <div className="section">
      <div className="container is-fixed-top"></div>
      <InputTags />
      <div className="section has-text-centered">
        <div className="container is-center">
          {/* <div className="title">london restaurants</div>
      <div className="subtitle">our top picks</div> */}
          <div className="column is-centered">
            <div>{data.map((restaurant, index) => {
              return <RestaurantCard key={index} restaurant={restaurant} />
            })}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default Restaurants