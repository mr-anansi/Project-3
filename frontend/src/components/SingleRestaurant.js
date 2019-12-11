import React, { useState, useEffect, useContext } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from './UserContext'
import Auth from '../lib/auth'

const SingleRestaurant = (props) => {
  const [data, setData] = useState({})
  const [info, setInfo] = useState({})


  const { userInfo } = useContext(UserContext)

  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/api/restaurants/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  // useEffect(() => {
  //   if (userInfo) {
  //     setInfo(userInfo)
  //   } else return
  // }, [userInfo])


  const favourite = () => {
    const sticky = userInfo.favouriteRestaurants.push(data)
    setInfo({ favouriteRestaurants: sticky })
    console.log(info)
    // axios.put('/api/profile/edit', info, {
    //   headers: { Authorization: `Bearer ${Auth.getToken()}` } })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  }

  return <div className="section has-text-centered is-full-height">
    <div className="container is-center">
      <div className="columns is-multiline">
        <div className="column is-half-tablet">
          <div className="title">
            {data.name}
          </div>
          <div className="subtitle">
            {data.category}
          </div>
          <img src={data.image} alt="Placeholder image" />
          <p>
            {data.type}
          </p>
          <p>
            {data.location}
          </p>
          <p>
            {data.postcode}
          </p>
          <p>
            {data.priceRange}
          </p>
          {userInfo && info && <button className="button is-success" onClick={favourite}>Save to Profile</button>}
        </div>
      </div>
    </div>
  </div>

}

export default SingleRestaurant