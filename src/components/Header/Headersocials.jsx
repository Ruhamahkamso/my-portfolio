import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target= "_blank"><BsLinkedin /></a>
        <a href="https://github.com" target= "_blank"><FaGithubAlt /></a>
        <a href="https://twitter.com" target= "_blank"><FaTwitter /></a>

    </div>
  )
}

export default Headersocials