import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Videos.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";


function Videos(){
  return (<div>
    <Header />
    <div  className="videos-container">
    <TitleComponent titleContent="Videos" />
      
    </div>
    <Footer />
  </div>)
}

export default Videos;
