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



  // const filteredData = data.map((recipes) => {
  //   return recipes.category
  // })



  const filteredData = data.map((recipes) => {
    return recipes.category.filter((tag, index) => {
      if (tag.includes('Dinner')) {
        return index
      }
    })
  })



  const filteredResults = data.filter((recipes, index) => {
    if (recipes.category.contains(filteredData)) {
      return recipes
    }
  })



  const tagsArray = filteredData.flat()

  const allTags = [...new Set(tagsArray)]









  const filteredRecipes = data.map((recipes) => {
    return Object.values(recipes).flat()
  })
  const handleSubmit = () => {
    console.log(filteredResults)
  }


  return <div className="section">
    <div className="container">
      <button className="button is-success" onClick={(e) => handleSubmit(e)}>
        TEST!
      </button>
      <div className="columns is-mobile is-multiline">
        {data.map((results, i) => {
          return <RecipeCard key={i} results={results} />
        })}
        <div>
          {allTags.map((categories, i) => {
            return <CategoryCard key={i} categories={categories} />
          })}
        </div>
      </div>
    </div>
  </div>
}



export default Recipes










