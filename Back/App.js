const express = require('express');
const app = express();
const fs = require('fs');
const { ppid } = require('process');


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

app.get('/newsletter', (req,res,next) => {
    console.log("Requete : " , Date.now()-start)
    let fichier = fs.readFileSync('../src/Datas/newsletter.json');
    let newsletter = JSON.parse(fichier)
    res.status(200).json(newsletter);
})


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

module.exports = app;

