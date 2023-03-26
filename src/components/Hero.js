import React from 'react'
import Header from './Header';

function Hero() {

  return (
    <header className='hero'>

      <Header />

      <div className='hero__content'>
        <p className='hero__content-caption'>Welcome To TenTwenty Farms</p>
        <h1 className='hero__content-title'>From our Farms <br /> to your hands</h1>
      </div>
      <div className='hero__btn'>
        <img src='../assets/button.png' />
        <a>Next</a>
      </div>
    </header>
    
  )
}

export default Hero
