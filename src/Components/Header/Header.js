import Logo from "../../Assets/RLDLogoFondNoir.png";
import LogoFb from "../../Assets/Facebook.png";
import LogoInsta from "../../Assets/Instagram.png";
import LogoYouTube from "../../Assets/YouTube.png";
import {Link} from 'react-router-dom';
import "./Header.css"

function Header(){
  return (<header>
    

  <div className="header-nav">
    <div className="header-left">
      <ul className="ul-header">
        <li><Link className="link-header" to="/Tour">Tour</Link></li>
        <li><Link className="link-header" to="/News">News</Link></li>
        <li><Link className="link-header" to="/Photos">Photos</Link></li>
      </ul>
    </div>

    <div className="header-logo">
      <Link to="/Home"><img className="header-logo-image" src={Logo} alt="Logo-RedLightdistortion" /></Link>
    </div>

    <div className="header-right">
    <ul className="ul-header">
      <li><Link className="link-header" to="/Videos">Videos</Link></li>
      <li><Link className="link-header" to="/Universe">Universe</Link></li>
      <li><Link className="link-header" to="/About">About</Link></li>
    </ul>
    </div>
  </div>



  </header>)
}

export default Header;
