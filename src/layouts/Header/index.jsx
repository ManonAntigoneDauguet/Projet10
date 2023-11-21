import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import style from "./header.module.scss";

function Header() {
    return (
      <header>
        <div className={ style.header__content }>
            <img src={logo} alt="Logo Kasa" />
            <nav>
                <Link to="/" className={ style.current }>Accueil</Link>
                <Link to="/a-propos">A Propos</Link>
            </nav>
        </div>    
      </header>
    );
  }
  
export default Header;