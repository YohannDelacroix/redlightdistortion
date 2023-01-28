/*      TOUR DATES      */
const fs = require('fs');
const functions = require('../Functions')
const start = Date.now();

const Tour = require('../models/Tour');





const getTourDates = async (req,res) => {
    console.log("GET Tour Requete : " , Date.now()-start);
    /*let fichier = fs.readFileSync('./models/tourdates.json');
    let tourDates = JSON.parse(fichier);
    res.status(200).json(tourDates);*/
    const tourDates = await Tour.find();
    if(!tourDates) return res.status(204).json({"message": "No employees found"});
    res.status(200).json(tourDates);
}





//User add a tour date to the calendar
const addTourDate = async (req,res) => {
    let date = req.body;
    console.log("New tour date added : ", date);

    if(!req?.body?.day || !req?.body?.month || !req?.body?.year || !req?.body?.city || !req?.body?.place_name) return res.status(400).json({"message":"Unvalid date"});
    

    try{
        const result = await Tour.create({
            day: date.day,
            month: functions.convertMonthNtoS(date.month),
            year: date.year,
            place_geo: date.city+", "+date.region+", "+date.country,
            place_name: date.place_name,
            ticket_link: date.ticket_link,
            more_link: date.more_link
        })

        console.log("res : \n", result)

        res.status(201).json(result);
    }
    catch(err){
        console.log(err.message);
    }
}


//User remove a tour date from the calendar
const removeTourDate = async (req,res) => {
    console.log("Deleting a tour date : ")
    if(!req?.body?.id) return res.status(400).json({"message": "tour Id required"});

    const tourDate = await Tour.findOne({_id: req.body.id}).exec();
    if(!tourDate) return res.status(204).json({"message": `No tour date matches with ID ${req.body.id}`});

    const result = await Tour.deleteOne({_id: req.body.id});
    res.json(result);
    
    
    /*let date = req.body;

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
    })*/
}


module.exports = {
    getTourDates,
    addTourDate,
    removeTourDate
}