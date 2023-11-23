import { useState } from 'react'
import style from "./collapse.module.scss"
import arrow from "../../assets/arrow_down.svg"


function Collapse({ category, details, isLittleLabel }) {
    const [isOpen, setIsOpen] = useState(false)

    function handleChange(e) {
        if (e.target.checked) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }    

    return (
        <div className={isOpen ? `${style.collapse__Open}` : `${style.collapse__Close}` }>
            <div className={ style.categoryContainer }>
                <label htmlFor="fiabilite" className={ isLittleLabel ? style.littleLabel : style.bigLabel } >
                    { category }
                </label>
                <img 
                    className={ style.collapseArrow }
                    src={ arrow } 
                    alt={isOpen ? "refermer" : "étendre"} 
                    style={{transform: isOpen ? "" : "rotate(-180deg)"}} 
                />
            </div>
            <input 
                className={ style.collapseCheckbox }
                type="checkbox" 
                id="fiabilite" 
                name="fiabilite" 
                onChange={ handleChange }>
            </input>
            <div className={ style.detailsContainer }>
                <p>
                    { details }
                </p>
            </div>
        </div>        
    )
}

export default Collapse
