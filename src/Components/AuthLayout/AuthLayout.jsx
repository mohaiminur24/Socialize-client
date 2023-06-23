import React, { createContext, useState } from 'react';

export const Authcontext = createContext(null);

const AuthLayout = ({children}) => {
    const [user, setUser] = useState(null);
    const AuthValue = {
        user,
    };






    return (
        <Authcontext.Provider value={AuthValue}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthLayout;