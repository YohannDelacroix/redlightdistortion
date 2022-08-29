import './News_mobile.css';
import {useState, useEffect} from 'react'
function NewsComponent({newsContent}){


  //This part make the background of the news component change when the mouse is over
  const backgroundImageNormal = {
    backgroundImage: "url("+newsContent.img+")"
  };
  const backgroundImageDark = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("+newsContent.img+")"
  };


  const [backgroundImage,setBackgroundImage] = useState(backgroundImageDark);
  const [displayContent, setDisplayContent] = useState(true);

  //Event when the mouse enter in the news square
  const mouseIn = () => {
    setBackgroundImage(backgroundImageNormal);
    setDisplayContent(false);
  };
  //Event when the mouse go out of the news square
  const mouseOut = () => {
    setBackgroundImage(backgroundImageDark);
    setDisplayContent(true);
  };




  return(<div className="news-component-background"
              style={backgroundImage}
              onMouseEnter={mouseIn}
              onMouseLeave={mouseOut}>
    { displayContent &&
      <div className="news-component-content">
        <div className="news-component-content-title">
          {newsContent.title}
        </div>
        <div className="news-component-content-date">
          {newsContent.date}
        </div>
      </div>
    }

  </div>)
}

export default NewsComponent;
