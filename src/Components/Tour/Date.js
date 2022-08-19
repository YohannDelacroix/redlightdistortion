import "./Date.css";

function Date({date_content}){
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
      <div className="date-more">
        {
          (date_content.more_link != '') &&
          <button>More info</button>
        }
      </div>

      <div className="date-ticket">
        {
          (date_content.ticket_link != '') &&
          <button>Tickets</button>
        }
      </div>
    </div>

  </div>);
}

export default Date;
