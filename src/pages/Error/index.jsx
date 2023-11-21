import { Link } from "react-router-dom";
import style from "./error.module.scss";

function Error() {
    return (
      <div className={ style.content }>
        <span className={ style.errorCode }>404</span>
        <span className={ style.errorDescription }>Oups! La page que vous demandez n'existe pas.</span>
        <Link to="/" className={ style.backLink }>Retourner sur la page d'accueil</Link>
      </div>
    );
  }
  
  export default Error;