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