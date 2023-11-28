import { Link } from "react-router-dom";
import style from "./error.module.scss";
import { CurrentPageContext } from "../../utils/context"
import { useContext, useEffect } from "react"

function Error() {
  const { updateCurrentPage } = useContext(CurrentPageContext)  
  useEffect(() => {
    updateCurrentPage('error')
    document.title = "Kasa - 404 error"
  })

    return (
      <div className={ style.content }>
        <span className={ style.errorCode }>
          404
        </span>
        <span className={ style.errorDescription }>
          Oups! La page que vous demandez n'existe pas.
        </span>
        <Link to="/" className={ style.backLink }>
          Retourner sur la page d'accueil
        </Link>
      </div>
    );
  }
  
  export default Error;