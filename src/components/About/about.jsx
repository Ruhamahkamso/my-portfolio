import React from 'react'
import './about.css'
import Happyface from '../../asset/Happyface.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container  about__container" >
        <div className="about__me">
          <div className="about__me.image">
            <img src={Happyface}  alt="happyface" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>1+ year working</small>

            </article>
            <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Clients</h5>
              <small>10+ Enugu</small>

            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>5+ completed</small>

            </article>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non beatae maiores quae pariatur, error omnis quia, perferendis officia repellat, eos reiciendis suscipit repellendus eveniet sit? Illum aspernatur dolores quidem! </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about