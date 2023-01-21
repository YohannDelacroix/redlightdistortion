import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Loading from "../Loading/Loading"
import "./Home.css";


import TitleComponent from "../TitleComponent/TitleComponent.js";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

import {newsTable} from "../News/dataNews.js";
import NewsComponent from "../News/NewsComponent.js";
import {dataDate} from "../Tour/dataDate.js";
import Date from "../Tour/Date.js";
import {images} from "../Photos/dataPhotos.js";

import axios from "axios";

import logoBlanc from "../../Assets/RLDLogoFondNoir.png";
import ServerError from "../Errors/ServerError.js";

function Home(){
  const [displayForm, setDisplayForm] = useState(false);

  const resultsDefault = {name: "", city: "", email: ""};
  const [results, setResults] = useState(resultsDefault);

  const [dataTour, setDataTour] = useState(null);
  const [errorTour, setErrorTour] = useState(null);
  const [loadingTour, setLoadingTour] = useState(true);
  
  //Get the datas from the server
  useEffect( () => {

      //Get list of tour dates from the server
      const getTourDates = async () => {
          try{ 
              const response = await axios.get('http://localhost:5050/tour')
              setDataTour(response.data)
              setErrorTour(null)
          } 
          catch(err){
              setErrorTour(err.message)
              setDataTour(null)
          }
          finally{
              setLoadingTour(false)
          }
      }
      getTourDates();
  }, []);


  //Handle when button "Subscribe to Newsletter" is pressed
  /*const handleButtonNewsletter = (e) => {
    e.preventDefault();
    setDisplayForm(true);
  };*/


  //Handle when button "Subscribe" is pressed
  const handleButtonSubscribe = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5050/newsletter/add', results).then((response) => {
            console.log(response.status)
            console.log(response.data)
    })

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
        src="https://www.youtube.com/embed/p0Y52_ej810"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
      </div>
    </div>


    <div className="home-home-newsletterform">
      <div className="home-home-newsletterform-button">

      {
        /*  CODE for Newsletter inside our database
          <button className="home-home-buttonnewsletter"
              type="button"
              onClick={handleButtonNewsletter}>Subscribe to Newsletter</button>
        */
      }
      
      <a href="https://963724d5.sibforms.com/serve/MUIEADLr_bPctO-7ORVs2xAOHSPATdp2V2Re_iA9XmPyF9fiQ3_bKRTcF7S-NQMzwTC-OeeqVuwMKVTKyhv-SJ2gHLIIDeEkKa3n47rm98XeoGCYOH6Ng7v_ILjpetiUeIQv_e8PNPdnL404KW8lcRWG0am95VHRBCeY-p7jy8zbEdm56uV9OMILa9GJhi894UBBMgC6QLubHPbV" target="__blank"><button className="home-home-buttonnewsletter"
              type="button">Subscribe to Newsletter</button></a>

      

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


  

    {dataDate.length !== 0 && <div className="home-tour">
      <TitleComponent titleContent="Tour Dates" />

      <ul className="tour-list">
                    {
                        loadingTour && <Loading />
                    }

                    {
                        errorTour && (<ServerError />)
                    }

                    {
                        dataTour && (
                            dataTour.length === 0 ? <div className="tour-nodate">No upcoming tour dates</div> : (
                                dataTour.slice(0,5).map((date, index) => (
                                    <li key={`${date.day}-${date.month}-${date.year}`}><Date date_content={dataTour[index]} /></li>
                                  ))
                                )
                        )
                    }
      </ul>

      <Link className="home-link" to="/Tour"><button className="home-button">More Tour Dates</button></Link>
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
      <Link className="home-link" to="/News"><button className="home-button">More News</button></Link>
    </div>

    <div className="home-photos">
      <TitleComponent titleContent="Photos" />
      <div className="photo-galery">
        {
          images.slice(0,3).map((image) => (

            <div className="photo-galery-img-container" key={image}>
            <a href={image}><img src={image} alt="X or walrus" className="photo-galery-img" /></a>
          </div>

          ))
        }
      </div>
      <Link className="home-link" to="/Photos"><button className="home-button">More Photos</button></Link>
    </div>

    <div className="home-logo">
      <img src={logoBlanc} className="logo-img" alt="bandlogo" />
    </div>

  </div>     


  <Footer />
  </div>);
}

export default Home;
