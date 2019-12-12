import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

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
      </div>
    </div>
  </div>
}

export default SingleRestaurant