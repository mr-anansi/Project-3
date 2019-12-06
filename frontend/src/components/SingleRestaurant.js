import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

const SingleRestaurant = (props) => {
  const [data, setData] = useState({})
  const id = props.match.params.id

  useEffect(() => {
    axios.get(`/api/restaurants/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  
  return <div className="section has-text-centered">
    <div className="container is-center">
      <div className="columns is-multiline">
        <div className="column is-half-tablet">
          <div className="title">{data.name}
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default SingleRestaurant