import React, { useState, useEffect } from 'react'
import Select from 'react-select'

const FilteredForm = ({ Restaurants, updateRestaurants }) => {

  const filterOptions = Restaurants.map((restaurant) => {
    return restaurant.category
  })
  console.log(filterOptions)
  // this is an array of arrays of the restaurants categories 
	
  const tagsArray = filterOptions.flat()
  console.log(filterOptions.flat())
  // creates an array of all tags/categories as strings

  const allTags = [...new Set(tagsArray)]
  console.log(allTags)
  // creates an array of tags with no repetition
	
  const allTagsLabeled = allTags.map((tag) => {
    return { value: tag, label: tag }
  })
  // gives the values in the multiselect 

 
  function handleSelect(selectedItems) {
    if (selectedItems === null) return updateRestaurants([])
    updateRestaurants([...selectedItems])
  }

  return <Select
    isMulti
    name="tags"
    options={allTagsLabeled} 
    onChange={handleSelect}
    className="basic-multi-select"
    classNamePrefix="select"
    placeholder="Search by category..."
  />
}

export default FilteredForm







