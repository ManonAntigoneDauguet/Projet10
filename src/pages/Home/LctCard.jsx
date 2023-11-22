import { Link } from 'react-router-dom'
import style from './lctCard.module.scss'


function LctCard({id, title, picture}) {
    return (
        <Link to={`/logement/${ id }`} className={ style.lctCard }>
          <img 
            src={ picture } 
            alt='logement en location' 
            className={ style.lctCard__img }
          />
          <h2 className={ style.lctCard__title }>
            { title }
          </h2>
        </Link>
    )
  }
  
  export default LctCard;