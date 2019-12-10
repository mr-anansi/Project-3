import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import axios from 'axios'

import FilteredForm from './filterForm'
import { filter } from 'minimatch'
// import FilteredForm from './filterForm'

const Restaurants = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/restaurants')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
	
  // let filterOptions = data.map((restaurant) => {
  //   return restaurant.category 	
  // })
	
  // const tagsArray = filterOptions.flat()
  // console.log(filterOptions.flat())
  // const allTags = [...new Set(tagsArray)]
  // console.log(allTags)

  // function handleSubmit() {
  //   const filteredTags = allTags.map((tag) => {
  //     console.log(tag)
  //     return tag
  //     // logic needed for if the tag matches any restaurant categories, show those cards 
  //   })
  // }
	
  return <div className="restaurants">
    <div className="section">
      {/* <div className="container is-fixed-top">{allTags.toString()}</div> */}
    </div>
    <FilteredForm 
      Restaurants={data}
    />
    <div className="section has-text-centered">
      <div className="container is-center">
        <div className="column is-centered">
          <div>{data.map((restaurant, index) => {
            return <RestaurantCard key={index} restaurant={restaurant} />
          })}</div>
        </div>
      </div>
    </div>
  </div>

}

export default Restaurants