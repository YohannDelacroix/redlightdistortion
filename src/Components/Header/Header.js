import Logo from "../../Assets/RLDLogoFondNoir.png";
import {Link} from 'react-router-dom';
import "./Header.css"
import {useState, useEffect} from 'react';
import MenuIcon from "../../Assets/menu_icon.png";
import CrossIcon from "../../Assets/cross_icon.png";

const Header = () => {

  //
  const headerStyleDefault = {
    buttonActive: false,
    buttonImg: MenuIcon,
    headerClass: 'header-desktop',
    navMobile: 'nav-mobile-hidden'
  };


  const headerStyleMobile = {
    buttonActive: true,
    buttonImg: CrossIcon,
    headerClass: 'header-mobile',
    navMobile: 'nav-mobile'
  }

  const [headerStyle, setHeaderStyle] = useState(headerStyleDefault);



  //Header button in responsive design
  const handleButtonHeader = () => {

    if(headerStyle.buttonActive){
      setHeaderStyle(headerStyleDefault);
    }
    else{
      setHeaderStyle(headerStyleMobile);
    }
  };



  return (<header data-testid="header" className={headerStyle.headerClass}>



    <div className="header-nav">

      
        <nav className="header-left">
          <ul className="ul-header">
            <li><Link className="link-header" to="/Tour">Tour</Link></li>
            <li><Link className="link-header" to="/News">News</Link></li>
            <li><Link className="link-header" to="/Photos">Photos</Link></li>
          </ul>
        </nav>



      <div className="header-logo">
        <Link className="header-link-image" to="/Home">
          
            <img className="header-logo-image" src={Logo} alt="Logo-RedLightdistortion" />
          
        </Link>
      </div>

      <div className="header-mobile-nav">
        <button className="header-button" onClick={handleButtonHeader}><img className="header-img-button" src={headerStyle.buttonImg} alt="nav" /></button>
      </div>


      <nav className="header-right">
      <ul className="ul-header">
        <li><Link className="link-header" to="/Videos">Videos</Link></li>
        <li><Link className="link-header" to="/Universe">Universe</Link></li>
        <li><Link className="link-header" to="/About">About</Link></li>
      </ul>
      </nav>

      <nav className={headerStyle.navMobile}>
        <Link className="link-header" onClick={handleButtonHeader} to="/Tour">Tour</Link>
        <Link className="link-header" onClick={handleButtonHeader} to="/News">News</Link>
        <Link className="link-header" onClick={handleButtonHeader} to="/Photos">Photos</Link>
        <Link className="link-header" onClick={handleButtonHeader} to="/Videos">Videos</Link>
        <Link className="link-header" onClick={handleButtonHeader} to="/Universe">Universe</Link>
        <Link className="link-header" onClick={handleButtonHeader} to="/About">About</Link>
      </nav>
    </div>





  </header>)
}

export default Header;
