import React, { useContext } from 'react';
import Header from './src/Components/ReuseableComponents/Header';
import { Authcontext } from './src/Components/AuthLayout/AuthLayout';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './src/Components/ReuseableComponents/Footer';

const MainLayout = () => {
    const {user} = useContext(Authcontext);
    const nevigate = useNavigate();
    if(!user){
        return nevigate('/')
    };

    return (
        <div className='w-full h-auto'>
            <Header/>
            <div style={{minHeight:'200px'}}><Outlet/></div>
            <Footer/>  
        </div>
    );
};

export default MainLayout;