import style from './fLogement.module.scss'
import imgTest from '../../assets/Carrousel.png'
import backArrow from '../../assets/arrow_back.svg'
import forwardArrow from '../../assets/arrow_forward.svg'


function FLogement() {
    return (
      <div className={ style.fLogement__content }>

        <div className={ style.carouselContainer }>
          <img 
            className={ style.carouselContainer__img}
            alt='xxx'
            src={ imgTest }
          />
          <span className={ style.carouselContainer__index}>
            xxx/xxx
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

        <div className={ style.txtContainer }>
          <div className={ style.txtContainer__left }>
            <h1>Cozy loft on the Canal Saint-Martin</h1>
            <span>Paris, Île-de-France</span>
            <div className={ style.tagsContainer }></div>
          </div>
          <div className={ style.txtContainer__right }>
            <div className={ style.profil }>
              <p>Alexandra Dumas</p>
              <img 
                src={ imgTest }
                alt="profil"
                className={ style.profilPicture }
              />              
            </div>
            <div>
              <span>!!!!!!!!!!</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FLogement;