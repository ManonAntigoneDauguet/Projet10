import style from "./carousel.module.scss"
import backArrow from '../../assets/arrow_back.svg'
import forwardArrow from '../../assets/arrow_forward.svg'
import React, { useState } from "react"


function Carousel({ title, pictures }) {
  const [slide, updateSlide] = useState(0)

  function nextSlide(index) {
    index >= pictures.length ? updateSlide(0) : updateSlide(index)
  }
  function previsousSlide(index) {
    index < 0 ? updateSlide(pictures.length-1) : updateSlide(index)
  }

  return (
    <div className={ style.carouselContainer }>
      <img 
        className={ style.carouselContainer__img}
        alt={ title }
        src={ pictures[slide] }
      />
      { pictures.length !== 1 && 
        <React.Fragment>
          <span className={ style.carouselContainer__index}>
            { `${slide + 1}/${ pictures.length }` }
          </span>
          <div className={ style.carouselContainer__arrows}>
            <img 
              src={ backArrow } 
              alt='précédente'
              onClick={() => previsousSlide(slide - 1)}
            />
            <img 
              src={ forwardArrow } 
              alt='suivante'
              onClick={() => nextSlide(slide + 1)}
            />
          </div>
        </React.Fragment>  
      }
    </div>
  )
}

export default Carousel