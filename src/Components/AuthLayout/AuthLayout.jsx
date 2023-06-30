import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../FirebaseConfig/Firebaseconfig';

export const Authcontext = createContext(null);
const auth = getAuth(app);

const AuthLayout = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handlecreatenewuser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const handleloginuser = (email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    };

    const logoutuser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const AuthValue = {
        user,
        handlecreatenewuser,
        loading,
        setLoading,
        handleloginuser,
        logoutuser
    };

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser);
            setLoading(false);
        });
        return ()=>{
            return unsuscribe;
        }
    },[])






    return (
        <Authcontext.Provider value={AuthValue}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthLayout;