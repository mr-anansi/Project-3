import React from 'react'
import Auth from '../lib/auth'

const CommentCard = ({ comments, userInfo }) => (
  <>
    <article className="media">
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
            {comments.user._id === userInfo._id &&
              <>
                <small><a className='deletetag'>Delete</a></small>
              </>
            }
          </p>
        </div>
      </div>
    </article>
  </>
)

export default CommentCard
