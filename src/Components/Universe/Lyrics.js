import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'
import "./Lyrics.css"
 

const Lyrics = () => {
    const [lyrics, setLyrics] = useState(null)
    const [song, setSong] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [lyricsSection, setLyricsSection] = useState(false)


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

    //Display the lyrics object in the console (Debug)
    /*
    useEffect( () => {
        console.log("LYRICS OBJECT :", lyrics)
    }, [lyrics])
    */

    
    //Change the song displayed on screen
    const handleDisplayLyrics = (song) => {
        setLyricsSection(true)
        setSong(song)
        displayLyricsSection(true, song)
    }

    //Manage the Lyrics section on screen and the effects
    const displayLyricsSection = (active, currentSong=null) => {

        console.log("UPDATED : ", document.getElementById("universe-song"))

        if(active){
            if(document.getElementById("universe-song") == null){
                console.log("NULL")
            }
            else
            {
                document.getElementById("universe-song").classList.remove("us-deleteitem");
                document.getElementById("universe-song").classList.add("us-newitem");
                document.getElementById("universe-song-button-close").classList.remove("disappear-animation");
                /*if(document.getElementById("universe-song-button-close").classList.contains("disappear-animation")){
                    //document.getElementById("universe-song-button-close").classList.remove("disappear-animation");
                }*/
                
                const heightValue = currentSong.lyrics_en.length * 20;
                console.log(heightValue, "px");

                /*const setHeight = () => {
                    document.getElementById("universe-song").style.maxHeight = `${heightValue+200}px`;
                }
            
                window.requestAnimationFrame(setHeight)*/
            }
        }
        else{
            //setLyricsSection(false)
            document.getElementById("universe-song").classList.remove("us-newitem");
            document.getElementById("universe-song").classList.add("us-deleteitem");
            document.getElementById("universe-song-button-close").classList.add("disappear-animation");

            /*const setHeight = () => {
                document.getElementById("universe-song").style.maxHeight = `0px`;
            }*/

        }
        
        
    }

    return (
        <>
        {loading && <div>A moment please ....</div>}
        {error && <div>Problem fetching datas with server</div>}   

        <div className="lyrics-container">
        
            {lyricsSection && <div id="universe-song" className="universe-song us-newitem">
                <div className="universe-song-content">
                <div className="universe-song-top-section">
                <h5 className="universe-song-top-section-title">{song.title}</h5>
                <button id="universe-song-button-close"
                        className="universe-song-button-close"
                        onClick={ () => displayLyricsSection(false)}>X</button>
                <div className='universe-song-top-section-line'></div>
                </div>
                
                <div className="universe-song-description">
                    
                    {song.description}
                </div>
                <div className="universe-song-lyrics">
                    <h5>Lyrics</h5>
                    {song.lyrics_en.map( (sentence, index) => (<div key={index} className="universe-song-lyrics-sentence">{sentence}</div>))}
                </div>
                </div>
            </div>}
        
        

        {
        //List of songs that the user can select to see the lyrics
        lyrics && <ul className="universe-songs-list">
            {lyrics.map( (song, index) => {
                //console.log(song)
                return(
                    <li key={`${index}+${song.title}`} className="universe-songs-list-item">
                        <button onClick={() => handleDisplayLyrics(song)}
                                className="universe-songs-list-item-button"
                                role="menuitem">{song.title}
                        </button>
                    </li>
                )
            })}
        </ul>}
        
        </div>
        </>
    )
}

export default Lyrics