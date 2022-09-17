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
    


    //Get the datas from the server
    useEffect( () => {
        const getData = async () => {
            console.log("ooo")
            try{
                
                const response = await axios.get('http://localhost:5050/newsletter')

                setNewsletter(response.data)
                setError(null)

            } 
            catch(err){
                setError(err.message)
                setNewsletter(null)
            }
            finally{
                setLoading(false)
            }
        }

        getData();
    }, []);


    //When the admin press the button "Archive" , the server update the list and remove the new subscriber from the list displayed on screen
    const handleArchive = (person) => (e) => {
        console.log(person)
        axios.post('http://localhost:5050/newsletter/archived', person).then((response) => {
            console.log(response.status)
            console.log(response.data)
        })
    }

    //When the admin press the button "Delete", the server remove the user from the list
    const handleDelete = (person) => (e) => {
        console.log(person)
        axios.post('http://localhost:5050/newsletter/deleted', person).then((response) => {
            console.log(response.status)
            console.log(response.data)
        })
    }

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

                <div>
                    {
                        news && news.map( (data, index) => {
                            if(data.seen == false){
                                return (
                                    <div className="admin-new-subscriber" key={index}>
                                    <span>{data.name}</span>
                                    <span>{data.city}</span>
                                    <span>{data.email}</span>
                                    <button onClick={handleArchive(data)}>Archive</button>               
                                    </div>
                                )
                            }
                            
                        })    
                    }
                </div>
                
            </div>


            <div>
                <h1>Subscribers</h1>
                {
                    loading && <div>A moment please ...</div>
                }

                {
                    error && (<div>
                        {`Problem fetching datas - ${error}`}
                    </div>)
                }

                <div>
                    {
                        news && news.map( (data, index) => {
                            
                                return (
                                    <div className="admin-new-subscriber" key={index}>
                                    <span>{data.name}</span>
                                    <span>{data.city}</span>
                                    <span>{data.email}</span>
                                    <button onClick={handleDelete(data)}>Delete</button>               
                                    </div>
                                )
                        })    
                    }
                </div>
                
            </div>
        </div> 
        <Footer />
    </div>);
}