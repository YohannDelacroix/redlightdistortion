import { useEffect, useState } from "react";
import axios from "axios";

export default function Tour(){
    const [dataTour, setDataTour] = useState(null);
    const [errorTour, setErrorTour] = useState(null);
    const [loadingTour, setLoadingTour] = useState(true);
    const [update, setUpdate] = useState(0);

    //Get the datas from the server
    useEffect( () => {

        //Get list of tour dates from the server
        const getTourDates = async () => {
            try{ 
                const response = await axios.get('http://localhost:5050/tour')
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
    }, [update]);

    //When the admin press the button Delete, a tour date is removed from the calendar
    const handleDeleteTourDate = (tourDate) => (e) => {


        setUpdate(update+1);
    }

    /*     CONTROL of the ADD TOUR DATE FORM    */
    const controlCity = (e) => {
        console.log("city : ", e.target.value)
        
    }



    //When the admin press the button add tour date, a tour date is added to the calendar
    const handleAddTourDate = (e) => {
        e.preventDefault();
        //Check if all fields are correct

        if(true){
            //Send to Server
            let data;

            let fullDate = e.target['date'].value
                //Separate the day month and year
            const getDate = string => (([year, month, day]) => ({ day, month, year }))(string.split('-'));
            let separateDate = getDate(fullDate);

            
            data = {
                day: separateDate.day,
                month: separateDate.month,
                year: separateDate.year,
                place_geo: e.target['city'].value,
                place_name: e.target['place_name'].value,
                ticket_link: e.target['ticket_link'].value,
                more_link: e.target['more_link'].value
            }

            console.log(data)

            axios.post('http://localhost:5050/tour/add', data).then((response) => {
                console.log(response.status)
                console.log(response.data)
            })
            setUpdate(update+1);
        }
        
    }



    return (<div>
        <div>
                    <h1>Tour Dates</h1>

                    {
                        loadingTour && <div>A moment please ...</div>
                    }

                    {
                        errorTour && (<div>
                            {`Problem fetching datas - ${errorTour}`}
                        </div>)
                    }

                    <div>
                    {
                        dataTour && dataTour.map( (date,index) => {
                            return(
                                <div className="admin-tour" key={index}>
                                    <div className="admin-tour-element">
                                        <span>{date.day} {date.month} {date.year}</span>
                                    </div>
                                    
                                    <div className="admin-tour-element">
                                        <div>{date.place_geo}</div>
                                        <div>{date.place_name}</div>
                                    </div>
                                    
                                    <div className="admin-tour-element">
                                        <div>{date.ticket_link}</div>
                                        <div>{date.more_link}</div>
                                    </div>

                                    <div className="admin-tour-element admin-block-button">
                                        <button>Delete</button>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    </div>

                    <h2>Add a new Date</h2>
                    <div>
                        <form className="admin-form-tour" onSubmit={handleAddTourDate}>
                            <div className="admin-form-tour-field">
                                <div className="admin-form-tour-field-elem"><span>Select a date :</span></div>
                                <div className="admin-form-tour-field-elem">
                                    <input className="admin-form-tour-field-elem-field" 
                                            type="date" 
                                            id="date" 
                                            name="date" 
                                            min={new Date().toISOString().slice(0, 10)}
                                            max="2100-09-01" 
                                             /></div>
                            </div>

                            <div className="admin-form-tour-field">
                            <div className="admin-form-tour-field-elem"><span>Type the place name :</span></div>
                            <div className="admin-form-tour-field-elem">
                                <input className="admin-form-tour-field-elem-field" 
                                type="text" 
                                id="place_name" 
                                name="place_name" 
                                />
                            </div>
                            </div>

                            <div className="admin-form-tour-field">
                            <div className="admin-form-tour-field-elem"><span>City :</span></div>
                            <div className="admin-form-tour-field-elem">
                                <input className="admin-form-tour-field-elem-field" 
                                        type="text" 
                                        id="city" 
                                        name="city" 
                                        onChange={controlCity}/>
                            </div>
                            </div>


                            <div className="admin-form-tour-field">
                            <div className="admin-form-tour-field-elem"><span>Ticket link :</span></div>
                            <div className="admin-form-tour-field-elem">
                                <input className="admin-form-tour-field-elem-field" 
                                type="text" 
                                id="ticket_link" 
                                name="ticket_link" /></div>
                            </div>

                            <div className="admin-form-tour-field">
                            <div className="admin-form-tour-field-elem"><span>More Link :</span></div>
                            <div className="admin-form-tour-field-elem">
                                <input className="admin-form-tour-field-elem-field" 
                                type="text" 
                                id="more_link" 
                                name="more_link" /></div>
                            </div>
                            
                            <div className="admin-form-tour-submit">
                                <button type="submit">Add date</button> 
                            </div>
                        </form>
                    </div>
                    
            </div>
    </div>)
}