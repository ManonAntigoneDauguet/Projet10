import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header() {
    return (
      <header>
        
            <img src={logo} alt="Logo Kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>
           
      </header>
    );
  }
  
  export default Header;