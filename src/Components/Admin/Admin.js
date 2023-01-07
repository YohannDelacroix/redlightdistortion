import "./Admin.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
//import { Axios } from "axios";
import newsletter from "./../../Datas/newsletter.json";
import axios from "axios";
import { Link } from 'react-router-dom';
import Subscribers from './Subscribers';
import Tour from './Tour'
import News from './News'
import Lyrics from "./Lyrics";
import TitleComponent from '../TitleComponent/TitleComponent'


export default function Admin(){
    const DISPLAY_NONE = 0;
    const DISPLAY_TOUR = 1;
    const DISPLAY_LYRICS = 2;

    const [display, setDisplay] = useState(DISPLAY_NONE);

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

    const handleDisplayNone = () => {
        setDisplay(DISPLAY_NONE);
        buttonFocus(DISPLAY_NONE);
    }



    return (<div>
        <Header />
        <div className="admin-container">
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
        </menu>


        {display === DISPLAY_TOUR && <Tour />}
        {display === DISPLAY_LYRICS && <Lyrics />}
            
        </div> 
        <Footer />
    </div>);
}