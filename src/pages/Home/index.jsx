import data from '../../data/data.json'
import { Link } from 'react-router-dom'
import style from './home.module.scss'

function Home() {
  return (
    <div className={ style.home__content }>

      <div className={ style.imgContainer }>
        <div className={ style.imgContainer__img}></div>
        <div className={ style.imgContainer__bg }></div>
        <span className={ style.imgContainer__tag }>Chez vous, partout et ailleurs</span>
      </div>

      <div className={ style.txtContainer }>
        <Link to='/logement'>Logements</Link>
      </div>

    </div>
  );
}

export default Home;
