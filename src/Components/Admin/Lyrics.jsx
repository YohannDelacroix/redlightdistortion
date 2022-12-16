import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'

const Lyrics = () => {
    const [lyrics, setLyrics] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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
    }


    //When the admin choose to update a song
    const handleUpdateSong = (song) => {
        console.log("Not implemented yet ...\n", song)
    }

    //When the admin choose to delete a song
    const handleDeleteSong = (song) => {
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
                                onClick={() => handleUpdateSong(song)}>Update</button>
                        <button className="admin-lyrics-song-button"
                                type="button"
                                onClick={() => handleDeleteSong(song)}>Delete</button>

                    </div>))}
                <div className="admin-lyrics-additem">
                    <button className="admin-lyrics-add-button" type="button">Add a new song</button>
                </div>
            </div>}

            

            
            <form onSubmit={handleSubmitLyrics}>
                    <div className="admin-lyrics-form-name">
                        <label htmlFor="title">Song name</label>
                        <input type="text" name="title" />
                    </div>
                    
                    <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" rows="10" cols="33" />
                    </div>
                    
                    <div>
                    <label htmlFor="lyrics-en">Write the lyrics, line by line</label>
                    <textarea name="lyrics-en" rows="10" cols="33" />
                    </div>

                    <button type="submit">Submit</button>
            </form>
            

        </section>
    )
}

export default Lyrics