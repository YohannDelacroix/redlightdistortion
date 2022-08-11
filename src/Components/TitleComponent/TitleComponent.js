import "./TitleComponent.css";

function TitleComponent({titleContent}){
  return (<div className="title-container">
    <div className="title-text">
      {titleContent}
    </div>
  </div>)
}

export default TitleComponent;
