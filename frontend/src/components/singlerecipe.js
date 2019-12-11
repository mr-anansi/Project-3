import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com'
import { UserContext } from './UserContext'
import Auth from '../lib/auth'


const SingleRecipe = (props) => {
  const [data, setData] = useState({ ingredients: [], method: [], comments: [] })
  const [info, setInfo] = useState({})
  const [added, setAdded] = useState(false)

  const { userInfo, setUserInfo } = useContext(UserContext)

  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/api/recipes/${id}`)
      .then(res => {
        const newData = res.data
        setData(newData)
        setData(res.data)
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
        }, function (error) {
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

  // console.log(data.ingredients)
  // console.log(data.comments)
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
            {added ? <button className="button is-success" title="Disabled button" disabled>Added</button> : userInfo && info.username && <button className="button is-success" onClick={favourite}>Save to Profile</button>} 
            <br />
            <br />
            <br />

            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="https://ca.slack-edge.com/T0351JZQ0-ULREPB518-4ac2b0bf3b73-512" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Reggie</strong>
                    <br />
                    This is a bloody lovely recipe! I&apos;ve made it 6 times already! Thanks so much for posting it, Michael!
                    <br />
                    <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                  </p>
                </div>

                <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img src="https://ca.slack-edge.com/T0351JZQ0-UM3K7D118-3fb86655d21a-512" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>Michael</strong>
                        <br />
                        {data.comments.map((comment, id) =>
                          <li key={id}>{comment.text}</li>
                        )}
                        <br />
                        <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                      </p>
                    </div>

                    {/* <article className="media">
                      Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                    </article>

                    <article className="media">
                      Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                    </article> */}
                  </div>
                </article>

                <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img src="https://ca.slack-edge.com/T0351JZQ0-UMGUFA4BZ-f2379a3899d3-512" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>Marissa </strong>
                        <br />
                        Would you guys get back to work, please?!
                        <br />
                        <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </article>
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="https://ca.slack-edge.com/T0351JZQ0-UM3K7D118-3fb86655d21a-512" />
                </p>
              </figure>
              <div className="media-content">
                <div className="field">
                  <p className="control">
                    <textarea className="textarea" placeholder="Add a comment..."></textarea>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button">Post comment</button>
                  </p>
                </div>
              </div>
            </article>



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