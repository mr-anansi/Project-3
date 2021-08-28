import React, { useContext, useState } from 'react'
import axios from 'axios'
import Auth from '../lib/auth'
import { UserContext, ReciContext } from './UserContext'



const CommentCard = ({ comments, recipeInfo, props }) => {
  const [click, setClick] = useState(false)

  const { userInfo, setUserInfo } = useContext(UserContext)
  const { reci, setReci } = useContext(ReciContext)

  const handleDelete = () => {
    axios.delete(`/api/recipes/${recipeInfo._id}/comments/${comments._id}/`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        setReci(res.data)
      })
      .catch(err => console.log(err))
  }


  return (
    <>
      {reci && <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={comments.user.image ? comments.user.image : 'https://www.pngfind.com/pngs/m/63-637582_cooking-icon-png-chef-logo-silhouette-png-transparent.png'} className="usercommentimage" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{comments.user.username}</strong>
              <br />
              {comments.text}
              <br />
              {userInfo && comments.user._id === userInfo._id &&
                <>
                  <small><a className='deletetag' onClick={handleDelete}
                  >Delete</a></small>
                </>
              }
            </p>
          </div>
        </div>
      </article>}
    </>
  )
}

export default CommentCard
