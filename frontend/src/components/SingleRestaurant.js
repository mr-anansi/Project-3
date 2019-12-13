import React, { useState, useEffect, useContext } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'
import { UserContext } from './UserContext'

const SingleRestaurant = (props) => {
  const [data, setData] = useState({})
  const [info, setInfo] = useState({})
  const [added, setAdded] = useState(false)

  const { userInfo, setUserInfo } = useContext(UserContext)

  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/api/restaurants/${id}`)
      .then(res => {
        const newData = res.data
        setData(newData)
        if (userInfo) {
          setInfo(userInfo)
          const alreadyAdded = userInfo.favouriteRestaurants.some((rest) => {
            return rest._id === newData._id
          })
          setAdded(alreadyAdded)
        }
      })
      .catch(err => console.log(err))
  }, [userInfo])


  const favourite = () => {
    let update = info.favouriteRestaurants
    update.push(data)
    setInfo({ ...info, favouriteRestaurants: update })
    axios.put('/api/profile/edit', info, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        setUserInfo(res.data.user)
      })
      .catch(err => console.log(err))
  }
	
  return <div className="section">
    <div className="single-parallax">
      <div className="mask">
        <div className="headline">{data.name}</div>
      </div>
    </div>
    <div className="content-div">
      <div className="card has-text-centered" id="inner-border-card">
        {/* <h1 className="title">{data.name}</h1> */}
        <h1 className="subtitle is-size-3-desktop is-size-3-mobile is-size-3-tablet" id="location">{data.location}</h1>
        <h1 className="subtitle is-size-3-desktop is-size-3-mobile is-size-3-tablet">{data.postcode}</h1>
        <h1 className="subtitle is-size-3-desktop is-size-3-mobile is-size-3-tablet">{data.priceRange}</h1>
        <h1><a href={data.link}>{data.link}</a></h1>
        {added ? <button className="button is-success" title="Disabled button" disabled>Added</button> : userInfo && info.username && <button className="button is-success" onClick={favourite}>Save to Profile</button>}
      </div>
    </div>
  </div>

}

export default SingleRestaurant