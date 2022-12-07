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



export default function Admin(){

    return (<div>
        <Header />
        <div className="admin-container">
            {
                //<Subscribers />
            }           
            <Tour />
            {
                /*
                    <News />
                */
            }
            
        </div> 
        <Footer />
    </div>);
}