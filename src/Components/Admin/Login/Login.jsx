import React from 'react'
import { useLogin } from "./LoginHooks";

const Login = () => {
    const { errMsg, handleLogin, handleChangePwd, handleChangeUsr, enableSubmit, usr } = useLogin();


    return (
        <div>
            <div className="admin-container">
            <form className="admin-login" onSubmit={handleLogin} data-testid="login-form">
                {errMsg && <div className="admin-login-error" datatest-id="error">{errMsg}</div>}
                <label htmlFor="username">Username:</label>
                <input  type="text" 
                        name="username" 
                        id="username" 
                        autoComplete="off" 
                        defaultValue={usr}
                        data-testid="usr"
                        onChange={handleChangeUsr}
                        required 
                        />

                <label htmlFor="pwd">Password:</label>
                <input  type="password" 
                        name="pwd" 
                        id="pwd" 
                        autoComplete="new-password" 
                        data-testid="pwd"
                        onChange={handleChangePwd}
                        required />
                <button type="submit" data-testid="login-btn" disabled={!enableSubmit}>Log in</button>
            </form>
            </div>
        </div>
    )
}

export default Login