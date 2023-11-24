import style from "./profile.module.scss"


function Profile({ name, picture }) {
    return (
        <div className={ style.profile }>
            <p>{ name }</p>
            <img 
                src={ picture }
                alt="profil"
                className={ style.profilePicture }
            />              
      </div>
    )
}

export default Profile