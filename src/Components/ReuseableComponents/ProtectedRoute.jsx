import React, { useContext } from 'react';
import { Authcontext } from '../AuthLayout/AuthLayout';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user,loading} = useContext(Authcontext);
    if(loading){
        return;
    };
    if(user){
        return children;
    }
    return <Navigate to="/"/>
};

export default ProtectedRoute;