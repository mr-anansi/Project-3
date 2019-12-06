import React, { useState, useEffect } from 'react'
import axios from 'axios'

import RecipeCard from './recipecard'

const Recipes = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/recipes')
      .then(response => setData(response.data))
      .then(console.log(data))
      .catch(error => console.log(error))
  }, [])


  return <div className="section has-background-black">
    <div className="container had-background-black">
      <div className="columns is-mobile is-multiline">
        {data.map((results, i) => {
          return <RecipeCard key={i} results={results} />
        })}
      </div>
    </div>
  </div>
}



export default Recipes










