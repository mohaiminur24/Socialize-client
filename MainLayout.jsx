import React from 'react';
import Header from './src/Components/ReuseableComponents/Header';
import { Outlet } from 'react-router-dom';
import Footer from './src/Components/ReuseableComponents/Footer';

const MainLayout = () => {
    return (
        <div className='w-full h-auto'>
            <Header/>
            <div style={{minHeight:'200px'}}><Outlet/></div>
            <Footer/>  
        </div>
    );
};

export default MainLayout;