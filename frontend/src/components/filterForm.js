import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import Restaurants from './Restaurants'
import axios from 'axios'
import { filter } from 'minimatch'

// const initialData = {
//   tags: [], 
//   selectedTags: [],
//   filteredRestaurants: [], 
//   e: []
// }

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

  // could do axios.get(api/restaurants?category=vegetarian) - ${type.value}
	
	
  // axios.get(/api/restaurants/${category})
	

  // const tag = allTags.map((tag) => {
  //   console.log(tag)
  // })


  // function handleSubmit(event) {
  //   event.preventDefault()
  //   allTags.map((tag) => {
  //     console.log(tag)
  //     if (tag === allTags) 
  //       console.log('hello')
  //     // return updateForm(filteredTags)
  //     // logic needed for if the tag matches any restaurant categories, show those cards 
  //   })
  // }

  return <Select
    isMulti
    name="tags"
    options={allTagsLabeled} 
    onChange={handleSelect}
    className="basic-multi-select"
    classNamePrefix="select"
  />
}

export default FilteredForm







