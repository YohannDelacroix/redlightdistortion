import "./Admin.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { useEffect, useState } from "react";
import { Axios } from "axios";


import newsletter from "./../../Datas/newsletter.json";
import axios from "axios";


import { Link } from 'react-router-dom';

export default function Admin(){

    const [news, setNewsletter] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect( () => {
        const getData = async () => {
            console.log("ooo")
            try{
                
                const response = await axios.get('http://localhost:5050/newsletter')

                setNewsletter(response.data)
                console.log("News 0 : ", news)
                setError(null)

            } 
            catch(err){
                console.log("ERR: " , err.message)
                setError(err.message)
                setNewsletter(null)
            }
            finally{
                setLoading(false)
            }
        }

        getData();
        
        
    }, []);

    console.log("News Yg : ", news)
    
    return (<div>
        <Header />
        <div className="admin-container">
            <div>
                <h1>New Subscribers</h1>
                {
                    loading && <div>A moment please ...</div>
                }

                {
                    error && (<div>
                        {`Problem fetching datas - ${error}`}
                    </div>)
                }

                {
                    
                }
                <div>
                    {
                        news && news.map( (data, index) => {
                            if(data.seen == false){
                                return (
                                    <div className="admin-new-subscriber" key={index}>
                                    <span>{data.name}</span>
                                    <span>{data.city}</span>
                                    <span>{data.email}</span>
                                    <button>Archiver</button>               
                                    </div>
                                )
                            }
                            
                        })    
                    }
                </div>
                
            </div>
        </div> 
        <Footer />
    </div>);
}