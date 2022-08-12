import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Home.css";

import Couverture1 from "../../Assets/Couverture1.jpg";

import TitleComponent from "../TitleComponent/TitleComponent.js";
import {useState, useEffect} from 'react'

function Home(){
  const [displayForm, setDisplayForm] = useState(false);

  const resultsDefault = {name: "", city: "", email: ""};
  const [results, setResults] = useState(resultsDefault);


  //Handle when button "Subscribe to Newsletter" is pressed
  const handleButtonNewsletter = (e) => {
    e.preventDefault();
    setDisplayForm(true);
  };


  //Handle when button "Subscribe" is pressed
  const handleButtonSubscribe = (e) => {
    e.preventDefault();
    alert("Send information to server");
    setDisplayForm(false);
    setResults(resultsDefault);
  };

  //Handle whenn name is changed
  const handleNameChanged = (e) => {
    setResults( prevResults => ({
      ...prevResults,
      name:e.target.value
    }));
  };

  //Handle whenn city is changed
  const handleCityChanged = (e) => {
    setResults( prevResults => ({
      ...prevResults,
      city:e.target.value
    }));
  };


  //Handle whenn email is changed
  const handleEmailChanged = (e) => {
    setResults( prevResults => ({
      ...prevResults,
      email:e.target.value
    }));
  };


  //Displaying the results in the console (Test checking)
  useEffect( () => {
    console.log("Following the results");
    console.log(results);
  }, [results])

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
      <div className="home-home-newsletterform-button">
      <button className="home-home-buttonnewsletter"
              type="button"
              onClick={handleButtonNewsletter}>Subscribe to Newsletter</button>
      </div>
      {
        displayForm &&
        <form className="home-home-newsletterform-form">
          <div className="home-home-newsletterform-form-element">
            <label>Name :</label>
            <input type="text" id="name" name="name"
                    onChange={handleNameChanged}/>
          </div>
          <div className="home-home-newsletterform-form-element">
            <label>City :</label>
            <input type="text" id="city" name="city"
                    onChange={handleCityChanged}/>
          </div>
          <div className="home-home-newsletterform-form-element">
            <label>E-mail :</label>
            <input type="text" id="email" name="email"
                    onChange={handleEmailChanged}/>
          </div>
          <div className="home-home-newsletterform-form-element">
            <button type="button"
                    onClick={handleButtonSubscribe}>Subscribe</button>
          </div>
        </form>
      }
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
