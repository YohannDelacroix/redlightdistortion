import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Universe.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";

function Universe(){
  return (<div>
    <Header />
    <div className="universe-container paddingPage">
    <TitleComponent titleContent="Universe" />

    <div className="universe-content">

      <p className="universe-presentation">
        On all the Connexus reigns with an iron fist, the Lord Walrus.
      </p>
      <p className="universe-presentation">
        Meanwhile, X is deeply diving into the Red Light Distortion.
      </p>

    </div>

  </div>
  <Footer />
</div>)
}

export default Universe;
