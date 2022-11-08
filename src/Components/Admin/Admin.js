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

    const [count, setCount] = useState(0);
    const increaseCount = () => setCount(count + 1);

    useEffect( () => {
        console.log("COUNTTTTTTTTTTTTTTTTTTTTTTTTT : ", count)
    }, [count])

    return (<div>
        <Header />
        <div className="admin-container">
            <Subscribers update={increaseCount} />
            <Tour />
            <News />
        </div> 
        <Footer />
    </div>);
}