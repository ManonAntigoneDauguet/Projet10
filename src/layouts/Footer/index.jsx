import logo from "../../assets/logo--blanc.svg"
import style from "./footer.module.scss"

function Footer() {
    return (
      <footer>
        <div className={ style.content }>
            <img src={ logo } alt="Logo Kasa" height="40px"></img>
            <span>© 2020 Kasa. All right reserved</span>
        </div>    
      </footer>
    );
  }
  
  export default Footer;