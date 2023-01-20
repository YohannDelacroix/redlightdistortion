import "./Tour.css";

function Date({date_content}){
  //Don't display the buttons is there is no link available
  let dateMore = "date-more";
  if(date_content.more_link === ''){
    dateMore = "invisible"
  } 
  let dateTicket = "date-ticket";
  if(date_content.ticket_link === ''){
    dateTicket = "invisible"
  }
  

  return (<div className="date-container">
    <div className="date-date">
      <div className="date-date-month">{date_content.month}</div>
      <div className="date-date-day">{date_content.day}</div>
    </div>

    <div className="date-place">
      <div className="date-place-city">{date_content.place_geo}</div>
      <div className="date-place-name">{date_content.place_name}</div>
    </div>


    <div className="date-links">
      <div className={dateMore}>
          <a href={date_content.more_link} target="_blank"><button>More info</button></a>
      </div>

      <div className={dateTicket}>
        <a href={date_content.ticket_link} target="_blank"><button>Tickets</button></a>
      </div>
    </div>

  </div>);
}

export default Date;
