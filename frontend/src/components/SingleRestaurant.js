import { Link } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from './UserContext'
import Auth from '../lib/auth'

const SingleRestaurant = (props) => {
  const [data, setData] = useState({})
  // const [background, setBackground] = useState()

  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/api/restaurants/${id}`)
      .then(res => setData(res.data))
      // .then(res => setBackground({ ...background, background: res.image }))
      .catch(err => console.log(err))
  }, [])

  console.log(data)
  return <div className="section has-text-centered is-full-height" id="dataImage" style={{ backgroundImage: `url(${data.image})` }}>
    {/* <img className="clip-me" src='https://cdn.mos.cms.futurecdn.net/iuWB2NM48R2r9q7QhyJfhe-320-80.jpg'/> */}
    <div className="column">
      <div className="card">
        <div className="title" style={{ textShadow: '#FFF 1px 0 10px' }}>
          {data.name}
        </div>
        <div className="card-content">
          <h2>
            {data.location}
          </h2>
          <h2>
            {data.postcode}
          </h2>
          <h2>
            {data.priceRange}
          </h2>
          <h2>
            <a href={data.link}>{data.link}</a>
          </h2>
        </div>
      </div>
    </div>
  </div>
}

export default SingleRestaurant