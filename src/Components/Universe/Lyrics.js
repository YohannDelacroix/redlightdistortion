import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'
import Loading from '../Loading/Loading'
import "./Lyrics.css"
 

const Lyrics = () => {
    const emptySong = {title:"",description:[],lyrics_en:[]};

    const [lyrics, setLyrics] = useState();
    const [song, setSong] = useState(emptySong);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lyricsSection, setLyricsSection] = useState(false)
    const [stopResizing, setStopResizing] = useState(new AbortController());


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


        if(!setLyricsSection){
            document.getElementById("universe-song").style.maxHeight = `0px`;
            document.getElementById("universe-song").style.minHeight = `0px`;
        }
    },[setLyricsSection])

    
    //Change the song displayed on screen
    const handleDisplayLyrics = (song) => {
        console.log("okdakk")
        setLyricsSection(true)
        setSong(emptySong) //Allow the user to go back to the song he closed
        setSong(song)
        displayLyricsSection(true, song)
    }


    //Manage the Lyrics section on screen and the effects
    const displayLyricsSection = (active, currentSong=null) => {
        const elemUniverseSong = document.getElementById("universe-song");
        

        /* 
        
         Making the lyrics expanding at the perfect height 
  
        */

            //1 - Request the browser to play an animation on screen
            const triggerHeightAnimation = () => {
                const callSetHeight = () => {
                    setHeight(calcHeight());
                }
                window.requestAnimationFrame(callSetHeight)
            }

            //2 - Calcul the height of the universe-song div
            const calcHeight = () => {
                //Get the margins of a block
                const getMargins = (blockElem) => {
                    let style = blockElem.currentStyle || window.getComputedStyle(blockElem);
                    let marginTop = parseInt(style.marginTop, 10);
                    let marginBottom = parseInt(style.marginBottom, 10);
                    return marginTop + marginBottom;
                }

                //Height of the top section
                let universeSongTopSectionElem = document.getElementById
                ("universe-song-top-section");
                let heightTopSection = universeSongTopSectionElem.offsetHeight + getMargins(universeSongTopSectionElem);

                //Height of the description element
                let descriptionElement = document.getElementById("universe-song-description")
                let descriptionLength = 0;
                for(let child of descriptionElement.children){
                    descriptionLength += child.offsetHeight;
                }

                //Height of the lyrics title
                let universeSongLyricsTitleElem = document.getElementById
                ("universe-song-lyrics-title");
                let heightLyricsTitle = universeSongLyricsTitleElem.offsetHeight + getMargins(universeSongLyricsTitleElem);


                //Height of the lyrics lines
                let heightOneLyric = document.getElementsByClassName("universe-song-lyrics-sentence");
                let lyricsHeight = 0;
                for(let i = 0; i < heightOneLyric.length; i++){
                    lyricsHeight += heightOneLyric[i].offsetHeight;
                }

                //Total height
                const heightValue = lyricsHeight + descriptionLength + heightTopSection + heightLyricsTitle; 
                return heightValue;
            }

            //3 - Set the min and max height before the transition animation
            const setHeight = (heightValue) => {
                elemUniverseSong.style.maxHeight = `${heightValue}px`;
                elemUniverseSong.style.minHeight = `${heightValue}px`;
            }


        /*
            Resizing event
        */

            //Prevent to execute the function only one time after the end of resizing
            const afterResize = () => {
                triggerHeightAnimation();
            }

            let timeOutFunctionID;
            //Each time the event window.resize is triggered
            const resizeWindow = () => {
                clearTimeout(timeOutFunctionID);
                timeOutFunctionID = setTimeout(afterResize, 500);
            }

        

        /* 
            Display the lyrics section or close 
        */

            if(active){  //When opening a new lyric
                if(document.getElementById("universe-song") == null){
                    console.log("Error : universe-song undeclared = NULL")
                }
                else
                {
                    elemUniverseSong.classList.remove("us-deleteitem");
                    elemUniverseSong.classList.add("us-newitem");
                    document.getElementById("universe-song-button-close").classList.remove("disappear-animation");
                    
                    triggerHeightAnimation(); //Height transition animation
                    
                    window.addEventListener("resize", resizeWindow, stopResizing);
                }
            }
            else{ //When Closing the lyrics section
                setLyricsSection(false)
                elemUniverseSong.classList.remove("us-newitem");
                elemUniverseSong.classList.add("us-deleteitem");
                document.getElementById("universe-song-button-close").classList.add("disappear-animation");

                //Set the height to 0 and trigger an animation
                const setHeight = () => {
                    elemUniverseSong.style.maxHeight = `0px`;
                    elemUniverseSong.style.minHeight = `0px`;
                }
                window.requestAnimationFrame(setHeight);

                //Prevent the height to increase when the user resize the screen when there is no song on screen
                stopResizing.abort();
                setStopResizing(new AbortController());

                //Remove the class deleteitem to prevent the song list moving when screen is resized, 500 is the duration of the animation
                setTimeout( () => {
                    elemUniverseSong.classList.remove("us-deleteitem");
                }, 500);
            }
    }

    return (
        <>
        { loading && <Loading /> }
        {error && <div>Problem fetching datas with server</div>}   

        <div className="lyrics-container">
        
            <div id="universe-song" className="universe-song">
            <div className="universe-song-content" id="universe-song-content">
                <div className="universe-song-top-section" id="universe-song-top-section">
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
                    <h4 id="universe-song-lyrics-title">Lyrics</h4>
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