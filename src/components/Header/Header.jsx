import React from 'react'
import './Header.css'
import CTA from './CTA'
import lady1 from '../../asset/lady1.jpg'
import Headersocials from './Headersocials'


const Header = () => {
  return (
  <header>
    <div className=" container header__container">
      <h5>Hello I'M</h5>
      <h1>Hamah May</h1>
      <h5 className='text-light'>Full Stack Developer</h5>
      <CTA />
      <Headersocials />
      
      
      <div className="me">
        <img src={lady1} alt="lady" />
      </div>
      
      <a href="#contact" className='scroll__down'>scroll down</a>


    </div>
  </header>
  )
}

export default Header