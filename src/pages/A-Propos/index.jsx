import style from "./apropos.module.scss"
import Collapse from "../../components/collapse"
import { CurrentPageContext } from "../../utils/context"
import { useContext, useEffect } from "react"


const collapses = [
  {
    "index": 1,
    "category": "Fiabilité",
    "details": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    "index": 2,
    "category": "Respect",
    "details": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    "index": 3,
    "category": "Service",
    "details": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    "index": 4,
    "category": "Sécurité",
    "details": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
]


function APropos() {
  const { updateCurrentPage } = useContext(CurrentPageContext)  
  useEffect(() => {
    updateCurrentPage('apropos')
    document.title = "Kasa - A Propos"
  })

  return (
    <div className={ style.apropos__content }>

      <div className={ style.imgContainer }>
        <div className={ style.imgContainer__img}></div>
        <div className={ style.imgContainer__bg }></div>
      </div>

      <div className={ style.txtContainer }>
        {collapses.map(({ category, details, index }) => (
          <Collapse 
            key={ index}  
            category={ category } 
            details={ details } 
            isLittleLabel={ false }
          />
        ))}
      </div>
    </div>
  );
}
  
export default APropos;
  