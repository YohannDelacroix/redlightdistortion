import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Photos.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";

function Photos(){

  //Import all the images from the folder ./Galery
  function importAll(r){
    let images = [];
    r.keys().map((item, index) => {images.push(r(item));});
    return images;
  }

  const images = importAll(require.context('./Galery', false, /\.(png|jpe?g|svg)$/));

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
