import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SingleRecipe = (props) => {
  const [data, setData] = useState({ ingredients: [], method: [] })

  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/api/recipes/${id}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
      .then(console.log(data))
  }, [])



  console.log(data.ingredients)
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-half-tablet">
            <p className="title">
              {data.name}
            </p>
            <p className="subtitle">
              by {data.author}
            </p>
            <ul>
              {data.ingredients.map((ingredient, id) =>
                <li key={id}>{ingredient}</li>
              )}
            </ul>
            <br/>
            <ol>
              {data.method.map((ingredient, id) =>
                <li key={id}>{ingredient}</li>
              )}
            </ol>
          </div>
          <div className="column is-half-tablet">
            <img src={data.image} />
          </div>
        </div>
      </div>
    </div>
  )
}



export default SingleRecipe