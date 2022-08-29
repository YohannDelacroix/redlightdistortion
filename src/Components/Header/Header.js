import Logo from "../../Assets/RLDLogoFondNoir.png";
import LogoFb from "../../Assets/Facebook.png";
import LogoInsta from "../../Assets/Instagram.png";
import LogoYouTube from "../../Assets/YouTube.png";
import {Link} from 'react-router-dom';
import "./Header.css"
import {useState, useEffect} from 'react';

function Header(){
  const [buttonHeader, setButtonHeader] = useState(false);

  const [headerClass, setHeaderClass] = useState('header-desktop');



  const headerStyleDefault = {
    buttonActive: false,
    buttonImg: '+',
    headerClass: 'header-desktop',
    navMobile: 'nav-mobile-hidden'
  };
  const headerStyleMobile = {
    buttonActive: true,
    buttonImg: 'x',
    headerClass: 'header-mobile',
    navMobile: 'nav-mobile'
  }
  const [headerStyle, setHeaderStyle] = useState(headerStyleDefault);


  const handleButtonHeader = () => {
    if(headerStyle.buttonActive === false){
      setHeaderStyle(headerStyleMobile);
    }
    else{
      setHeaderStyle(headerStyleDefault);
    }
  };



  useEffect( () => {

  },[headerStyle])

  return (<header className={headerStyle.headerClass}>



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

    <div className="header-mobile-nav">
      <button className="header-button" onClick={handleButtonHeader}>{headerStyle.buttonImg}</button>
    </div>


    <div className="header-right">
    <ul className="ul-header">
      <li><Link className="link-header" to="/Videos">Videos</Link></li>
      <li><Link className="link-header" to="/Universe">Universe</Link></li>
      <li><Link className="link-header" to="/About">About</Link></li>
    </ul>
    </div>

    <nav className={headerStyle.navMobile}>
      <Link className="link-header" to="/Tour">Tour</Link>
      <Link className="link-header" to="/News">News</Link>
      <Link className="link-header" to="/Photos">Photos</Link>
      <Link className="link-header" to="/Videos">Videos</Link>
      <Link className="link-header" to="/Universe">Universe</Link>
      <Link className="link-header" to="/About">About</Link>
    </nav>
  </div>





  </header>)
}

export default Header;
