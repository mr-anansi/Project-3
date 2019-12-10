import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import CategoryCard from './CategoryCard'
import RecipeCard from './recipecard'
import { UserContext } from './UserContext'

const Recipes = () => {
  const [data, setData] = useState([])

  const { userInfo } = useContext(UserContext)

  useEffect(() => {
    axios.get('/api/recipes')
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }, [])






  let selectedCategory = 'Vegan'


  let specialData = data



  // finds all the categories to be added to the page as clickable links
  const createTags = data.map((recipes) => {
    return recipes.category
  })
  const tagsArray = createTags.flat()
  const allTags = [...new Set(tagsArray)]


  // maps through the data and returns all the objects that comtain a specific Category
  const filteredData = data.map((recipes) => {
    return recipes.category.filter((tag) => {
      return tag.includes(selectedCategory)
    })
  })

  // maps through the filtered data and returns the whole objects that contain a specific category and otherwise a null value at the remaining indexes
  const filteredTags = filteredData.map((tags) => {
    return (tags.includes(selectedCategory) ? data : null)
  })

  // creates a variable that only returns the objects that have the chosen category
  const newData = filteredTags.filter(Boolean)





  const filteredRecipes = data.map((recipes) => {
    return Object.values(recipes).flat()
  })
  const handleSubmit = () => {
    console.log(newData)
  }


  return <div className="section">
    <div className="container">
      <button className="button is-success" onClick={(e) => handleSubmit(e)}>
        TEST!
      </button>
      <div>
        {allTags.map((categories, i) => {
          return <CategoryCard key={i} categories={categories} />
        })}
      </div>
      <div className="columns is-mobile is-multiline">
        {data.map((results, i) => {
          return <RecipeCard key={i} results={results} />
        })}
      </div>
    </div>
  </div>
}

export default Recipes










