import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@/Pages/Acceuil/Home.js';
import Layout from '@/Layouts/Layout.js';
import ComingSoon from '@/Pages/ComingSoon/ComingSoon.js';
import About from '../Apropos/About.js';
import Vae from '../Vae/Vae.js';
import Bilan from '../BilanDeCompétences/Bilan.js';
import FingJob from '../FindJob/FingJob.js';
import PsyWork from '../PsyWork/PsyWork.js';
import Outplacement from '../Outplacement/Outplacement.js';
import YouthGuidance from '../youthGuidance/YouthGuidance.js';
import Coaching from '../Coaching/Coaching.js';


const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/bilan-de-competence' element={<Bilan />} />
                <Route path='/vae' element={<Vae />} />
                <Route path="/orientation_des_jeunes" element={<YouthGuidance />} />
                <Route path="/outplacement" element={<Outplacement />} />
                <Route path="/accompagnement_a_la_recherche_d'emploi" element={<FingJob />} />
                <Route path="/coaching" element={<Coaching />} />
                <Route path="/psychologie_du_travail" element={<PsyWork />} />

                <Route path="/ComingSoon" element={<ComingSoon />} />

            </Route>
        </Routes>
    );
};

export default PublicRouter;