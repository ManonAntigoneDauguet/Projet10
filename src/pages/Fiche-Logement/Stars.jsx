import activeStar from "../../assets/star_active.svg"
import inactiveStar from "../../assets/star_inactive.svg"
import style from "./stars.module.scss"


function Stars({ rating }) {
    const rate = [1, 2, 3, 4, 5]
    return (
        <div className={ style.starsContainer }>
            { rate.map((r) => (
                rating <  r
                ? <img 
                    src={ inactiveStar } 
                    alt={`${ rating } étoiles`} 
                    key={ r }
                /> 
                : <img 
                    src={ activeStar } 
                    alt={`${ rating } étoiles`}
                    key={ r } 
                />
            )) }
        </div>
    )
}

export default Stars