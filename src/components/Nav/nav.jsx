import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessage} from 'react-icons/tb'
import {useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('')
  return (
    <nav>
      <a href="#"onClick={() =>setActiveNav ('#')} className="{activeNav === '#'? 'active' : '}"><BiHome/></a>
      <a href="#about" onClick={() =>setActiveNav ('#about')} className={activeNav === '#about' ?  'active' : ''}><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><TbMessage/></a>

    </nav>
  )
}

export default Nav
