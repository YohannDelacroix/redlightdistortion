import React, { useEffect, useState } from 'react'


const PressKit = () => {
    const [pressKit, setPressKit] = useState(null);

    //Require PDF from database
    useEffect( () => {
        try{
            const pdfFile = require('../../Assets/DossierREDLIGHTDISTORTION-1.pdf');
            setPressKit(pdfFile);
            console.log(pdfFile);
        }
        catch(err){
            console.log("File not found")
        }
    }, [])


    //Add a new press kit
    const handleSubmitPressKit = (e) => {
        e.preventDefault();
        let file = document.getElementById('file-selector').files[0];
        console.log(file);
        
        //Send to database
    }


    return (
        <section>
            <h1>Press Kit</h1>
            {pressKit ? <div>
                <a href={pressKit} target="_blank" rel="noreferrer"><button>Current Press Kit</button></a>
            </div> : <span>No presskit uploaded</span>}

            <h3>Update Press Kit</h3>
            <form className="admin-presskit-form" onSubmit={handleSubmitPressKit}>
                <input type="file" id="file-selector" name="fileinput" accept=".pdf" required />
                <button type="submit">Import</button>
            </form>
           
        </section>
  )
}

export default PressKit