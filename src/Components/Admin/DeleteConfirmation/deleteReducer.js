import {DEL_ACTION} from './deleteActions';

export const deleteConfirmationReducer = (del, action) => {
    switch(action.type){
        case DEL_ACTION.AUTHORIZATION:
            return {...del, deleteAuthorization: action.payload};
        case DEL_ACTION.CONFIRMATION:
            return {...del, deleteConfirmation: action.payload};
        case DEL_ACTION.SET_ID:
            return {...del, id: action.payload};
        case DEL_ACTION.SET_NAME:
            return {...del, name: action.payload};
        default: 
            throw new Error();
        }
}