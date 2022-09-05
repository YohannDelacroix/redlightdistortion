import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Home.css";

import Couverture1 from "../../Assets/Couverture1.jpg";

import TitleComponent from "../TitleComponent/TitleComponent.js";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

import {newsTable} from "../News/dataNews.js";
import NewsComponent from "../News/NewsComponent.js";
import {dataDate} from "../Tour/dataDate.js";
import Date from "../Tour/Date.js";
import {images} from "../Photos/dataPhotos.js";


import logoBlanc from "../../Assets/RLDLogoFondNoir.png";

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


  <div className="home-top">
    <div className="home-home-video">
      <div className="container-video">
        <iframe className="iframe-video" 
        src="https://www.youtube.com/embed/1dG4USdI4gk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
      </div>
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


  

    {dataDate.length != 0 && <div className="home-tour">
      <TitleComponent titleContent="Tour Dates" />
      <ul className="tour-list">
      {dataDate.slice(0,5).map((date, index) => (
        <li key={index}><Date date_content={dataDate[index]} /></li>
      ))}
      </ul>
      <button className="home-button"><Link className="home-link" to="/Tour">More Tour Dates</Link></button>
    </div>}
    
    


    <div className="home-news">
      <TitleComponent titleContent="News" />
      <div className="news-list"> 
      {
        newsTable.slice(0,4).map((news, index) => (
          <Link to={`/News/${news.id}`}><NewsComponent key={`${news.title}-${index}`} newsContent={news} /></Link>

        ))
      }

      </div>
      <button className="home-button"><Link className="home-link" to="/News">More News</Link></button>
    </div>

    <div className="home-photos">
      <TitleComponent titleContent="Photos" />
      <div className="photo-galery">
        {
          images.slice(0,3).map((image) => (

              <img key={image} src={image} alt="image" />

          ))
        }
      </div>
      <button className="home-button"><Link className="home-link" to="/Photos">More Photos</Link></button>
    </div>

    <div className="home-logo">
      <img src={logoBlanc} className="logo-img" />
    </div>

  </div>     


  <Footer />
  </div>);
}

export default Home;
