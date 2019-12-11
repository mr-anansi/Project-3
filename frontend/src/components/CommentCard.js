import React from 'react'
import Auth from '../lib/auth'
import HandleDelete from '../components/DeleteComment'


// handleDelete() {
//   const id = this.props.match.params.id
//   axios.delete(`https://cheesebored.herokuapp.com/cheeses/${id}`, {
//     headers: { Authorization: `Bearer ${Auth.getToken()}` }
//   })
//     .then(() => this.props.history.push('/cheeses'))
//     .catch(err => console.log(err))
// }


const CommentCard = ({ comments, userInfo, props }) => (
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
                <small><button className='deletetag' onClick={<HandleDelete userInfo={userInfo} props={props}/> }
                
                
                
                
                
                
                
                >Delete</button></small>
              </>
            }
          </p>
        </div>
      </div>
    </article>
  </>
)

export default CommentCard
