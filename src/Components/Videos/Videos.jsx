import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Videos.css";
import TitleComponent from "../TitleComponent/TitleComponent";


function Videos(){
  return (
    <div  className="videos-container">
      <TitleComponent titleContent="Our Music" />
      <div className="videos-list">
          <iframe 
                  className="video-frame"
                  src="https://www.youtube.com/embed/p0Y52_ej810"
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen />
          <iframe 
                  className="video-frame"
                  src="https://www.youtube.com/embed/1dG4USdI4gk"
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen />
          <iframe 
                  className="video-frame"
                  src="https://www.youtube.com/embed/gTMZEDhnLUI"
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen />


      </div>
      <TitleComponent titleContent="Covers" />
      <div className="videos-list">
          <iframe 
                  className="video-frame"
                  src="https://www.youtube.com/embed/HZIAnUmYJEs"
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen />
      </div>
    </div>
  )
}

export default Videos;
