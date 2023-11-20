import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header() {
    return (
      <header>
        <div className="header__content">
            <img src={logo} alt="Logo Kasa" />
            <nav>
                <Link to="/" className="current">Accueil</Link>
                <Link to="/a-propos">A Propos</Link>
            </nav>
        </div>    
      </header>
    );
  }
  
  export default Header;