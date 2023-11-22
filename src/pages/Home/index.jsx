import data from '../../data/data.json'
import { Link } from 'react-router-dom'
import style from './home.module.scss'
import picture from '../../assets/test.png'


function Home() {
  return (
    <div className={ style.home__content }>

      <div className={ style.imgContainer }>
        <div className={ style.imgContainer__img}></div>
        <div className={ style.imgContainer__bg }></div>
        <span className={ style.imgContainer__tag }>Chez vous, partout et ailleurs</span>
      </div>

      <div className={ style.lctContainer }>
        <Link to='/logement' className={ style.lctCard }>
          <img 
            src={ picture } 
            alt='logement en location' 
            className={ style.lctCard__img }
          />
          <h2 className={ style.lctCard__title }>
            Titre de la location
          </h2>
        </Link>

        <Link to='/logement' className={ style.lctCard }>
          <img 
            src={ picture } 
            alt='logement en location' 
            className={ style.lctCard__img }
          />
          <h2 className={ style.lctCard__title }>
            Titre de la location
          </h2>
        </Link>

        <Link to='/logement' className={ style.lctCard }>
          <img 
            src={ picture } 
            alt='logement en location' 
            className={ style.lctCard__img }
          />
          <h2 className={ style.lctCard__title }>
            Titre de la location
          </h2>
        </Link>
      </div>

    </div>
  );
}

export default Home;
