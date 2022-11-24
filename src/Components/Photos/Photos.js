import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Photos_mobile.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import {images} from "./dataPhotos.js";

function Photos(){

  

  return (<div className="container">
    <Header />
    <div className="photo-container">
      <TitleComponent titleContent="Photos" />
      <div className="photo-galery">
        {
          images.map((image) => {
            return (<div className="photo-galery-img-container" key={image}>
              <a href={image}><img src={image} alt="image" className="photo-galery-img" /></a>
            </div>)
          }

              
          )
        }
      </div>

    </div>
    <Footer />
  </div>)
}

export default Photos;
