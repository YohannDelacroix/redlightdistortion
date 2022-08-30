import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Photos_mobile.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import {images} from "./dataPhotos.js";

function Photos(){

  

  return (<div>
    <Header />
    <div className="photo-container">
      <TitleComponent titleContent="Photos" />
      <div className="photo-galery">
        {
          images.map((image) => (

              <img key={image} src={image} alt="image" />

          ))
        }
      </div>

    </div>
    <Footer />
  </div>)
}

export default Photos;
