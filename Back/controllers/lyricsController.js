/* LYRICS */
const fs = require('fs');
const start = Date.now();

const getLyrics = (req,res) => {
    console.log("GET Lyrics Requete : " , Date.now()-start)
    let fichier = fs.readFileSync('../src/Datas/lyrics.json');
    let lyrics = JSON.parse(fichier)
    res.status(200).json(lyrics);
};

const addLyrics = (req,res) => {
    console.log("POST Lyrics request : ", Date.now())
    let jsonURL = "../src/Datas/lyrics.json"

    let fichier = fs.readFileSync(jsonURL);
    let lyrics = JSON.parse(fichier);

    //let new_id = lyrics[lyrics.length-1].id + 1;//Generate a new unique ID
    let newSong = {...req.body}
    console.log("New song :\n", newSong);

    let newLyrics = [...lyrics, {...newSong}]
    
    fs.writeFileSync(jsonURL, JSON.stringify(newLyrics));

    res.status(201).json({
        message: "Lyrics post request, the new request is in the server"
    })
}

const deleteLyrics = (req,res,next) => {
    console.log("DELETE Lyrics request : ", Date.now())
    let jsonURL = "../src/Datas/lyrics.json"

    let fichier = fs.readFileSync(jsonURL);
    let lyrics = JSON.parse(fichier);

    console.log(req.body)

    let newLyrics = lyrics.filter(song => req.body.id !== song.id)
    console.log(newLyrics)
    fs.writeFileSync(jsonURL, JSON.stringify(newLyrics));

    res.status(201).json({
        message: "Lyrics delete request, the new request is in the server"
    })
}

const updateLyrics = (req,res,next) => {
    console.log("UPDATE Lyrics request : ", Date.now())
    let jsonURL = "../src/Datas/lyrics.json"
    let lyricUpdate = req.body;

    let fichier = fs.readFileSync(jsonURL);
    let lyrics = JSON.parse(fichier);

    console.log(req.body)

    for(let i = 0; i < lyrics.length; i++){
        if(lyrics[i].id === lyricUpdate.id){
            lyrics[i] = lyricUpdate;
        }
    }


    console.log(lyrics)
    fs.writeFileSync(jsonURL, JSON.stringify(lyrics));

    res.status(201).json({
        message: "Lyrics update request, the new request is in the server"
    })
}

module.exports = {
    getLyrics,
    addLyrics,
    deleteLyrics,
    updateLyrics
}