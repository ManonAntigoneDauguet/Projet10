import { useParams } from 'react-router-dom'
import data from '../../data/data.json'
import style from './fLogement.module.scss'
import backArrow from '../../assets/arrow_back.svg'
import forwardArrow from '../../assets/arrow_forward.svg'
import Collapse from "../../components/collapse";


function FLogement() {
  const { locationId } = useParams()
  const location = data.filter((e) => e.id === locationId)[0]

    return (
      <div className={ style.fLogement__content }>

        <div className={ style.carouselContainer }>
          <img 
            className={ style.carouselContainer__img}
            alt={ location.title }
            src={ location.pictures[0] }
          />
          <span className={ style.carouselContainer__index}>
            { `xxx/${ location.pictures.length }` }
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
            <h1>
              { location.title }
            </h1>
            <span>
              { location.location }
            </span>
            <div className={ style.tagsContainer }></div>
          </div>
          <div className={ style.txtContainer__right }>
            <div className={ style.profile }>
              <p>
                { location.host.name }
              </p>
              <img 
                src={ location.host.picture }
                alt="profil"
                className={ style.profilePicture }
              />              
            </div>
            <div>
              <span>!!!!!!!!!!</span>
            </div>
          </div>
        </div>
        
        <div className={ style.collapseContainer }>
          <Collapse
            category="Description"
            details={ location.description }
            isLittleLabel={ true }
          />
          <Collapse
            category="Equipements"
            details={ location.equipments.map((e, index) => (
              <li key={index}>{e}</li>
            )) }
            isLittleLabel={ true }
          />          
        </div>

      </div>
    );
  }
  
  export default FLogement;