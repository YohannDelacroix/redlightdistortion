import React, { useEffect } from 'react'
import { useState } from 'react'

const DeleteConfirmation = ({setDeleteAuthorization, setDeleteConfirmation}) => {

    const handleYes = () => {
        setDeleteAuthorization(true);
        setDeleteConfirmation(false);
    }

    const handleNo = () => {
        setDeleteAuthorization(false)
        setDeleteConfirmation(false);
    }

    return (
        <div className="admin-delete-confirmation">
            <p>Are you sure ?</p>
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
        </div>
    )
}

export default DeleteConfirmation