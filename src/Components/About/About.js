import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./About.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";

function About(){
  return (<div>
    <Header />
    <div className="about-container">
    <TitleComponent titleContent="About" />
    </div>
    <Footer />
  </div>)
}

export default About;
