import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Home.css";

import Couverture1 from "../../Assets/Couverture1.jpg";

import TitleComponent from "../TitleComponent/TitleComponent.js";

function Home(){
  return(<div className="home">
  <Header />


  <div className="home-home">

    <div className="home-home-video">
    <iframe width="1008" height="567"
    src="https://www.youtube.com/embed/1dG4USdI4gk"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen />
    </div>


    <div className="home-home-newsletterform">

    </div>

    
  </div>

  <div className="home-tour">
    <TitleComponent titleContent="Tour Dates" />
  </div>

  <div className="home-news">
    <TitleComponent titleContent="News" />
  </div>

  <div className="home-photos">
    <TitleComponent titleContent="Photos" />
  </div>

  <div className="home-videos">
    <TitleComponent titleContent="Videos" />
  </div>

  <div className="home-music">
    <TitleComponent titleContent="Music" />
  </div>

  <div className="home-about">
    <TitleComponent titleContent="About" />
  </div>



  <Footer />
  </div>);
}

export default Home;
