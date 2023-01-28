/* LYRICS */
const fs = require('fs');
const start = Date.now();
const Lyrics = require('../models/Lyrics');

//Used for migration
const saveDB = async (lyric) => {
    try{
        const result = await Lyrics.create({
            title: lyric.title,
            description: [...lyric.description],
            lyrics_en: [...lyric.lyrics_en]
        })
        console.log("SAVED");
    }catch(err){
        console.log(err.message);
    }
}


const getLyrics = async (req,res) => {
    console.log("GET Lyrics Requete : " , Date.now()-start)

    const lyrics = await Lyrics.find();
    if(!lyrics) return res.status(400).json({"message":"No lyrics found"});

    res.status(200).json(lyrics);
};

const addLyrics = async (req,res) => {
    console.log("POST Lyrics request : ", Date.now())

    if(!req?.body?.title) return res.status(400).json({"message":"Title required"});

    console.log("bd: ", req.body);
    try{
        const result = await Lyrics.create({
            title: req.body.title,
            description: [...req.body.description],
            lyrics_en: [...req.body.lyrics_en]
        })

        res.status(201).json(result);
    }catch(err){
        console.log(err.message);
    }

    
}

const deleteLyrics = async (req,res,next) => {
    console.log("DELETE Lyrics request : ", req.body)


    if(!req?.body?.id) return res.status(400).json({"message": "Lyric ID required"});

    const lyric = await Lyrics.findOne({_id: req.body.id}).exec();
    if(!lyric){
        return res.status(204).json({"message":`No lyric matches with ${req.body.id}`});
    }

    const result = await Lyrics.deleteOne({_id: req.body.id});

    res.status(200).json(result);
}

const updateLyrics = async (req,res,next) => {
    console.log("UPDATE Lyrics request : ", req.body)

    if(!req?.body?.id) return res.status(400).json({"message":"ID parameter is required"})

    const lyric = await Lyrics.findOne({_id: req.body.id}).exec();
    if(!lyric) return res.status(409).json({"message" : `No Lyrics matches with ${req.body.id}`});

    lyric.title = req.body.title;
    lyric.description = [...req.body.description];
    lyric.lyrics_en = [...req.body.lyrics_en];

    const result = await lyric.save();
    res.status(201).json(result);
}

module.exports = {
    getLyrics,
    addLyrics,
    deleteLyrics,
    updateLyrics
}