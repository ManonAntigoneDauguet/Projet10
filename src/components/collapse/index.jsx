import { useState } from 'react'
import style from "./collapse.module.scss"
import arrow from "../../assets/chevron.svg"

function Collapse({ category, details }) {
    const [isOpen, setIsOpen] = useState(false)

    function handleChange(e) {
        if (e.target.checked) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }    

    return (
        <div className={isOpen ? `${style.collapseOpen}` : `${style.collapse}` }>
            <div className={ style.labelContainer }>
                <label htmlFor="fiabilite">{ category }</label>
                <img src={ arrow } alt={isOpen ? "refermer" : "étendre"} style={{transform: isOpen ? "" : "rotate(-180deg)"}} />
            </div>
            <input type="checkbox" id="fiabilite" name="fiabilite" onChange={ handleChange }></input>
            <div className={ style.detailsContainer }>
                <p>{ details }</p>
            </div>
        </div>        
    )
}

export default Collapse
