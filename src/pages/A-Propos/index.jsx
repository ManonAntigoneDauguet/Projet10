import style from "./apropos.module.scss"
import chevron from "../../assets/chevron.svg"

function APropos() {
    return (
      <div className={ style.apropos__content }>

        <div className={ style.imgContainer }>
          <div className={ style.imgContainer__img}></div>
          <div className={ style.imgContainer__bg }></div>
        </div>

        <div className={ style.txtContainer }>
          
          <div className={ style.collapse }>
            <div className={ style.labelContainer }>
              <label htmlFor="fiabilite">Fiabilité</label>
              <img src={ chevron } alt="étendre" />
            </div>
            <input type="checkbox" id="fiabilite" name="fiabilite"></input>
            <div className={ style.detailsContainer }>
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
            </div>
          </div>

          <div className={ style.collapse }>
            <div className={ style.labelContainer }>
              <label htmlFor="fiabilite">Fiabilité</label>
              <img src={ chevron } alt="étendre" />
            </div>
            <input type="checkbox" id="fiabilite" name="fiabilite"></input>
            <div className={ style.detailsContainer }>
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default APropos;
  