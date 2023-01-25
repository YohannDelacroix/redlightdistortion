import axios from 'axios';
import React, { useEffect, useState } from 'react'


const PressKit = () => {
    const [pressKit, setPressKit] = useState(null);

    //Require PDF from database
    useEffect( () => {

        const getPressKit = async () => {
            try{
                let pdfFile = await axios.get("http://localhost:5050/pressKit", {responseType: 'blob'});
                
                if(pdfFile.data){
                    console.log("pdfFile loaded")
                    let objectURL = window.URL.createObjectURL(pdfFile.data);
                    setPressKit(objectURL);
                }
                else{
                    console.log("not found")
                }
            }
            catch(err){
                console.log(err.message)
            }
        }
        

        

        getPressKit();
    }, [])


    //Add a new press kit
    const handleSubmitPressKit = (e) => {
        e.preventDefault();
        let file = document.getElementById('file-selector').files[0];
        console.log(file);
        
        
    }


    return (
        <section>
            <h1>Press Kit</h1>
            {pressKit ? <div>
                <a href={pressKit} target="_blank" rel="noreferrer"><button>Current Press Kit</button></a>
            </div> : <span>No presskit uploaded</span>}

            <h3>Update Press Kit</h3>
            <form className="admin-presskit-form" onSubmit={handleSubmitPressKit}>
                <input type="file" id="file-selector" name="pressKit" accept=".pdf" required />
                <button type="submit">Import</button>
            </form>
           
        </section>
  )
}

export default PressKit