import React from 'react'
import {DEL_ACTION} from './deleteActions';


const DeleteConfirmation = ({dispatchDel, delName}) => {

    const handleYes = () => {
        dispatchDel({type: DEL_ACTION.AUTHORIZATION, payload: true});
        dispatchDel({type: DEL_ACTION.CONFIRMATION, payload: false});
    }

    const handleNo = () => {
        dispatchDel({type: DEL_ACTION.AUTHORIZATION, payload: false});
        dispatchDel({type: DEL_ACTION.CONFIRMATION, payload: false});
    }


    return (
        <div className="admin-delete-confirmation">
            <p className="admin-delete-confirmation-buttons">Delete {delName} ?</p>
            <div className="admin-delete-confirmation-buttons">
                <button className="admin-delete-confirmation-button" onClick={handleYes}>Yes</button>
                <button className="admin-delete-confirmation-button" onClick={handleNo}>No</button>
            </div>
            
        </div>
    )
}

export default DeleteConfirmation;