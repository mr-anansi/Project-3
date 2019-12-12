import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com'
import { UserContext } from './UserContext'
import CommentCard from './CommentCard'
import moment from 'moment'
import Auth from '../lib/auth'


const SingleRecipe = (props) => {
  const [data, setData] = useState({ ingredients: [], method: [], comments: [] })
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
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



  const postIt = () => {

    console.log(data._id)
    axios.post(`/api/recipes/${data._id}`, formData,
      {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => props.history.push(`/recipes/${data._id}`))
      .catch(err => {
        setErrors(err.response.data.errors)
        console.log(err.response.data.errors)
      })
  }


  moment(data.comments.timestamp)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(data)
    setErrors({})
  }

  const postComment = (e) => {
    e.preventDefault()
    postIt()
  }

  const isOwner = function() {
    return Auth.getUserId() === userInfo._id
    
  }

 

  const userProfilePic = userInfo ? userInfo.image : 'https://www.pngfind.com/pngs/m/63-637582_cooking-icon-png-chef-logo-silhouette-png-transparent.png'


  // console.log(data.ingredients)
  // console.log(data.comments[0])
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
            <br />
            <br />
            <br />
            {data.comments.map((comments, i) => {
              return <CommentCard key={i} comments={comments} userInfo={userInfo} isOwner={isOwner} props={props} />
            })}
            {userInfo ?
            <>
            <br />
              <form className="form" onSubmit={postComment}>
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-64x64">
                      <img src={userProfilePic ? userProfilePic : 'https://www.pngfind.com/pngs/m/63-637582_cooking-icon-png-chef-logo-silhouette-png-transparent.png'} />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="field">
                      <p className="control">
                        <textarea onChange={handleChange} name="text" className="textarea" placeholder="Add a comment..."></textarea>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control">
                        <button className="button">Post comment</button>
                      </p>
                    </div>
                  </div>
                </article>
              </form>
              </>
              : <>
                <br />
                <br />
                <h1>You must be signed in to post a comment!</h1>
              </>}
          </div>
          <div className="column is-half-tablet">
            <img src={data.image} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default SingleRecipe