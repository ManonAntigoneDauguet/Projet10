import activeStar from "../../assets/star-active.svg"
import inactiveStar from "../../assets/star-inactive.svg"
import style from "./stars.module.scss"


function Stars( rating ) {
    const rate = [1, 2, 3, 4, 5]

    return (
        <div className={ style.starsContainer }>
            { rate.map((r) => (
                r > rating 
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