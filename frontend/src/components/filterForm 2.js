import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import Restaurants from './Restaurants'
import axios from 'axios'
import { filter } from 'minimatch'

const initialData = {
  tags: [], 
  selectedTags: [],
  filteredRestaurants: [], 
  e: []
}

const FilteredForm = ({ Restaurants }) => {

  const [form, updateForm] = useState(initialData)

  const filterOptions = Restaurants.map((restaurant) => {
    return restaurant.category 	
  })
  // console.log(filterOptions)
  // this is an array of arrays of the restaurants categories 
	
  const tagsArray = filterOptions.flat()
  // console.log(filterOptions.flat())
  // creates an array of all tags/categories as strings

  const allTags = [...new Set(tagsArray)]
  // console.log(allTags)
  // creates an array of tags with no repetition
	
  const allTagsLabeled = allTags.map((tag) => {
    return { value: tag, label: tag }
  })
  // gives the values in the multiselect 

 
  function handleSelect(e) {
    // listen for select of a value 
    // then filter the restaurants based on this selected value 
    // map over selected options and map over data to look for the match 
    //.includes(e.target.value)
    // map through the options selected then for each map through the data to match - start with one?
    // push matching restaurants into filtered restaurants 
    if (e === null) 
      return
    e.map((type) => {
      // console.log(type.value)
      if (type.value === 'Pasta') 
        // console.log('hello')
      // then maybe have a function to display filtered restaurants
    })
  }
	
  // function filteredRestaurants() {
	// 	let category = 
  // }
	
  const tag = allTags.map((tag) => {
			//  console.log(tag)
  })
  

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







