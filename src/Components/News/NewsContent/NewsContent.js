import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import "./NewsContent.css";
import TitleComponent from "../../TitleComponent/TitleComponent.js";

function NewsContent({news}){
    return (<div>
        <div className="newscontent-container">
            <h1>{news.title}</h1>
        </div>
    </div>)
}

export default NewsContent;