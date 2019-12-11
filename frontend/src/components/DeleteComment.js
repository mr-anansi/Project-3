import react from 'react'
import Auth from '../lib/auth'
import axios from 'axios'



const HandleDelete = ({ userInfo, props }) => {
  const id = props.match.params.id
  axios.delete(`/recipes/${id}/comments/:commentId'/`, {
    headers: { Authorization: `Bearer ${Auth.getToken()}` }
  })
    .then(() => this.props.history.push(`/recipes/${id})`)
      .catch(err => console.log(err))
    )
}

export default HandleDelete