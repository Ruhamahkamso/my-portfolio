import React from 'react'
import './portfolio.css'
import code from '../../asset/code.jpg'
import istockphoto12  from '../../asset/istockphoto12.jpg'
import web16 from '../../asset/web16.jpg'
import webdesign  from '../../asset/webdesign.jpg'
import web10  from '../../asset/web10.jpg'
import istockphoto13 from '../../asset/istockphoto13.jpg'



const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={code} alt="" />
          
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribble.com/Alian_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={istockphoto13} alt="" />
            
          </div>
            <h3>This is a portfolio item title</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribble.com/Alian_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
           </div>
          

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={istockphoto12} alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribble.com/Alian_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
           </div>
          

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={web16} alt="" />
            

          
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribble.com/Alian_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={webdesign} alt="" />
            
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribble.com/Alian_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={web10} alt="" />
              
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta"><a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribble.com/Alian_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        
        </article>
        

      </div>

    </section>
  )
}

export default portfolio