import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./News.css";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import NewsComponent from "./NewsComponent.js";

function News(){

  const newsTable = [
    {
      title: "Live from Frankfurt",
      date: "August, 25, 2022",
      img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
      content:"This is an incredible live here"
    },
    {
      title: "Live from Paris",
      date: "August, 20, 2022",
      img: "https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg",
      content:"This is an incredible live here"
    },
    {
      title: "Live from Frankfurt",
      date: "August, 25, 2022",
      img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
      content:"This is an incredible live here"
    },
    {
      title: "Live from Paris",
      date: "August, 20, 2022",
      img: "https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg",
      content:"This is an incredible live here"
    },
    {
      title: "Live from Frankfurt",
      date: "August, 25, 2022",
      img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
      content:"This is an incredible live here"
    },
    {
      title: "Live from Paris",
      date: "August, 20, 2022",
      img: "https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg",
      content:"This is an incredible live here"
    },
    {
      title: "Live from Frankfurt",
      date: "August, 25, 2022",
      img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
      content:"This is an incredible live here"
    },
    {
      title: "Live from Paris",
      date: "August, 20, 2022",
      img: "https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg",
      content:"This is an incredible live here"
    },
    {
      title: "Live from Frankfurt",
      date: "August, 25, 2022",
      img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
      content:"This is an incredible live here"
    },
    {
      title: "Live from Paris",
      date: "August, 20, 2022",
      img: "https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg",
      content:"This is an incredible live here"
    }
  ];


  const tab = [5,4,6,3,8];

  return (<div>
    <Header />
    <div className="news-container paddingPage">
      <TitleComponent titleContent="News" />

      <div className="news-list">
      {
        newsTable.map((news, index) => (
          <NewsComponent key={`${news.title}-${index}`} newsContent={news} />
        ))
      }

      </div>

    </div>
    <Footer />
  </div>)
}

export default News;
