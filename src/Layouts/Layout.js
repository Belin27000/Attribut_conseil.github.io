import React from 'react';
import Header from '@/Layouts/Header/Header.js';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer.js';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb.js';
import ScrollToTop from '../Components/Button/ScrollButton/ScrollToTop.js';
import Canonical from '../Components/Meta/Canonical.js';
import StickyButton from '../Components/Button/ContactButtonSticky/StickyButton.js';


const Layout = () => {

    return (
        <div className='Layout'>
            <Header />
            <Canonical />
            <Breadcrumb />
            <main>
                <Outlet />
                <ScrollToTop />
                <StickyButton />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;