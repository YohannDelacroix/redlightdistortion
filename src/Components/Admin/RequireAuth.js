import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    useEffect( () => {
        console.log("reqAuth : ", auth?.accessToken)
    }, [])

    return(
        auth?.accessToken
            ? <Outlet />
            : <Navigate to="/login" state={{from: location}} replace />
    )
}

export default RequireAuth;