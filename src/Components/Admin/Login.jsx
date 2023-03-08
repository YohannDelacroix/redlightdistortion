import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "../../api/axios";

const Login = () => {

    const { setAuth } =  useAuth();
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

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
  

  return (
    <div>
        <Header />
        
        <div className="admin-container">
          <form className="admin-login" onSubmit={handleLogin} data-testid="login-form">
              {errMsg && <div className="admin-login-error" datatest-id="error">{errMsg}</div>}
              <label htmlFor="username">Username:</label>
              <input  type="text" 
                      name="username" 
                      id="username" 
                      autoComplete="off" 
                      defaultValue="admin"
                      data-testid="usr"
                      required 
                       />

              <label htmlFor="pwd">Password:</label>
              <input  type="password" 
                      name="pwd" 
                      id="pwd" 
                      autoComplete="new-password" 
                      data-testid="pwd"
                      required />
              <button type="submit" data-testid="login-btn">Log in</button>
          </form>
        </div>
        <Footer />
    </div>
  )
}

export default Login