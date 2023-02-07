import React from 'react';
import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        console.log("REFRESHING")
        try{
            const response = await axios.get('/refresh', {
                withCredentials: true
            });

            setAuth(prev => {
                console.log(JSON.stringify(prev));
                console.log(response.data.accessToken)
                return {...prev, accessToken: response.data.accessToken}
            })
    
            return response.data.accessToken;
        }catch(err){
            console.log("ERROR refresh() ", err.message)
        }
    }

    return refresh;
}

export default useRefreshToken;