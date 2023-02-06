import "./Footer.css";
import {SiFacebook, SiInstagram, SiYoutube} from 'react-icons/si'
import { IconContext } from "react-icons";
import PressKit from "../../Assets/DossierREDLIGHTDISTORTION-1.pdf"
import axios from "../../api/axios";
import { useEffect, useState } from "react";

function Footer(){
    const [pressKit, setPressKit] = useState(null);

    useEffect( () => {
        const getPressKit = async () => {
          try{
              let pdfFile = await axios.get("/pressKit", {responseType: 'blob'});
              
              if(pdfFile.data){
                  console.log("pdfFile loaded")
                  let objectURL = window.URL.createObjectURL(pdfFile.data);
                  setPressKit(objectURL);
              }
              else{
                  console.log("not found")
              }
          }
          catch(err){
              console.log(err.message)
          }
        }
        
        getPressKit();
    }, [])

    return (
    <div className="footer">

    <div className="footer-contact">
      {//<p>+33 779 77 40 26</p>
      }
      <p>redlightdistortion.metalband@gmail.com</p>
      <p>  <a href={pressKit} target="_blank" rel="noreferrer"><button>Download Press Kit (FR)</button></a></p>
    </div>

    <div className="footer-social">
      {
        /* 
                <a href="https://www.facebook.com/redlightdistortion/" target="_blank"><img className="footer-social-image" src={LogoFb} alt="f" /></a><a href="https://www.instagram.com/redlightdistortion/" target="_blank"><img className="footer-social-image" src={LogoInsta} alt="f" /></a><a href="https://www.youtube.com/channel/UC1C7_waXIYi6cdy_jCPKoLQ" target="_blank"><img className="footer-social-image" src={LogoYouTube} alt="f" /></a>

        */
      }
        <a href="https://www.facebook.com/redlightdistortion/" target="_blank" rel="noreferrer">
          <IconContext.Provider value={{className: 'footer-react-icons', size:'25px'}}>
              <div>
              <SiFacebook />
              </div>
              
          </IconContext.Provider>
        </a>
        
        <a href="https://www.instagram.com/redlightdistortion/" target="_blank" rel="noreferrer">
        <IconContext.Provider value={{className: 'footer-react-icons', size:'25px'}}>
                        <div><SiInstagram /></div>
        </IconContext.Provider>
      
        </a>
        
        <a href="https://www.youtube.com/channel/UC1C7_waXIYi6cdy_jCPKoLQ" target="_blank" rel="noreferrer">
        <IconContext.Provider value={{className: 'footer-react-icons', size:'25px'}}>
                        <div><SiYoutube /></div>
          </IconContext.Provider>
        </a>
    </div>

    </div>)
}

export default Footer;
