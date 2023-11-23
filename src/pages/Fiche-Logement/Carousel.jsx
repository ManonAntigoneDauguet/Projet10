import style from "./carousel.module.scss"
import backArrow from '../../assets/arrow_back.svg'
import forwardArrow from '../../assets/arrow_forward.svg'


function Carousel({ title, pictures }) {
    return (
        <div className={ style.carouselContainer }>
          <img 
            className={ style.carouselContainer__img}
            alt={ title }
            src={ pictures[0] }
          />
          <span className={ style.carouselContainer__index}>
            { `xxx/${ pictures.length }` }
          </span>
          <div className={ style.carouselContainer__arrows}>
            <img 
              src={ backArrow } 
              alt='précédente'
          />
            <img 
              src={ forwardArrow } 
              alt='suivante'
          />
          </div>
        </div>
    )
}

export default Carousel