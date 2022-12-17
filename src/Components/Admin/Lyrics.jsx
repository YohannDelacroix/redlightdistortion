import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'

const Lyrics = () => {
    const [lyrics, setLyrics] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [updateSong, setUpdateSong] = useState({title:"",description:"",lyrics_en:""})
    const [modeUpdate, setModeUpdate] = useState(false)

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


    //When t
    const handleSubmitLyrics = (e) => {
        e.preventDefault();
        //Separate each line in a table
        let lyrics = e.target['lyrics-en'].value
       
        let lyricsArray =  convertLyricsToArray(lyrics)
        console.log("lyrics array : " , lyricsArray)
        
        console.log("reverse : ", reverseLyricsToString(lyricsArray))


        if(!modeUpdate){ //If this is an addition, post to server

        }
        else{ //If this is an update, put to server

        }
    }


    //When the admin choose to update a song
    const handleUpdateMode = (song) => {
        const initialSong = {
            title: song.title,
            description: song.description,
            lyrics_en: reverseLyricsToString(song.lyrics_en)
        }
        setUpdateSong(initialSong)
        setModeUpdate(true)
        console.log("Not implemented yet ...\n", song)
    }

    //When the admin choose to delete a song
    const handleDeleteSong = (song) => {
        console.log("Not implemented yet ...\n" , song)
    }

    //When the admin validate the new song
    const handleAddSong = (song) => {
        console.log("Not implemented yet ...\n" , song)
    }

    //When the admin update an existing song
    const handleUpdateSong = (song) => {
        console.log("Not implemented yet ...\n" , song)
    }

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

    return (
        <section className="admin-lyrics-container">
            <h1>Lyrics</h1>
            {loading && <div>A moment please ....</div>}
            {error && <div>Problem fetching datas with server</div>}  

            {lyrics && <div className="admin-lyrics-songs">
                {lyrics.map((song) =>(
                    <div className="admin-lyrics-songitem" key={song.title}>
                        <div className="admin-lyrics-song-title">{song.title}</div>
                        <button className="admin-lyrics-song-button"
                                type="button" 
                                onClick={() => handleUpdateMode(song)}>Update</button>
                        <button className="admin-lyrics-song-button"
                                type="button"
                                onClick={() => handleDeleteSong(song)}>Delete</button>

                    </div>))}
                <div className="admin-lyrics-additem">
                    <button className="admin-lyrics-add-button" type="button">Add a new song</button>
                </div>
            </div>}

            

            
            <form onSubmit={handleSubmitLyrics} className="admin-editlyricsform">
                    
                <label htmlFor="title">Song name</label>
                <input type="text" name="title" defaultValue={updateSong.title} />
                
                <label htmlFor="description">Description</label>
                <textarea name="description" rows="5" cols="33" defaultValue={updateSong.description} />
                
                <label htmlFor="lyrics-en">Write the lyrics, line by line</label>
                <textarea name="lyrics-en" rows="50" cols="33" defaultValue={updateSong.lyrics_en}/>


                <button type="submit">{modeUpdate ?<span>Update</span> : <span>Add</span>}</button>
                
            </form>
            

        </section>
    )
}

export default Lyrics