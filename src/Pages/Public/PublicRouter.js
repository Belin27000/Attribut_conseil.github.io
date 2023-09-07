import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@/Pages/Acceuil/Home.js';
import Layout from '@/Layouts/Layout.js';
import ComingSoon from '@/Pages/ComingSoon/ComingSoon.js';
import About from '../Apropos/About.js';


const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/ComingSoon" element={<ComingSoon />} />

            </Route>
        </Routes>
    );
};

export default PublicRouter;