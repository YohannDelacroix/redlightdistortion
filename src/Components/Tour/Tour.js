import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import "./Tour.css";
import Date from "./Date.js";
import {dataDate} from "./dataDate.js";

function Tour(){

  return (<div className="main-container">
    <Header />
    <div className="tour-container">
    <TitleComponent titleContent="Tour Dates" />

    <ul className="tour-list">
      {dataDate.map((date, index) => (
        <li key={index}><Date date_content={dataDate[index]} /></li>
      ))}
    </ul>

    </div>



    <Footer />
    </div>)
}

export default Tour;
