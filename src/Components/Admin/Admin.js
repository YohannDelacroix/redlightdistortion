import "./Admin.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Tour from './Tour'
import Lyrics from "./Lyrics";
import TitleComponent from '../TitleComponent/TitleComponent'


export default function Admin(){
    const DISPLAY_NONE = 0;
    const DISPLAY_TOUR = 1;
    const DISPLAY_LYRICS = 2;
    const DISPLAY_NEWS = 3;

    const [display, setDisplay] = useState(DISPLAY_NONE);
    const [access, setAccess] = useState(false);

    //Apply a class on the button selected
    const buttonFocus = (id) => {
        let buttons = document.querySelectorAll('.admin-menu-choice > button');
        for(let button of buttons){
            if(button.id === id.toString()){
                console.log(button);
                button.classList.add("admin-menu-choice-button-focus");
            }
            else{
                console.log(button);
                button.classList.remove("admin-menu-choice-button-focus");
            }
        }
    }

    const handleDisplayTour = () => {
        setDisplay(DISPLAY_TOUR);
        buttonFocus(DISPLAY_TOUR);
    }

    const handleDisplayLyrics = () => {
        setDisplay(DISPLAY_LYRICS);
        buttonFocus(DISPLAY_LYRICS);
    }

    const handleDisplayNews = () => {
        setDisplay(DISPLAY_NEWS);
        buttonFocus(DISPLAY_NEWS);
    }

    const handleDisplayNone = () => {
        setDisplay(DISPLAY_NONE);
        buttonFocus(DISPLAY_NONE);
    }

    const handleLogin = (e) => {
        //If password match
        e.preventDefault();
        let pwd = e.target.pwd.value;
        let username = e.target.username.value;
        console.log(username, pwd)
        
        setAccess(true);
    }


    return (<div>
        <Header />
        <div className="admin-container">

        {!access && <form className="admin-login" onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" autoComplete="off" required />

            <label htmlFor="pwd">Password:</label>
            <input type="password" name="pwd" id="pwd" autoComplete="off" required />
            <button type="submit">Log in</button>
        </form>}
        

        {access && <>
            
            <menu className="admin-menu-choices">
            <li className="admin-menu-choice">
                <button id={DISPLAY_TOUR} onClick={handleDisplayTour}>
                    <TitleComponent titleContent="TOUR" />
                </button>
            </li>
            <li className="admin-menu-choice">
                <button id={DISPLAY_LYRICS} onClick={handleDisplayLyrics}>
                    <TitleComponent titleContent="LYRICS" />
                </button>
            </li>
            <li className="admin-menu-choice">
                <button id={DISPLAY_NEWS} onClick={handleDisplayNews}>
                    <TitleComponent titleContent="NEWS" />
                </button>
            </li>
        </menu>


        {display === DISPLAY_TOUR && 
            <div className="admin-view">
                <button className="admin-close-button" onClick={handleDisplayNone}>X</button>
                <Tour />
            </div>}


        {display === DISPLAY_LYRICS && 
        <div className="admin-view">
            <button className="admin-close-button" onClick={handleDisplayNone}>X</button>
            <Lyrics />
        </div>}

        {display === DISPLAY_NEWS && 
        <div className="admin-view">
            <button className="admin-close-button" onClick={handleDisplayNone}>X</button>
            <h1>News</h1>
        </div>}

        </>}
        
        
            
        </div> 
        <Footer />
    </div>);
}