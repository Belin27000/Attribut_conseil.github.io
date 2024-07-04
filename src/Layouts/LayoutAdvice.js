import React from 'react';
import { Outlet } from 'react-router-dom';

import Breadcrumb from '../Components/Breadcrumb/Breadcrumb.js';
import ScrollToTop from '../Components/Button/ScrollButton/ScrollToTop.js';
import Canonical from '../Components/Meta/Canonical.js';
// import './layoutAdvice.scss';

const LayoutAdvice = () => {
    return (
        <div className='LayoutAdvice'>
            <Breadcrumb />
            <Canonical />
            <Outlet />
            <ScrollToTop />

            {/* <main>
                <Outlet />
                <ScrollToTop />
            </main> */}
        </div>
    );
};

export default LayoutAdvice;