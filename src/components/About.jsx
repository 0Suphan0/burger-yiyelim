import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../style/about.css'

export const About = () => {
  return (
    <div className='about'>

      <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}>

      </div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>Lorem 
          ipsumdolor sit amet, consectetur adipisicing elit. Animi delectus provident dicta recusandae perferendis facilis nesciunt dolorum neque non dolorem vitae similique deserunt eum reprehenderit, in nemo porro tempora tenetur.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, voluptatum. Modi eos cum blanditiis voluptas ea, minima commodi esse eum consequuntur adipisci. Error quibusdam soluta quod deleniti repellat, optio esse?
        </p>

      </div>

    </div>
  )
}
