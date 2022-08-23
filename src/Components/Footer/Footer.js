import "./Footer.css";
import Logo from "../../Assets/RLDLogoFondNoir.png";
import LogoFb from "../../Assets/Facebook.png";
import LogoInsta from "../../Assets/Instagram.png";
import LogoYouTube from "../../Assets/YouTube.png";

function Footer(){
    return (
    <div className="footer">

    <div className="footer-contact">
      <p>+33 779 77 40 26</p>
      <p>redlightdistortion.metalband@gmail.com</p>
      <p>  <a>Press Kit</a> </p>
    </div>

    <div className="footer-social">
        <a href="#"><img className="footer-social-image" src={LogoFb} alt="f" /></a><a href="#"><img className="footer-social-image" src={LogoInsta} alt="f" /></a><a href="#"><img className="footer-social-image" src={LogoYouTube} alt="f" /></a>
    </div>
    </div>)
}

export default Footer;
