import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'
import "./Lyrics.css"
 

const Lyrics = () => {
    const emptySong = {title:"",description:[],lyrics_en:[]};

    const [lyrics, setLyrics] = useState();
    const [song, setSong] = useState(emptySong);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    //const [lyricsSection, setLyricsSection] = useState(false)


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
    document.getElementById("universe-song").style.maxHeight = `0px`;
    document.getElementById("universe-song").style.minHeight = `0px`;
    },[])


    //Display the lyrics object in the console (Debug)
    /*
    useEffect( () => {
        console.log("LYRICS OBJECT :", lyrics)
    }, [lyrics])*/
    

    
    //Change the song displayed on screen
    const handleDisplayLyrics = (song) => {
        //setLyricsSection(true)
        setSong(emptySong) //Allow the user to go back to the song he closed
        setSong(song)
        //displayLyricsSection(true, song)
    }

    //When the song changes, it change the size of the lyrics section on screen with transitions
    useEffect(() => {
        console.log("WORK ?")
        if(song !== emptySong){
            displayLyricsSection(true, song)
        }
    },[song])

    //Manage the Lyrics section on screen and the effects
    const displayLyricsSection = (active, currentSong=null) => {

        console.log("UPDATED : ", document.getElementById("universe-song"))
        const elemUniverseSong = document.getElementById("universe-song");
        const resizeLyrics = new AbortController();

        
        const afterResize = () => {
            console.log("After resize")
            triggerAnimation();
        }

        let timeOutFunctionID;
        const resizeWindow = () => {
            console.log("Resizing window");
            clearTimeout(timeOutFunctionID);
            timeOutFunctionID = setTimeout(afterResize, 500);
        }

        const setHeight = (heightValue) => {
            console.log("SET SET", heightValue)
            elemUniverseSong.style.maxHeight = `${heightValue}px`;
            elemUniverseSong.style.minHeight = `${heightValue}px`;
        }

        //Calcul the height of the universe-song div
        const calcHeight = () => {
            let descriptionElement = document.getElementById("universe-song-description")
            let descriptionLength = 0;
            for(let child of descriptionElement.children){
                descriptionLength += child.offsetHeight;
            }
            console.log("desc l : ", descriptionLength)
            console.log((currentSong.lyrics_en.length * 20), "lyrics")
            const heightValue = currentSong.lyrics_en.length * 20 + descriptionLength + 120;
            console.log("heightValue = ", heightValue, "px");
            return heightValue;
        }

        const triggerAnimation = () => {
            const callSetHeight = () => {
                setHeight(calcHeight());
            }
            window.requestAnimationFrame(callSetHeight)
        }

        if(active){
            if(document.getElementById("universe-song") == null){
                console.log("universe-song undeclared = NULL")
            }
            else
            {
                elemUniverseSong.classList.remove("us-deleteitem");
                elemUniverseSong.classList.add("us-newitem");
                document.getElementById("universe-song-button-close").classList.remove("disappear-animation");
                /*if(document.getElementById("universe-song-button-close").classList.contains("disappear-animation")){
                    //document.getElementById("universe-song-button-close").classList.remove("disappear-animation");
                }*/
                
            
                
                triggerAnimation();
                
                //window.addEventListener("resize", resizeWindow, resizeLyrics);
            }
        }
        else{
            //setLyricsSection(false)
            elemUniverseSong.classList.remove("us-newitem");
            elemUniverseSong.classList.add("us-deleteitem");
            document.getElementById("universe-song-button-close").classList.add("disappear-animation");

            const setHeight = () => {
                elemUniverseSong.style.maxHeight = `0px`;
                elemUniverseSong.style.minHeight = `0px`;
            }
            window.requestAnimationFrame(setHeight);

            //resizeLyrics.abort();
            //window.removeEventListener("resize", resizeWindow);
        }
    }

    return (
        <>
        {loading && <div>A moment please ....</div>}
        {error && <div>Problem fetching datas with server</div>}   

        <div className="lyrics-container">
        
            <div id="universe-song" className="universe-song">
            <div className="universe-song-content" id="universe-song-content">
                <div className="universe-song-top-section">
                <h5 className="universe-song-top-section-title">{song.title}</h5>
                <button id="universe-song-button-close"
                        className="universe-song-button-close"
                        onClick={ () => displayLyricsSection(false)}>X</button>
                <div className='universe-song-top-section-line'></div>
                </div>
                
                <div className="universe-song-description" id="universe-song-description">
                    
                    {song.description.map( (sentence, index) => (<div key={index}>{sentence}</div>))}
                </div>
                <div className="universe-song-lyrics">
                    <h4>Lyrics</h4>
                    {song.lyrics_en.map( (sentence, index) => (<div key={index} className="universe-song-lyrics-sentence">{sentence}</div>))}
                </div>
                </div>
            </div>
        
        

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