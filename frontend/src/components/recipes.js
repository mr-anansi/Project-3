import React, { useState, useEffect } from 'react'
import axios from 'axios'

import RecipeCard from './recipecard'
// import { UserContext } from './UserContext'

const Recipes = () => {
  const [data, setData] = useState([])

  // const { userInfo } = useContext(UserContext)

  useEffect(() => {
    axios.get('/api/recipes')
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }, [])


  return <div className="section">
    <div className="container">
      <div className="columns is-mobile is-multiline">
        {data.map((results, i) => {
          return <RecipeCard key={i} results={results} />
        })}
      </div>
    </div>
  </div>
}



export default Recipes










