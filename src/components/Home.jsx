import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../assets/banneryeni.jpg'
import '../style/home.css'

export const Home = () => {
  return (
    <div className='mainPage' style={{backgroundImage: `url(${Banner})`}}>
      <div className="order">
        <Link to="/menu">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>  
  )
}
