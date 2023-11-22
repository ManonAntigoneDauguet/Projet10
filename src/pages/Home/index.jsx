import data from '../../data/data.json'
import style from './home.module.scss'
import LctCard from './LctCard'


function Home() {
  return (
    <div className={ style.home__content }>

      <div className={ style.imgContainer }>
        <div className={ style.imgContainer__img}></div>
        <div className={ style.imgContainer__bg }></div>
        <span className={ style.imgContainer__tag }>Chez vous, partout et ailleurs</span>
      </div>

      <div className={ style.lctContainer }>
        {data.map(({id, title, pictures}) => (
          <LctCard
            key={ id }
            id={ id }
            title={ title }
            picture={ pictures[0] }
          />
        ))}
      </div>

    </div>
  );
}

export default Home;
