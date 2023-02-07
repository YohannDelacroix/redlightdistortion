import axios from "../../api/axios";
import { axiosPrivate } from "../../api/axios";
import React, { useEffect, useState, useContext } from 'react'
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useAuth from '../../Hooks/useAuth';
import { useNavigate, useLocation } from "react-router-dom";

const PressKit = () => {
    const [pressKit, setPressKit] = useState(null);
    const { auth } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();
    const navigate = useNavigate();

    //Require PDF from database
    useEffect( () => {
        const getPressKit = async () => {
            try{
                const pdfFile = await axios.get("/pressKit", {responseType: 'blob'});
                let objectURL = window.URL.createObjectURL(pdfFile.data);
                setPressKit(objectURL);
            }
            catch(err){
                console.log("ERROR : getPressKit()\n", err.message)
            }
        }

        getPressKit();
    }, [])


    //Add a new press kit
    const handleSubmitPressKit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        await axiosPrivate.post("/pressKit", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${auth.accessToken}`
            }
        }).then((res) => {
            console.log(res);
            let file = document.getElementById('file-selector').files[0];
            let objectURL = window.URL.createObjectURL(file);
            setPressKit(objectURL);

            //Reset form
            document.getElementById('pressKitForm').reset();
        }).catch((err) => {
            console.log(err);
            navigate('/login', {state: {from: location}, replace: true});
        })
    }


    return (
        <section>
            <h1>Press Kit</h1>
            {pressKit ? <div>
                <a href={pressKit} target="_blank" rel="noreferrer"><button>Current Press Kit</button></a>
            </div> : <span>No presskit uploaded</span>}

            <h3>Update Press Kit</h3>
            <form   className="admin-presskit-form"
                    id="pressKitForm"
                    onSubmit={handleSubmitPressKit}>
                <input  type="file" 
                        id="file-selector" 
                        name="pressKit" 
                        accept=".pdf" 
                        required />
                <button type="submit">Import</button>
            </form>
        </section>
  )
}

export default PressKit