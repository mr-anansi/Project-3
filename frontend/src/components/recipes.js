import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import RecipeCard from './recipecard'
import { UserContext } from './UserContext'

const Recipes = () => {
  const [data, setData] = useState([])

  const { userInfo } = useContext(UserContext)

  useEffect(() => {
    axios.get('/api/recipes')
      .then(response => setData(response.data))
      .then(console.log(data))
      .catch(error => console.log(error))
  }, [])

  console.log(userInfo)
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










