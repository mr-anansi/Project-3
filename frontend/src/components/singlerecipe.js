import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com'
import { UserContext, ReciContext } from './UserContext'
import CommentCard from './CommentCard'
import moment from 'moment'
import Auth from '../lib/auth'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  autoClose: false
})

const SingleRecipe = (props) => {
  const [data, setData] = useState({ ingredients: [], method: [], comments: [] })
  const [info, setInfo] = useState({})
  const [added, setAdded] = useState(false)

  const { userInfo, setUserInfo } = useContext(UserContext)
  const { reci, setReci } = useContext(ReciContext)
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/api/recipes/${id}`)
      .then(res => {
        const newData = res.data
        setData(newData)
        setReci(newData)
        if (userInfo) {
          setInfo(userInfo)
          const alreadyAdded = userInfo.favouriteRecipes.some((recipe) => {
            return recipe._id === newData._id
          })
          setAdded(alreadyAdded)
        }
      })
      .catch(err => console.log(err))
  }, [userInfo])


  const notify = () => toast(`Your shopping list has been sent to ${userInfo.email}!`)




  const shoppingList = data.ingredients.map(function (ingredient) {
    return '<li>' + ingredient + '</li>'
  }).join('')


  const handleSubmit = () => {
    if (userInfo) {
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
        },
        notify(),
        function (error) {
          console.log('FAILED...', error)
        })
    }
  }

  const favourite = () => {
    let update = info.favouriteRecipes
    update.push(data)
    setInfo({ ...info, favouriteRecipes: update })
    axios.put('/api/profile/edit', info, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        setUserInfo(res.data.user)
      })
      .catch(err => console.log(err))
  }


  const postIt = () => {

    console.log(data._id)
    axios.post(`/api/recipes/${data._id}`, formData,
      {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => {
        setReci(res.data)
        console.log(res.data)
        // props.history.push(`/recipes/${data._id}`)
      })
      .catch(err => {
        setErrors(err.response.data.errors)
        console.log(err.response.data.errors)
      })
  }


  moment(data.comments.timestamp)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(data.comments)
    setErrors({})
  }

  const postComment = (e) => {
    e.preventDefault()
    postIt()
  }

  const isOwner = function () {
    return Auth.getUserId() === userInfo._id

  }




  const userProfilePic = userInfo ? userInfo.image : 'https://www.pngfind.com/pngs/m/63-637582_cooking-icon-png-chef-logo-silhouette-png-transparent.png'


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
            {userInfo ?
              <button className="button is-success" onClick={(e) => handleSubmit(e)}>
                Email me this Recipe!
              </button>
              :
              <button className="button is-success">
                Sign in to email yourself these ingredients
              </button>
            }
            <br />
            <ol>
              {data.method.map((ingredient, id) =>
                <li key={id}>{ingredient}</li>
              )}
            </ol>
            {added ? <button className="button is-success" title="Disabled button" disabled>Added</button> : userInfo && info.username && <button className="button is-success" onClick={favourite}>Save to Profile</button>}
            <br />
            <br />
            <br />
            {reci && reci.comments.map((comments, i) => {
              return <CommentCard key={i} comments={comments} recipeInfo={data} setRecipeInfo={setData} isOwner={isOwner} props={props} />
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