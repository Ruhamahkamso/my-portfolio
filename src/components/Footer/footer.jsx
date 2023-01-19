import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer >
      <a href="a" className="footer__logo">HAMAH</a>
      <ul className="permalinks">
        <li><a href="a">Home</a></li>
        <li><a href="a">About</a></li>
        <li><a href="a">Experience</a></li>
        <li><a href="a">Services</a></li>
        <li><a href="a">Portfolio</a></li>
        <li><a href="a">Testimonials</a></li>
        <li><a href="a">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; HAMAH May.All rights reserved</small>
      </div>

    </footer>
  )
}

export default footer