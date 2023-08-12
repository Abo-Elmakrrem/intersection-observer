import React from 'react'
import "./Hero.css"

const Hero = ({imageSrc}) => {
  return (
    <div className='Hero'>
        <img src={imageSrc} alt="Travel" className='hero-image' />
        <h1 className='hero-title'>Travel made Simple</h1>
    </div>
  )
}

export default Hero