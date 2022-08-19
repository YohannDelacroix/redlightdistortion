import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./News.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";

function News(){
  return (<div>
    <Header />
    <div className="news-container paddingPage">
      <TitleComponent titleContent="News" />
    </div>
    <Footer />
  </div>)
}

export default News;
