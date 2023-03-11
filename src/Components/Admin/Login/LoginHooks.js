import React from "react";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import axios from "../../../api/axios";
import { useEffect } from 'react';

export const useLogin = () => {
    const [usr, setUsr] = useState("admin");
    const [pwd, setPwd] = useState("");
    const [enableSubmit, setEnableSubmit] = useState(false);

    const { setAuth } =  useAuth();
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleChangeUsr = (e) => {
        setUsr(e.target.value);
    }

    const handleChangePwd = (e) => {
        setPwd(e.target.value);
    }

    useEffect( () => {
        setEnableSubmit(usr !== "" && pwd !== "")
    }, [usr, pwd])


    const handleLogin = async (e) => {
        console.log("handleLogin")
        let pwd = e.target.pwd.value;
        let username = e.target.username.value;

      
        if(!pwd || !username){
            console.log("Pwd or username undefined");
            return;
        }

        //If password match
        e.preventDefault();
        console.log(username, pwd)
        
        try{
            const response = await axios.post("/auth", {user: username, pwd: pwd}, { 
                headers: {'Content-type': 'application/json'},
                withCredentials: true
            })

            if(response.status === 200){
                let accessToken = response.data.accessToken;
                console.log("Serv ok Access Token: " , accessToken);
                navigate(from, {replace: true});
                setAuth({username, accessToken})
            }

        }catch(err){
            if(!err?.response){
                setErrMsg('No Server Response');
            }
            else if(err.response?.status === 400){
                setErrMsg('Missing Username or Password');
            }
            else if(err.response?.status === 401){
                setErrMsg('Wrong Username or Password');
            }
            else{
                setErrMsg('Login Failed');
            }
        }
    }

    return { errMsg, handleLogin, handleChangeUsr, handleChangePwd, enableSubmit, usr, pwd};
}