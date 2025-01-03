import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./Tour.css";
import Date from "./Date";
import {useState, useEffect} from 'react'
import axios from "../../api/axios";
import Loading from "../Loading/Loading";
import ServerError from "../Errors/ServerError";

function Tour(){
  const [dataTour, setDataTour] = useState(null);
  const [errorTour, setErrorTour] = useState(null);
  const [loadingTour, setLoadingTour] = useState(true);
  
  //Get the datas from the server
  useEffect( () => {

      //Get list of tour dates from the server
      const getTourDates = async () => {
          try{ 
              const response = await axios.get('/tour')
              setDataTour(response.data)
              setErrorTour(null)
          } 
          catch(err){
              setErrorTour(err.message)
              setDataTour(null)
          }
          finally{
              setLoadingTour(false)
          }
      }


      getTourDates();
  }, []);

  return (

    <div className="tour-container">
    <TitleComponent titleContent="Tour Dates" />


    
                    {
                        loadingTour && <Loading />
                    }

                    {
                        errorTour && (<ServerError />)
                    }

    <ul className="tour-list">
                    <div>
                    {
                        
                        dataTour && (
                            dataTour.length === 0 ? <div className="tour-nodate">No upcoming tour dates</div> : (
                                dataTour.map((date, index) => (
                                    <li key={`${date.day}-${date.month}-${date.year}`}><Date date_content={dataTour[index]} /></li>
                                  ))
                                )
                        )
                           
                        
                    }
                    </div>

    {
        /*
{dataDate.length == 0 ? <div className="tour-nodate">No upcoming tour dates</div> : 
        
      dataDate.map((date, index) => (
        <li key={`${date.day}-${date.month}-${date.year}`}><Date date_content={dataDate[index]} /></li>
      ))}
        */
    }
      
    </ul>

    </div>

    )
}

export default Tour;
