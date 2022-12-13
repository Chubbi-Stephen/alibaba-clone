import React from 'react'
import { Link } from 'react-router-dom'
import AdImg from '../../../assets/images/ads.jpg'

const TopHeader = () => {
  return (
    <div>
      <Link to="/">
        <img src={AdImg} alt="" />
      </Link>
    </div>
  )
}

export default TopHeader
