import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import style from "./header.module.scss";
import { CurrentPageContext } from "../../utils/context"
import { useContext } from "react"


function Header() {
  const { currentPage } = useContext(CurrentPageContext)

  return (
    <header>
      <div className={ style.header__content }>
          <img src={logo} alt="Logo Kasa" />
          <nav>
              <Link 
                to="/" 
                className={ currentPage === 'home' ? style.current : "" }>
                Accueil
              </Link>
              <Link 
                to="/a-propos" 
                className={ currentPage === 'apropos' ? style.current : "" }>
                A Propos
              </Link>
          </nav>
      </div>    
    </header>
  );
}
  
export default Header;