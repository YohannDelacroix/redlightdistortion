import { useEffect, useState } from "react";
import axios from "axios";

export default function Subscribers(){
    const [news, setNewsletter] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(0);


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
        console.log("RENdER")
    },[update]);


    //When the admin press the button "Archive" , the server update the list and remove the new subscriber from the list displayed on screen
    const handleArchiveSubscriber = (person) => (e) => {
        console.log(person)
        axios.post('http://localhost:5050/newsletter/archived', person).then((response) => {
            console.log(response.status)
            console.log(response.data)
        })
        setUpdate(update+1);
    }

    //When the admin press the button "Delete", the server remove the user from the list
    const handleDeleteSubscriber = (person) => (e) => {
        console.log(person)
        axios.post('http://localhost:5050/newsletter/deleted', person).then((response) => {
            console.log(response.status)
            console.log(response.data)
        })
        setUpdate(update+1);
    }

    const refresh = () => {
        setUpdate(update+1);
    }

    return (<div>  
        <h1>Subscribers</h1>
        <button type="button" onClick={refresh}>Refresh</button>
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
                    /* New subscribers, the user can archive after he sees the new subscriber */
                    news && news.map( (data, index) => {
                        if(data.seen == false){
                            return (
                                <div className="admin-subscriber" key={index}>
                                    <div className="admin-subscriber-elem">{data.name}</div>
                                    <div className="admin-subscriber-elem">{data.city}</div>
                                    <div className="admin-subscriber-elem">{data.email}</div>
                                    <div className="admin-subscriber-elem  admin-block-button"><button onClick={handleArchiveSubscriber(data)}>Archive</button></div>         
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
                    /* View of all the subscribers */
                    news && news.map( (data, index) => {
                        
                            return (
                                <div className="admin-subscriber" key={index}>
                                <div className="admin-subscriber-elem">{data.name}</div>
                                <div className="admin-subscriber-elem">{data.city}</div>
                                <div className="admin-subscriber-elem">{data.email}</div>
                                <div className="admin-subscriber-elem  admin-block-button"><button onClick={handleDeleteSubscriber(data)}>Delete</button></div>               
                                </div>
                            )
                    })    
                }
            </div>
            
        </div>
        </div>
    </div>)
}