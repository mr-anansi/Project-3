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
	

  let selectedCategory = 'Pasta'
  // finds all the categories to be added to the page as clickable links
	

  const createTags = data.map((recipes) => {
    return recipes.category
  })
	

  const tagsArray = createTags.flat()
  const allTags = [...new Set(tagsArray)]
	
  const filteredData = data.filter((recipes) => {
    return recipes.category.includes(selectedCategory)
  })
	

  // const filteredRecipes = data.map((recipes) => {
  //   return Object.values(recipes).flat()
  // })
	

  const handleSubmit = () => {
    console.log(filteredData)
  }
	



  return <div className="section">
    <div className="container">
      <button className="button is-success" onClick={(e) => handleSubmit(e)}>
        TEST!
      </button>
      <div>
        {allTags.map((categories, i) => {
          return <FilteredRecipeForm key={i} categories={categories} />
        })}
        {/* {allTags.map((categories, i) => {
          return <CategoryCard key={i} categories={categories} />
        })} */}
      </div>
      <div className="columns is-mobile is-multiline">
        {filteredData.map((results, i) => {
          return <RecipeCard key={i} results={results} />
        })}
      </div>
    </div>
  </div>
}
export default Recipes









