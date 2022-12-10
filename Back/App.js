const express = require('express');
const app = express();
const fs = require('fs');
const { ppid } = require('process');
const functions = require('./Functions')



app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin',
    '*');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  

app.use(express.json())

const start = Date.now();


/*    NEWSLETTER    */

//GET : Return the newsletter-s subscribers list
app.get('/newsletter', (req,res,next) => {
    console.log("Requete : " , Date.now()-start)
    let fichier = fs.readFileSync('../src/Datas/newsletter.json');
    let newsletter = JSON.parse(fichier)
    res.status(200).json(newsletter);
})



//POST : A subscriber have been added by the admin to the mailing app
app.post('/newsletter/archived', (req,res,next) => {
    let person = req.body;
    
    let fichier = fs.readFileSync('../src/Datas/newsletter.json')
    let newsletter = JSON.parse(fichier)
    newsletter.map( (data) => {
        if(data.id === person.id){
            data.seen = true;
        }
    })

    console.log("Request POST, update seen", newsletter)

    const newsletterJS = JSON.stringify(newsletter);
    fs.writeFileSync('../src/Datas/newsletter.json', newsletterJS);

    res.status(201).json({
        message: "Request post ok (Update Seen)"
    })
})


//POST : A subscriber have been deleted from the data base
app.post('/newsletter/deleted', (req,res,next) => {
    let person = req.body;

    let fichier = fs.readFileSync('../src/Datas/newsletter.json')
    let newsletter = JSON.parse(fichier)
    newsletter.map( (data, index) => {
        if(data.id === person.id){
            console.log("index = ", index)
            newsletter.splice(index,1)
        }
    })
    
    const newsletterJS = JSON.stringify(newsletter);
    fs.writeFileSync('../src/Datas/newsletter.json', newsletterJS);

    res.status(201).json({
        message: "Request post ok (Delete entry)"
    })
})


//POST : A new user have subscribed to the Newsletter
app.post('/newsletter/add', (req,res,next) => {
    let person = req.body

    console.log(person)

    let fichier = fs.readFileSync('../src/Datas/newsletter.json')
    let newsletter = JSON.parse(fichier)

    let new_id = newsletter[newsletter.length - 1].id + 1;
    
    let new_person = {
        id: new_id,
        email: person.email,
        name: person.name,
        city: person.city,
        seen: false
    }

    newsletter.push(new_person);
    console.log(newsletter)

    const newsletterJS = JSON.stringify(newsletter);
    fs.writeFileSync('../src/Datas/newsletter.json', newsletterJS);

    res.status(201).json({
        message: "Request post ok (new subscriber)"
    })
})




/*      TOUR DATES      */

app.get('/tour', (req,res,next) => {
    console.log("GET Tour Requete : " , Date.now()-start)
    let fichier = fs.readFileSync('../src/Datas/tourdates.json');
    let tourDates = JSON.parse(fichier)
    res.status(200).json(tourDates);
})



//User add a tour date to the calendar
app.post('/tour/add', (req,res,next) => {
    let date = req.body

    console.log("DATE ENTRANTE : ", date)

    let fichier = fs.readFileSync('../src/Datas/tourdates.json')
    let tourdates = JSON.parse(fichier)

    

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
    functions.sortTourDates(tourdates)
    console.log(tourdates)

    const tourdatesJS = JSON.stringify(tourdates);
    fs.writeFileSync('../src/Datas/tourdates.json', tourdatesJS);

    res.status(201).json({
        message: "Request post ok (new date)"
    })
})


//User remove a tour date from the calendar
app.post('/tour/delete', (req,res,next) => {
    console.log("Delete a tour date")
    let date = req.body;

    console.log(date)

    let fichier = fs.readFileSync('../src/Datas/tourdates.json')
    let tourDates = JSON.parse(fichier)
    tourDates.map( (data, index) => {
        if(data.day === date.day && data.month === date.month && data.year === date.year){
            console.log("index = ", index)
            tourDates.splice(index,1)
        }
    })

    console.log(tourDates)
    
    const tourDatesJS = JSON.stringify(tourDates);
    fs.writeFileSync('../src/Datas/tourdates.json', tourDatesJS);

    res.status(201).json({
        message: "Request post ok (Delete entry)"
    })
})


/* LYRICS */
app.get('/lyrics', (req,res,next) => {
    console.log("GET Lyrics Requete : " , Date.now()-start)
    let fichier = fs.readFileSync('../src/Datas/lyrics.json');
    let lyrics = JSON.parse(fichier)
    res.status(200).json(lyrics);
})


module.exports = app;

