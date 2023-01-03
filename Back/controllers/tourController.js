/*      TOUR DATES      */
const fs = require('fs');
const functions = require('../Functions')
const start = Date.now();

const getTourDates = (req,res) => {
    console.log("GET Tour Requete : " , Date.now()-start);
    let fichier = fs.readFileSync('./models/tourdates.json');
    let tourDates = JSON.parse(fichier);
    res.status(200).json(tourDates);
}



//User add a tour date to the calendar
const addTourDate = (req,res) => {
    let date = req.body;

    console.log("DATE ENTRANTE : ", date);

    let fichier = fs.readFileSync('./models/tourdates.json');
    let tourdates = JSON.parse(fichier);

    

    let new_date = {
        day: date.day,
        month: functions.convertMonthNtoS(date.month),
        year: date.year,
        place_geo: date.city+", "+date.region+", "+date.country,
        place_name: date.place_name,
        ticket_link: date.ticket_link,
        more_link: date.more_link
    }

    tourdates.push(new_date);
    functions.sortTourDates(tourdates);
    console.log(tourdates);

    const tourdatesJS = JSON.stringify(tourdates);
    fs.writeFileSync('./models/tourdates.json', tourdatesJS);

    res.status(201).json({
        message: "Request Post ok : new date added"
    })
}


//User remove a tour date from the calendar
const removeTourDate = (req,res) => {
    console.log("Delete a tour date : ")
    let date = req.body;

    console.log("DATE :", date)

    let fichier = fs.readFileSync('./models/tourdates.json')
    let tourDates = JSON.parse(fichier)
    tourDates.map( (data, index) => {
        if(data.day === date.day && data.month === date.month && data.year === date.year){
            console.log("index = ", index)
            tourDates.splice(index,1)
        }
    })

    console.log(tourDates)
    
    const tourDatesJS = JSON.stringify(tourDates);
    fs.writeFileSync('./models/tourdates.json', tourDatesJS);

    res.status(201).json({
        message: "Request post ok (Delete entry)"
    })
}


module.exports = {
    getTourDates,
    addTourDate,
    removeTourDate
}