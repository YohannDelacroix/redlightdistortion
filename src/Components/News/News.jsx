import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./News_mobile.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import NewsComponent from "./NewsComponent";
import {newsTable} from "./dataNews.js";
import {Link, Outlet} from "react-router-dom";

function News(){

  return (
    <div className="news-container">
      <Outlet />
      <div className="news-bottom">
        <TitleComponent titleContent="News" />

        <div className="news-list">
        {
          newsTable.map((news, index) => (
            <Link to={`${news.id}`}><NewsComponent key={`${news.title}-${index}`} newsContent={news} /></Link>
          ))
        }

        </div>
      </div>

    </div>
  )
}

export default News;
