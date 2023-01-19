import React from 'react'
import './Testimonial.css'
import stefan from '../../asset/stefan.jpg'
import kelly from '../../asset/kelly.jpg'
import micheal from '../../asset/micheal.jpg'
import lady from '../../asset/lady.jpg'




const data = [
  {
    avater: stefan,
    name: 'Enerst Achiver',
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus consequatur excepturi minima, quis aut placeat deserunt eveniet impedit quo obcaecati quae in libero asperiores adipisci. Similique incidunt nam aperiam  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus consequatur excepturi minima, quis aut placeat deserunt eveniet impedit quo obcaecati quae in libero asperiores adipisci. Similique incidunt nam aperiam'
  },
  {
    avater: kelly,
    name: 'Eric Hamah',
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus consequatur excepturi minima, quis aut placeat deserunt eveniet impedit quo obcaecati quae in libero asperiores adipisci. Similique incidunt nam aperiam  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus consequatur excepturi minima, quis aut placeat deserunt eveniet impedit quo obcaecati quae in libero asperiores adipisci. Similique incidunt nam aperiam'
  },
  {
    avater: micheal,
    name: 'John Diego',
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus consequatur excepturi minima, quis aut placeat deserunt eveniet impedit quo obcaecati quae in libero asperiores adipisci. Similique incidunt nam aperiam  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus consequatur excepturi minima, quis aut placeat deserunt eveniet impedit quo obcaecati quae in libero asperiores adipisci. Similique incidunt nam aperiam'
  },
  {
    avater: lady,
    name: 'williams uche',
    review: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus consequatur excepturi minima, quis aut placeat deserunt eveniet impedit quo obcaecati quae in libero asperiores adipisci. Similique incidunt nam aperiam  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus consequatur excepturi minima, quis aut placeat deserunt eveniet impedit quo obcaecati quae in libero asperiores adipisci. Similique incidunt nam aperiam'
  },
]


const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from cliants</h5>
      <h2>Testimonials</h2>
     
      <div className="container testimonials__container">
    
        {
          data.map(({avater,name,review},index) =>{
            return(
              <article key={index} className='testimonial'>
                <div className="client__avater">
                  <img src={avater} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review} </small>
              </article>
              
            )
          })
        }
       
     
       
        
      </div>
    </section>
  )
}

export default Testimonial