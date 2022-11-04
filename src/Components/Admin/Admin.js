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


    const [dataTour, setDataTour] = useState(null);
    const [errorTour, setErrorTour] = useState(null);
    const [loadingTour, setLoadingTour] = useState(true);
    


    //Get the datas from the server
    useEffect( () => {

        //Get the newsletters's subscribers list
        const getSubscribers = async () => {
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
        getSubscribers();


        const getTourDates = async () => {
            try{ 
                const response = await axios.get('http://localhost:5050/tour')
                setDataTour(response.data)
                setErrorTour(null)
            } 
            catch(err){
                setErrorTour(err.message)
                setDataTour(null)
            }
            finally{
                setLoadingTour(false)
            }
        }

        getTourDates();
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
            <h1>Subscribers</h1>
            <div className="admin-subscribers-container">
            <div>
                <h3>New Subscribers</h3>
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
                                    <div className="admin-subscriber" key={index}>
                                        <div className="admin-subscriber-elem">{data.name}</div>
                                        <div className="admin-subscriber-elem">{data.city}</div>
                                        <div className="admin-subscriber-elem">{data.email}</div>
                                        <div className="admin-subscriber-elem  admin-block-button"><button onClick={handleArchive(data)}>Archive</button></div>         
                                    </div>
                                )
                            }
                            
                        })    
                    }
                </div>
                
            </div>


            <div>
                <h3>All subscribers</h3>
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
                                    <div className="admin-subscriber" key={index}>
                                    <div className="admin-subscriber-elem">{data.name}</div>
                                    <div className="admin-subscriber-elem">{data.city}</div>
                                    <div className="admin-subscriber-elem">{data.email}</div>
                                    <div className="admin-subscriber-elem  admin-block-button"><button onClick={handleDelete(data)}>Delete</button></div>               
                                    </div>
                                )
                        })    
                    }
                </div>
                
            </div>
            </div>
            <div>
                    <h1>Tour Dates</h1>

                    {
                        loadingTour && <div>A moment please ...</div>
                    }

                    {
                        errorTour && (<div>
                            {`Problem fetching datas - ${error}`}
                        </div>)
                    }

                    <div>
                    {
                        dataTour && dataTour.map( (date,index) => {
                            return(
                                <div className="admin-tour">
                                    <div className="admin-tour-element">
                                        <span>{date.day} {date.month} {date.year}</span>
                                    </div>
                                    
                                    <div className="admin-tour-element">
                                        <div>{date.place_geo}</div>
                                        <div>{date.place_name}</div>
                                    </div>
                                    
                                    <div className="admin-tour-element">
                                        <div>{date.ticket_link}</div>
                                        <div>{date.more_link}</div>
                                    </div>

                                    <div className="admin-tour-element admin-block-button">
                                        <button>Delete</button>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    </div>

                    <h2>Add a new Date</h2>
                    <div>
                        <form className="admin-form-tour">
                            <div className="admin-form-tour-field">
                                <div className="admin-form-tour-field-elem"><span>Select a date :</span></div>
                                <div className="admin-form-tour-field-elem">
                                    <input className="admin-form-tour-field-elem-field" 
                                            type="date" 
                                            id="date" 
                                            name="date" 
                                             
                                            min="2022-09-01" 
                                            max="2050-09-01" /></div>
                            </div>

                            <div className="admin-form-tour-field">
                            <div className="admin-form-tour-field-elem"><span>Type the place name :</span></div>
                            <div className="admin-form-tour-field-elem"><input className="admin-form-tour-field-elem-field" type="text" id="place_name" name="place_name" /></div>
                            </div>

                            <div className="admin-form-tour-field">
                            <div className="admin-form-tour-field-elem"><span>City :</span></div>
                            <div className="admin-form-tour-field-elem"><input className="admin-form-tour-field-elem-field" type="text" id="city" name="city" /></div>
                            </div>


                            <div className="admin-form-tour-field">
                            <div className="admin-form-tour-field-elem"><span>Ticket link :</span></div>
                            <div className="admin-form-tour-field-elem"><input className="admin-form-tour-field-elem-field" type="text" id="ticket_link" name="ticket_link" /></div>
                            </div>

                            <div className="admin-form-tour-field">
                            <div className="admin-form-tour-field-elem"><span>More Link :</span></div>
                            <div className="admin-form-tour-field-elem"><input className="admin-form-tour-field-elem-field" type="text" id="more_link" name="more_link" /></div>
                            </div>
                            
                            <div className="admin-form-tour-submit">
                                <button>Submit</button> 
                            </div>

                        </form>
                    </div>
                    
            </div>

            <div>
                <h1>News</h1>
                <h3>Add a news</h3>
                <div>
                    <form className="admin-form-tour">
                        <div className="admin-form-news-field">
                            <div className="admin-form-news-field-label"><span>Title :</span></div>
                            <div className="admin-form-news-field-input"><input className="admin-form-tour-field-elem-field" type="text" id="news_name" name="news_name" /></div>
                        </div>
                        <div className="admin-form-news-field">
                            <div className="admin-form-news-field-label"></div>
                            <div className="admin-form-news-field-input"><textarea className="admin-form-tour-field-elem-field" rows="20" id="news_content" name="news_content" /></div>
                        </div>

                        <div className="admin-form-news-field">
                            <div className="admin-form-news-field-label">Select a picture : </div>
                            <div className="admin-form-news-field-input"><input className="admin-form-tour-field-elem-field" type="file" accept=".jpg, .png" id="news_image" name="news_image" /></div>

                        </div>

                        <div className="admin-form-tour-submit">
                                <button>Submit</button> 
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        <Footer />
    </div>);
}