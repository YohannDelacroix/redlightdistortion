import Logo from "../../Assets/rldlogo.png";
import {Link} from 'react-router-dom';
import "./Header.css"

function Header(){
  return (<header>
  <div className="header-left">
    <ul className="ul-header">
      <li><Link className="link-header" to="/Tour">Tour</Link></li>
      <li><Link className="link-header" to="/News">News</Link></li>
      <li><Link className="link-header" to="/Photos">Photos</Link></li>
    </ul>
  </div>

  <div className="header-logo">
    <img src={Logo} alt="Logo-RedLightdistortion" />
  </div>

  <div className="header-right">
  <ul className="ul-header">
    <li><Link className="link-header" to="/Videos">Videos</Link></li>
    <li><Link className="link-header" to="/Music">Music</Link></li>
    <li><Link className="link-header" to="/About">About</Link></li>
  </ul>
  </div>



  
  </header>)
}

export default Header;
