import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import "./NewsContent.css";
import TitleComponent from "../../TitleComponent/TitleComponent.js";

function NewsContent(){
    
    return (<div>
        <Header />
        <div className="newscontent-container">
            <h1></h1>
        </div>
        <Footer />
    </div>)
}

export default NewsContent;