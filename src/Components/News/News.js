import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./News_mobile.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import NewsComponent from "./NewsComponent.js";
import NewsContent from "./NewsContent/NewsContent.js";
import {newsTable} from "./dataNews.js";
import {Link} from "react-router-dom";

function News(){

  return (<div>
    <Header />
    <div className="news-container">
      <TitleComponent titleContent="News" />

      <div className="news-list">
      {
        newsTable.map((news, index) => (
          <Link to="NewsContent"><NewsComponent key={`${news.title}-${index}`} newsContent={news} /></Link>
        ))
      }

      </div>

    </div>
    <Footer />
  </div>)
}

export default News;
