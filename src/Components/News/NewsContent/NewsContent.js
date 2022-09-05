import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import "./NewsContent.css";
import TitleComponent from "../../TitleComponent/TitleComponent.js";
import {useParams} from 'react-router-dom';
import {getNews} from "../dataNews";
import {useEffect} from 'react';



function NewsContent(){
    let params = useParams();
    let news = getNews(params.linkNews);


    return (<div className="newscontent-main-container">
        <div className="newscontent-container">
        <img className="newscontent-main-img" src={news.img} alt="img" />
            <h1 className="newscontent-title">{news.title}</h1>
            <h6>{news.date}</h6>
            
            <div className="newscontent-content" dangerouslySetInnerHTML={{__html: news.content}}>
            </div>
        </div>
        
    </div>)
}

export default NewsContent;