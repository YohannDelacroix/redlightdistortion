import axios from 'axios'
import React from 'react'
import {useState, useEffect, useReducer} from 'react'
import DeleteConfirmation from './DeleteConfirmation/DeleteConfirmation';
import {DEL_ACTION} from './DeleteConfirmation/deleteActions';
import { deleteConfirmationReducer } from './DeleteConfirmation/deleteReducer';

const Lyrics = () => {
    const emptySong = {id:undefined, title:"",description:"",lyrics_en:""};

    const [lyrics, setLyrics] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [updateSong, setUpdateSong] = useState(emptySong)
    const [modeUpdate, setModeUpdate] = useState(false)


    const [del, dispatchDel] = useReducer(deleteConfirmationReducer, {
        deleteAuthorization: false,
        deleteConfirmation: false,
        name: undefined,
        id: undefined
    });


    //Load the lyrics from a JSON file
    useEffect( () => {
        //Get list of lyrics from the server
        const getLyrics = async () => {
          try{ 
              const response = await axios.get('http://localhost:5050/lyrics')
              setLyrics(response.data)
              setError(null)
          } 
          catch(err){
              setError(err.message)
              setLyrics(null)
          }
          finally{
              setLoading(false)
          }
       }
  
      getLyrics();
    },[])

    //Debug
    useEffect(() => {
        console.log("LOAD LYRICS : \n", lyrics);
    },[lyrics])

    useEffect(() => {
        console.log("updateSong : \n", updateSong)
    }, [updateSong])

    //Reverse a lyrics object into a string value
    const reverseLyricsToString = (lyricsArray) => {
        let reverse_lyrics = "";
        for(let i = 0; i < lyricsArray.length; i++){
            reverse_lyrics = reverse_lyrics + lyricsArray[i] + "\n";
        }
        return reverse_lyrics
    }

    //Convert lyrics string to a lyrics array
    const convertLyricsToArray = (lyrics) => {
        let lyricsArray = lyrics.split('\n');
        return lyricsArray;
    }


     //Set the form to the add mode - SWITCH
     const handleAddMode = () => {
        setModeUpdate(false)
        setUpdateSong(emptySong)
        document.getElementById("editLyrics").reset();
    }

    //Set the form to the update mode - SWITCH
    const handleUpdateMode = (id) => {
        const song = lyrics.find(s => s.id === id)
        console.log("find : " , song);

        const initialSong = {
            id: song._id,
            title: song.title,
            description: reverseLyricsToString(song.description),
            lyrics_en: reverseLyricsToString(song.lyrics_en)
        }
        setUpdateSong(initialSong)
        setModeUpdate(true)
        document.getElementById('ltitle').value=initialSong.title;
        document.getElementById('ldescription').value=initialSong.description;
        document.getElementById('llyrics-en').value=initialSong.lyrics_en;
    }


    //Handle the submit button of the form, the form can be both an add or an update
    const handleSubmitLyrics = (e) => {
        e.preventDefault();
        
        let lyrics_string = e.target['lyrics-en'].value;
        let lyrics_enArray =  convertLyricsToArray(lyrics_string);//Separate each line in a table
        let title = e.target['title'].value;
        let description_string = e.target['description'].value;
        let descriptionArray = convertLyricsToArray(description_string);

        

        if(!modeUpdate){ //If this is an addition, post to server
            console.log("LYRICS : \n", lyrics)
            //let new_id = lyrics[lyrics.length-1].id + 1;//Generate a new unique ID
            const newSong = {
                title: title,
                description: descriptionArray,
                lyrics_en: lyrics_enArray
            }

            axios.post('http://localhost:5050/lyrics/', newSong).then((response) => {
                console.log("response.status : \n", response.status)
                console.log("response.datz : \n", response.data)

                if(response.status === 201){
                    document.getElementById("editLyrics").reset();
                    setLyrics([...lyrics, response.data]);
                }
            })
        }
        else{ //If this is an update, update on server
            const newSong = {
                id: updateSong.id,
                title: title,
                description: descriptionArray,
                lyrics_en: lyrics_enArray
            }

            axios.put('http://localhost:5050/lyrics/', newSong).then((response) => {
                console.log("response.status : \n", response.status)
                console.log("response.datz : \n", response.data)

                if(response.status === 201){
                    document.getElementById('ltitle').value="";
                    document.getElementById('ldescription').value="";
                    document.getElementById('llyrics-en').value="";

                    for(let i = 0; i < lyrics.length; i++){
                        if(lyrics[i].id === newSong.id){
                            lyrics[i].title = newSong.title;
                            lyrics[i].description = newSong.description;
                            lyrics[i].lyrics_en = newSong.lyrics_en;
                            console.log("TEST\n", lyrics)
                        }
                    }

                    setUpdateSong(emptySong)
                    setModeUpdate(false)
                }
            })
        }
    }


    //When the admin choose to delete a song
    const handleDeleteSong = (id) => {
        dispatchDel({type: DEL_ACTION.CONFIRMATION, payload: true});
        dispatchDel({type: DEL_ACTION.SET_ID, payload: id});
        let song = lyrics.find((song) => song._id === id);
        dispatchDel({type: DEL_ACTION.SET_NAME, payload: song.title});
    }

    const deleteSong = (id) => {
        console.log("delete song ...\n" , id)

        if(del.deleteAuthorization){
            axios.delete('http://localhost:5050/lyrics/', {data: {id: id}} ).then((response) => {
                if(response.status === 200){
                    let newLyrics = lyrics.filter((sg) => id !== sg._id);
                    console.log("TEST : \n", newLyrics)
                    setLyrics(newLyrics);
                }
            })
        }

        dispatchDel({type: DEL_ACTION.AUTHORIZATION, payload: false});
        dispatchDel({type: DEL_ACTION.SET_ID, payload: undefined});
        dispatchDel({type: DEL_ACTION.SET_NAME, payload: undefined});
    }

    useEffect( () => {
        if(del.deleteAuthorization){
            deleteSong(del.id);
        }
    }, [del.deleteAuthorization])
    

    return (
        <section className="admin-lyrics-container">
            <h1>Lyrics</h1>
            {loading && <div>A moment please ....</div>}
            {error && <div>Problem fetching datas with server</div>}  
            {del.deleteConfirmation && 
             <DeleteConfirmation dispatchDel={dispatchDel} delName={del.name}/>}
           
            {lyrics && <div className="admin-lyrics-songs">
                {lyrics.map((song) =>(
                    <div className="admin-lyrics-songitem" key={song._id}>
                        <div className="admin-lyrics-song-title">{song.title}</div>
                        <button className="admin-lyrics-song-button"
                                type="button" 
                                onClick={() => handleUpdateMode(song._id)}>Update</button>
                        <button className="admin-lyrics-song-button"
                                type="button"
                                onClick={() => handleDeleteSong(song._id)}>Delete</button>
                        

                    </div>))}
                <div className="admin-lyrics-additem">
                    <button className="admin-lyrics-add-button" 
                            type="button"
                            onClick={handleAddMode}>Add a new song</button>
                </div>
            </div>}

            

            
            <form onSubmit={handleSubmitLyrics} id="editLyrics" className="admin-editlyricsform">
                    
                <label htmlFor="title">Song name</label>
                <input type="text" name="title" id="ltitle" defaultValue={updateSong.title} />
                
                <label htmlFor="description">Description</label>
                <textarea name="description" id="ldescription" rows="5" cols="33" defaultValue={updateSong.description} />
                
                <label htmlFor="lyrics-en">Write the lyrics, line by line</label>
                <textarea name="lyrics-en" id ="llyrics-en" rows="50" cols="33" defaultValue={updateSong.lyrics_en}/>


                <button type="submit">{modeUpdate ?<span>Update</span> : <span>Add</span>}</button>
                
            </form>
            

        </section>
    )
}

export default Lyrics