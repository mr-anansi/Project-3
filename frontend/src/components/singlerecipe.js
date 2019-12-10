import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com'
import { UserContext } from './UserContext'


const SingleRecipe = (props) => {
  const [data, setData] = useState({ ingredients: [], method: [] })
  const { userInfo } = useContext(UserContext)
	
  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/api/recipes/${id}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
      .then(console.log(data))
  }, [])


  const shoppingList = data.ingredients.map(function (ingredient) {
    return '<li>' + ingredient + '</li>'
  }).join('')


  const handleSubmit = () => {
    const templateParams = {
      email_to: userInfo.email,
      to_name: userInfo.username,
      author_name: data.author,
      recipe_name: data.name,
      message_html: shoppingList
    }
		
    emailjs.send('gmail', 'template_WaFbUNl4', templateParams, 'user_phelnwXOqjMmZRbyROmsu')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text)
      }, function (error) {
        console.log('FAILED...', error)
      })
  }



  
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
            <button className="button is-success" onClick={(e) => handleSubmit(e)}>
              Email me this Recipe!
            </button>
            <br />
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