import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import axios from 'axios'

import FilteredForm from './filterForm'

const Restaurants = () => {
  const [initialData, setInitialData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    axios.get('/api/restaurants')
      .then(res => {
        setInitialData(res.data)
        setFilteredData([...res.data])
      })
      .catch(err => console.log(err))
  }, [])
	
  function filterRestaurants(tags) {
    if (tags.length === 0) {
      return setFilteredData([...initialData])
    }
    const types = tags.map(item => item.value)
    const restaurants = filteredData.filter((restaurant) => {
      return types.every(element => restaurant.category.includes(element))
    })
    setFilteredData(restaurants) 
  // is the first array a subset of the second?
  // this basically checks every type 
  }
	
	
  return <div className="restaurants">
    <div className="section">
      {/* <div className="container is-fixed-top">{allTags.toString()}</div> */}
    </div>
    <FilteredForm 
      Restaurants={filteredData}
      updateRestaurants={filterRestaurants}
    />
    <div className="section has-text-centered">
      <div className="container is-center">
        <div className="column is-centered">
          <div>{filteredData.map((restaurant, index) => {
            return <RestaurantCard key={index} restaurant={restaurant} />
          })}</div>
        </div>
      </div>
    </div>
  </div>

}

export default Restaurants