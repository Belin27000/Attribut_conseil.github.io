import React from 'react';
import Header from '@/Layouts/Header/Header.js';
import { Outlet } from 'react-router-dom';

import Footer from './Footer/Footer.js';
import ScrollToTop from '../Components/Button/ScrollButton/ScrollToTop.js';


const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
                <ScrollToTop />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;