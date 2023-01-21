import "./NewsContent.css";
import {useParams} from 'react-router-dom';
import {getNews} from "../dataNews";


function NewsContent(){
    let params = useParams();
    let news = getNews(params.linkNews);


    return (<div className="newscontent-main-container">
        <div className="newscontent-container">
        {
            news.img && (<img className="newscontent-main-img" src={news.img} alt="img" />)
        }
        
            <h1 className="newscontent-title">{news.title}</h1>
            <h6>{news.date}</h6>
            
            <div className="newscontent-content" dangerouslySetInnerHTML={{__html: news.content}}>
            </div>
        </div>
        
    </div>)
}

export default NewsContent;