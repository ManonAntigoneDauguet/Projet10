import style from "./apropos.module.scss"
import Collapse from "../../components/collapse";


const collapses = [
  {
    "category": "Fiabilité",
    "details": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    "category": "Respect",
    "details": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    "category": "Service",
    "details": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    "category": "Sécurité",
    "details": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
]


function APropos() {
    return (
      <div className={ style.apropos__content }>

        <div className={ style.imgContainer }>
          <div className={ style.imgContainer__img}></div>
          <div className={ style.imgContainer__bg }></div>
        </div>

        <div className={ style.txtContainer }>
          {collapses.map(({category, details, index}) => (
            <Collapse key={category} category={category} details={details} />
          ))}

        </div>
      </div>
    );
  }
  
export default APropos;
  