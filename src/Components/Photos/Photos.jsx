import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Photos_mobile.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import {images} from "./dataPhotos.js";

function Photos(){

  

  return (
    <div className="photo-container">
      <TitleComponent titleContent="Photos" />
      <div className="photo-galery">
        {
          images.map((image) => {
            return (<div className="photo-galery-img-container" key={image}>
              <a href={image}><img src={image} alt="X or Walrus" className="photo-galery-img" /></a>
            </div>)
          }

              
          )
        }
      </div>

    </div>
  )
}

export default Photos;
