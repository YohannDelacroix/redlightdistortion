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
        console.log(tourDate)
        axios.delete('http://localhost:5050/tour', {data: tourDate}).then((response) => {
            console.log("response.status : \n", response.status)
            console.log("response.datz : \n", response.data)
        })
        setUpdate(update+1);
    }

    

    //Convert a Month numeric value to a format value like "NOV" , "DEC" , etc
    function convertMonthNtoS(monthNumeric){
        switch(monthNumeric){
            case '01':
                return "JAN";
            case '02':
                return "FEB";
            case '03':
                return "MAR";
            case '04':
                return "APR";
            case '05':
                return "MAY";
            case '06':
                return "JUN";
            case '07':
                return "JUL";
            case '08':
                return "AUG";
            case '09':
                return "SEP";
            case '10':
                return "OCT";
            case '11':
                return "NOV";
            case '12':
                return "DEC";
            default:
                console.log("convertMonthNtoS parameter is not a month")
        }
    }


    //Reset the tour form
    const resetForm = () => {
        document.getElementById("admin-form-tour").reset()
    }


   

    /*     CONTROL of the ADD TOUR DATE FORM    */
    const controlDate = e => {
        console.log(e.target.value)
        let splittedDate = splitDate(e.target.value)

        //Check if the date is already used or not
        if(!checkDateAvailability(splittedDate)){
            document.getElementById("date").classList.add("field-failed")
            document.getElementById("alreadyUsedDate").classList.remove("failed-hidden")
        }
        else{
            document.getElementById("date").classList.remove("field-failed")
            document.getElementById("alreadyUsedDate").classList.add("failed-hidden")
        }

        if(e.target.value !== ""){
            document.getElementById('unfilledDate').classList.add("failed-hidden")
        }

    }

    const controlPlaceName = (e) => {
        if(e.target.value != ""){
            document.getElementById('place_name').classList.remove("field-failed")
            document.getElementById('unfilledPlace').classList.add("failed-hidden")
        }
    }

    const controlCity = (e) => {
        if(e.target.value !== ""){
            document.getElementById('city').classList.remove("field-failed")
            document.getElementById('unfilledCity').classList.add("failed-hidden")
        }
    }

    const controlRegion = (e) => {
        if(e.target.value !== ""){
            document.getElementById('region').classList.remove("field-failed")
            document.getElementById('unfilledRegion').classList.add("failed-hidden")
        }
    }

    const controlCountry = (e) => {
        if(e.target.value !== ""){
            document.getElementById('country').classList.remove("field-failed")
            document.getElementById('unfilledCountry').classList.add("failed-hidden")
        }
    }


    //Convert a date like "25-NOV-2022" into an object with 3 fields {day,month,year}
    const splitDate = (fullDate) => {
        const getDate = string => (([year, month, day]) => ({ day, month, year }))(string.split('-'));
        let splittedDate = getDate(fullDate);
        return splittedDate
    }


    //Check if a date is available in the calendar
    const checkDateAvailability = (date) => {
        let checked = []

        for(let i = 0; i < dataTour.length; i++){
            if(dataTour[i].day === date.day && dataTour[i].month === convertMonthNtoS(date.month) && dataTour[i].year === date.year){
                checked.push(false)
            }
        }

        if(checked[0] == false) return false
        else return true
    }

    //When the admin press the button add tour date, a tour date is added to the calendar
    const handleAddTourDate = (e) => {
        e.preventDefault();


        //Check if all fields are filled
        let checked = true;

        //Check date
        if(e.target['date'].value === ""){
            checked=false;
            document.getElementById('date').classList.add("field-failed")
            document.getElementById('unfilledDate').classList.remove("failed-hidden")
        }
        else{
            if(checkDateAvailability(splitDate(e.target['date'].value))){
                document.getElementById('date').classList.remove("field-failed")
            }
            document.getElementById('unfilledDate').classList.add("failed-hidden")
        }

        //Check place name
        if(e.target['place_name'].value === ""){
            checked=false;
            document.getElementById('place_name').classList.add("field-failed")
            document.getElementById('unfilledPlace').classList.remove("failed-hidden")
        }
        else{
            document.getElementById('place_name').classList.remove("field-failed")
            document.getElementById('unfilledPlace').classList.add("failed-hidden")
        }

        //Check city
        if(e.target['city'].value === ""){
            checked=false;
            document.getElementById('city').classList.add("field-failed")
            document.getElementById('unfilledCity').classList.remove("failed-hidden")
        }
        else{
            document.getElementById('city').classList.remove("field-failed")
            document.getElementById('unfilledCity').classList.add("failed-hidden")
        }

        //Check region
        if(e.target['region'].value === ""){
            checked=false;
            document.getElementById('region').classList.add("field-failed")
            document.getElementById('unfilledRegion').classList.remove("failed-hidden")
        }
        else{
            document.getElementById('region').classList.remove("field-failed")
            document.getElementById('unfilledRegion').classList.add("failed-hidden")
        }

        //Check country
        if(e.target['country'].value === ""){
            checked=false;
            document.getElementById('country').classList.add("field-failed")
            document.getElementById('unfilledCountry').classList.remove("failed-hidden")
        }
        else{
            document.getElementById('country').classList.remove("field-failed")
            document.getElementById('unfilledCountry').classList.add("failed-hidden")
        }


        let separateDate = splitDate(e.target['date'].value)

        //Check if the date is not already used, to prevent key bugs and because it's impossible to play at two places the same day
        if(!checkDateAvailability(separateDate)){
            checked = false
        }
        

        if(checked){
            //Send to Server
            console.log("send data to server")
            let data;

        
            data = {
                day: separateDate.day,
                month: separateDate.month,
                year: separateDate.year,
                city: e.target['city'].value,
                region: e.target['region'].value,
                country: e.target['country'].value,
                place_name: e.target['place_name'].value,
                ticket_link: e.target['ticket_link'].value,
                more_link: e.target['more_link'].value
            }

            console.log(data)

            axios.post('http://localhost:5050/tour/', data).then((response) => {
                console.log(response.status);
                console.log(response.data);
                setUpdate(update+1);
            })
            resetForm();
            
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
                                <div className="admin-tour" key={`${date.day}-${date.month}-${date.year}`}>
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
                                        <button type="button" onClick={handleDeleteTourDate(date)}>Delete</button>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    </div>

                    <h2>Add a new Date</h2>
                    <div>
                        <form id="admin-form-tour" className="admin-form-tour" onSubmit={handleAddTourDate}>
                            <div className="admin-form-tour-field">
                                <div className="admin-form-tour-field-elem"><span>Select a date :</span></div>
                                <div className="admin-form-tour-field-elem">
                                    <input className="admin-form-tour-field-elem-field" 
                                            type="date" 
                                            id="date" 
                                            name="date" 
                                            min={new Date().toISOString().slice(0, 10)}
                                            max="2100-09-01" 
                                            onChange={controlDate}
                                             />
                                    <div id="unfilledDate" className="failed-info failed-hidden">You must select a date</div>
                                    <div id="alreadyUsedDate" className="failed-info failed-hidden">This date is already used</div>
                                </div>
                            </div>

                            <div className="admin-form-tour-field">
                            <div className="admin-form-tour-field-elem"><span>Type the place name :</span></div>
                            <div className="admin-form-tour-field-elem">
                                <input className="admin-form-tour-field-elem-field" 
                                type="text" 
                                id="place_name" 
                                name="place_name" 
                                onChange={controlPlaceName}
                                />
                                <div id="unfilledPlace" className="failed-info failed-hidden">You must fill the show place</div>
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
                                <div id="unfilledCity" className="failed-info failed-hidden">You must fill the city</div>

                            </div>
                            </div>

                            <div className="admin-form-tour-field">
                            <div className="admin-form-tour-field-elem"><span>Region :</span></div>
                            <div className="admin-form-tour-field-elem">
                                <input className="admin-form-tour-field-elem-field" 
                                        type="text" 
                                        id="region" 
                                        name="region" 
                                        onChange={controlRegion}/>
                                 <div id="unfilledRegion" className="failed-info failed-hidden">You must fill the region</div>
                            </div>
                            </div>

                            <div className="admin-form-tour-field">
                            <div className="admin-form-tour-field-elem"><span>Country :</span></div>
                            <div className="admin-form-tour-field-elem">
                                <input className="admin-form-tour-field-elem-field" 
                                        type="text" 
                                        id="country" 
                                        name="country" 
                                        onChange={controlCountry}/>
                                <div id="unfilledCountry" className="failed-info failed-hidden">You must fill the country</div>
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