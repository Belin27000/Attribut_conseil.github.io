import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Vae from '../Vae/Vae.js';
// import CoDev from '../CoDev/CoDev.js';
import About from '../Apropos/About.js';
import Layout from '@/Layouts/Layout.js';
import Home from '@/Pages/Acceuil/Home.js';
import Bilan from '../BilanDeComp/Bilan.js';
import Contact from '../Contact/Contact.js';
import FingJob from '../FindJob/FingJob.js';
import PsyWork from '../PsyWork/PsyWork.js';
import Coaching from '../Coaching/Coaching.js';
import IngeTraining from '../IngeTraining/IngeTraining.js';
import Outplacement from '../Outplacement/Outplacement.js';
import YouthGuidance from '../youthGuidance/YouthGuidance.js';
import TrainingTrainer from '../TrainingTrainer/TrainingTrainer.js';
import PracticesAnalyse from '../PracticesAnalyse/PracticesAnalyse.js';
import ExternRhManagment from '../ExternRhManagment/ExternRhManagment.js';
import CareerConsult from '../CareerManagementConsultant/CareerConsultV2.js';
import ProfessionalMeeting from '../ProfessionalMeeting/ProfessionalMeeting.js';
import ExternTrainManagement from '../ExternTrainManagement/ExternTrainManagement.js';
import BusinessCreationTraining from '../BusinessCreationTraining/BusinessCreationTraining.js';
// import BusinessCreationTraining2 from '../BusinessCreationTraining/BusinessCreationTraining2.js';

import PageNotFound from '../404/PageNotFound.js';

//SEO
import Avon from '../SEO/Avon.js';
import Melun from '../SEO/Melun.js';
import Provins from '../SEO/Provins.js';
import BcCPF from '../SEO/BcCPF/BcCPF.js';
import BcApec from '../SEO/BcApec/BcApec.js';
import BcReco from '../SEO/BcReco/BcReco.js';
import MontereauFy from '../SEO/MontereauFy.js';
import BCinLine from '../SEO/BCinLine/BCinLine.js';
import LayoutAdvice from '../../Layouts/LayoutAdvice.js';
import Fontainebleau from '../SEO/BcBleau/Fontainebleau.js';
import LandingPage from '../SEO/LandingPage/LandingPage.js';

//Blog
import Blog from '../Blog/Blog.js';
import JobInterview from '../Advice/JobInterview.js';
import Hyperchoice from '../Advice/hyperchoice/hyperchoice.js';
import Motivation from '../Advice/Motivation/Motivation.js';
import CareerView from '../Advice/CareerView/CareerView.js';
import FindYourWay from '../Advice/FindYourWay/FindYourWay.js';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/fr/home" element={<Navigate to="/home" />} />
                <Route path="/temoignages" element={<Navigate to="/about" />} />
                <Route path="/qui-sommes-nous" element={<Navigate to="/about" />} />
                <Route path='/bilan-de-competences' element={<Navigate to="/bilan-de-competence" />} />


                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path='/vae' element={<Vae />} />
                <Route path="/coaching" element={<Coaching />} />
                <Route path="/outplacement" element={<Outplacement />} />
                <Route path='/bilan-de-competence' element={<Bilan />} />
                <Route path="/psychologie_du_travail" element={<PsyWork />} />
                <Route path="/ingenierie_formation" element={<IngeTraining />} />
                <Route path="/orientation_des_jeunes" element={<YouthGuidance />} />
                <Route path="/gestion_RH_externalisee" element={<ExternRhManagment />} />
                <Route path="/entretien_professionnel" element={<ProfessionalMeeting />} />
                <Route path="/accompagnement_a_la_recherche_emploi" element={<FingJob />} />
                <Route path="/groupe_analyse_de_pratiques" element={<PracticesAnalyse />} />
                <Route path="/formation_metier_formateur_adultes" element={<TrainingTrainer />} />
                <Route path="/gestion_Formation_externalisee" element={<ExternTrainManagement />} />
                <Route path="/formation_creation_entreprise" element={<BusinessCreationTraining />} />
                <Route path="/formation_metier_consultant_en_gestion_de_carrieres" element={<CareerConsult />} />

                {/* <Route path="/formation_co-developpement" element={<CoDev />} /> */}
                {/* <Route path="/formation_creation_entreprise" element={<BusinessCreationTraining2 />} /> */}

                <Route path="/contact" element={<Contact />} />

                {/* PAGES - SEO */}
                <Route path="/bilan-de-competence/Landing-Page" element={<LandingPage />} />
                <Route path="/bilan-de-competence/bilan-de-competence-avon" element={<Avon />} />
                <Route path="/bilan-de-competence/bilan-de-competence-CPF" element={<BcCPF />} />
                <Route path="/bilan-de-competence/bilan-de-competence-Apec" element={<BcApec />} />
                <Route path="/bilan-de-competence/bilan-de-competence-melun" element={<Melun />} />
                <Route path="/bilan-de-competence/bilan-de-competence-provins" element={<Provins />} />
                <Route path="/bilan-de-competence/bilan-de-competence-en-ligne" element={<BCinLine />} />
                <Route path="/bilan-de-competence/bilan-de-competence-reconversion" element={<BcReco />} />
                <Route path="/bilan-de-competence/bilan-de-competence-fontainebleau" element={<Fontainebleau />} />
                <Route path="/bilan-de-competence/bilan-de-competence-montereau-fault-yonne" element={<MontereauFy />} />

                {/* PAGES - BLOG */}
                <Route path="/blog" element={<Blog />} />


                <Route path='*' element={<PageNotFound />} />

            </Route>
            <Route element={<LayoutAdvice />}>
                <Route path="/blog/Motivation_vs_amotivation" element={<Motivation />} />
                <Route path="/blog/Souffrez_vous_de_l'hyperchoix" element={<Hyperchoice />} />
                <Route path="/blog/A_chacun_sa_question_qui_tue_en_entretien_d_embauche" element={<JobInterview />} />
                <Route path="/blog/visualiser_votre_carriere_ideale_pour_une_reconversation_reussie" element={<CareerView />} />
                <Route path="/blog/Trouver_sa_Voie" element={<FindYourWay />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;