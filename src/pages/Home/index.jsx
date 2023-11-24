import data from '../../data/data.json'
import style from './home.module.scss'
import LctCard from './LctCard'
import { CurrentPageContext } from "../../utils/context"
import { useContext, useEffect } from "react"


function Home() {
  const { updateCurrentPage } = useContext(CurrentPageContext)  
  useEffect(() => {
    updateCurrentPage('home')    
  })

  return (
    <div className={ style.home__content }>

      <div className={ style.imgContainer }>
        <div className={ style.imgContainer__img}></div>
        <div className={ style.imgContainer__bg }></div>
        <span className={ style.imgContainer__title }>Chez vous, partout et ailleurs</span>
      </div>

      <div className={ style.lctContainer }>
        {data.map(({id, title, cover}) => (
          <LctCard
            key={ id }
            id={ id }
            title={ title }
            picture={ cover }
          />
        ))}
      </div>

    </div>
  );
}

export default Home;
