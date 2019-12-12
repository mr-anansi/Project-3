import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import CategoryCard from './CategoryCard'
import RecipeCard from './recipecard'
// import { UserContext } from './UserContext'
import FilteredRecipeForm from './FilteredRecipeForm'
// import { filter } from 'minimatch'
// import Select from 'react-select'


const Recipes = () => {
  const [initialData, setInitialData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  // const { userInfo } = useContext(UserContext)
	


  //***********************Fetches all Recipes from the API */
  useEffect(() => {
    axios.get('/api/recipes')
      .then(response => {
        setInitialData(response.data)
        setFilteredData([...response.data])
      })
      .catch(error => console.log(error))
  }, [])
	


  function filterRecipes(tags) {
    if (tags.length === 0) {
      return setFilteredData([...initialData])
    }
    const types = tags.map(item => item.value)
    const recipes = initialData.filter((recipe) => {
      return types.every(element => recipe.category.includes(element))
    })
    console.log(recipes)
    setFilteredData(recipes)
  }
	


  function handleSubmit() {
    console.log(...filteredData)
  }
  

  return <div className="section">
    <div className="container">
      <button className="button is-success" onClick={(e) => handleSubmit(e)}>
        TEST!
      </button>
      <div>
        <FilteredRecipeForm
          Recipes={filteredData}
          updateRecipes={filterRecipes}
        />
        {/* <FilteredRecipeForm recipe={data} /> */}
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











// let selectedCategory = data


// function handleSelect(selectedTag) {
//   if (selectedTag === null)
//     return
//   selectedTag.map((type) => {
//     return selectedCategory = type.value

//   })
// }


// function filterData() {
//   setData(data.filter((recipe) => {
//     return recipe.category.includes(selectedCategory)
//   }))
// }

// const handleSubmit = () => {
//   filterData()
//   console.log(selectedCategory)
// }
