import ScrollToTop from '../../Components/Button/ScrollButton/ScrollToTop.js';
import TelButton from '../../Components/Button/TelButton/TelButton.js';
import ContactButton from '../../Components/Button/ContactButton.js';
import Qualiopi from '@/Assets/Images/Logo_Qualiopi.png'
import Cpf from '@/Assets/Images/logo_CPF.webp'
import climb from '@/Assets/video/Grimpeur.mp4'
import Movie from '@/Components/Movie/Movie.js';
import Arc from '@/Assets/video/Tir_Arc.mp4';
import Tree from '@/Assets/video/Plante.mp4';
import LogoTree from '@/Assets/Images/Tree.png';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react';
import './seo.scss';
import Questions from '../../Components/Questions/Questions.js';
import GoogleWidget from '../../Components/Google/GoogleWidget/GoogleWidget.js';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';


const Provins = () => {
    const ville = 'Provins';
    const metaTitle = `Attribut Conseils - Bilan de compétences à ${ville}`
    const metaDescription = `Vous cherchez à réaliser votre bilan de compétence à ${ville}? Contactez-nous !`

    return (
        <section className='Seo'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />

            <h1><span>Votre</span><br /> BILAN DE COMPÉTENCES A <span className='Title city'>{ville}</span></h1>
            <p className='Seo_Yellow'>Vous cherchez à réaliser un bilan de compétences à {ville} ? Contactez notre cabinet spécialisé en Seine-et-Marne, retour rapide assuré !</p>
            <div className="Seo container-img">
                <img className='Tree' src={LogoTree} alt="Logo arbre Attribut conseils" />
            </div>
            <article className="Seo-article">
                <p>Le bilan de compétences, en identifiant vos potentiels et aspirations puis en les confrontant aux réalités du marché ou du contexte professionnel, est un outil puissant pour vous (re)positionner avec succès. </p>
                <p>En analysant dynamiquement votre parcours, il vise la réussite et des résultats tangibles, tout en renforçant la connaissance de soi et en élaborant un projet clair et un plan d'action défini. Vous bénéficiez d'un accompagnement par des consultants en gestion de carrière, qui vous aident à construire un projet professionnel adapté à vos aspirations. Attribut Conseils met à votre disposition son expertise pour vous aider à réussir et à vous épanouir professionnellement. </p>
                <p>
                    Notre équipe est disponible pour réaliser vos bilans de compétences en Île-de-France, notamment à Provins, en Seine-et-Marne.
                </p>
            </article>
            <article className="timeline right-container withMovie">
                <h2>Qui peut faire un bilan de compétences ?</h2>
                <div>
                    <p>ATTRIBUT CONSEILS, expert en gestion de carrière, propose des <b>bilans de compétences</b> pour tous profils, qu'ils soient du secteur public ou privé, et ce, quel que soit leur niveau, statut ou domaine d'activité. Dirigeant, cadre supérieur, technicien ou ouvrier, tous sont concernés, indépendamment de leur statut ou métier.
                    </p>
                    <Movie src={climb} />
                </div>
            </article>
            <article className="timeline right-container articleCertif">
                <h3>Le bilan de compétences pour les salariés et pour les demandeurs d'emploi</h3>
                <div className='articleCertif-container'>

                    <div className='articleCertif-container-text'>
                        <p>Votre compte CPF est crédité annuellement (en générale en avril de chaque année), car vous avez <b>cumulé des droits à la formation</b>. Le financement d'un <b>bilan de compétences</b> varie selon votre situation, statut et préférences. Pour ce faire, vous disposez de quatre options : utiliser vos droits CPF, le plan de développement des compétences de votre employeur, France Travail, ou un financement personnel. Vous pouvez réaliser le <b>bilan de compétences</b> pendant ou en dehors des heures de travail sans prévenir votre employeur.</p>

                        <p>Contactez nous pour connaitre vos droits:</p>
                    </div>
                    <div className="articleCertif-pic">
                        < img src={Qualiopi} alt="Logo Qualiopi" />
                        < img className='LogCpf' src={Cpf} alt="Logo Qualiopi" />
                    </div>
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline left-container">
                <h2>Pourquoi faire un bilan de compétences ?</h2>
                <p>Plusieurs motivations peuvent vous inciter à prendre un rendez-vous chez des consultants comme <b>Attribut Conseils</b> pour bénéficier d'un bilan de compétences. Cet outil efficace répond à divers objectifs de gestion de carrière.</p>
            </article>
            <article className="timeline left-container withMovie">
                <h3 className='text-centered'>L'évaluation de vos compétences pour un changement professionnel</h3>
                <div>
                    <p className='text-end'>Le bilan de compétences constitue un point de départ crucial lorsque vous envisagez une reconversion. À travers votre <b>vie professionnelle</b> ou vos activités personnelles, vous avez accumulé un ensemble de connaissances techniques et de qualités relationnelles essentielles pour votre vie en entreprise. Grâce à cette démarche, accompagnée de <b>tests de  d'orientation du bilan de compétences</b>, vous prenez conscience de vos véritables atouts, identifiez ceux qui seront bénéfiques pour la suite de votre carrière, ainsi que les compétences à acquérir pour atteindre vos objectifs..</p>

                    <Movie src={Arc} />
                </div>
            </article>
            <ContactButton text="Je demande mon bilan de compétences" />
            <article className="timeline right-container">
                <h3>La définition d'un projet de reconversion professionnelle pour retrouver du sens au travail</h3>
                <div>
                    <p>Envisagez-vous une reconversion professionnelle mais peinez-vous à <b>construire un plan d'évolution</b> précis ? Durant le bilan de compétences, votre consultant est là pour vous guider vers les secteurs en adéquation avec vos objectifs, mesurer les besoins en formation et à établir une stratégie par un plan d’action pour atteindre votre but.</p>
                </div>
            </article>
            <article className="timeline right-container">
                <h3>Travailler votre mobilité interne ou obtenir un poste à responsabilité dans votre entreprise</h3>
                <div>
                    <p>Le bilan de compétences s'adresse également à ceux qui aspirent à évoluer dans leur poste actuel. Nos consultants possèdent l'expertise requise pour transposer vos compétences et accroître vos perspectives de promotion. Ils vous accompagnent dans l'identification de vos atouts et de vos axes d'amélioration vis-à-vis des exigences des postes internes. À l'issue du <b>bilan de compétences</b>, vous serez prêt à saisir les opportunités de promotion offertes au sein de votre entreprise.</p>
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline left-container">
                <h3 className='text-end'>Améliorer votre profil pour les recruteurs</h3>
                <p className='text-end'>L'accomplissement d'un bilan de compétences est une expérience enrichissante et un atout majeur en recrutement. Mentionné dans votre CV, cet engagement démontre votre volonté de progresser et renforce votre crédibilité. Notre <b>cabinet de coaching Attribut Conseils</b>, offre un accompagnement personnalisé pour valoriser votre profil, que ce soit en retravaillant votre CV ou en perfectionnant votre lettre de motivation..</p>

            </article>
            <article className="timeline left-container">
                <h3 className='text-centered'>La création d'entreprise</h3>
                <div className='left-container video-flexRow'>

                    <p className='text-end'>Le bilan de compétences peut révéler un projet de création d’entreprise.  Grâce à un suivi personnalisé, vous approfondissez votre connaissance du profil entrepreneurial. Vos diverses capacités sont clairement définies, mettant en lumière vos points forts ainsi que les domaines nécessitant des besoins en formation ou d’accompagnement. Les entretiens en <b>bilan de compétences</b> à Provins sont indispensables si vous aspirez à instaurer les conditions optimales pour démarrer votre activité entrepreneuriale. Par ailleurs, vous avez la possibilité de suivre une <Link to="/formation_creation_entreprise#top">une formation à la création d'entreprise en Seine-et-Marne</Link> pour approfondir vos connaissances. Vous repartirez avec une feuille de route détaillée, précisant les actions essentielles pour assurer le bon développement de votre projet..</p>
                    <div className='movieCentered'>
                        <Movie src={Tree} />
                    </div>
                </div>
            </article>
            <ContactButton text="Contactez-nous" />
            <GoogleWidget />
            <article className="Seo-article">
                <h2 className='title-Melun-textStart'>Bilan de compétences à {ville} </h2>
                <p>Faites confiance à Attribut Conseils - C'est 170 avis Google.<span className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span></p>
                <p>Réaliser un bilan de compétences à Provins, c'est évaluer vos aptitudes, vos <b>pistes d'évolution</b>, et les axes d'amélioration nécessaires. Les résultats obtenus vous aident à déterminer vos besoins en formation, à renforcer votre confiance en vos capacités, et à travailler sur vos points faibles pour une meilleure intégration professionnelle. Chez Attribut Conseils, ce processus se déroule en trois étapes clés :</p>
                <ul className='liste-Melun'>
                    <li>La phase préliminaire : <b>un entretien gratuit et sans engagement</b> permet d'analyser votre demande et de déterminer le format le plus adapté à votre situation.
                    </li>
                    <li>L'investigation consiste à construire votre projet professionnel, à évaluer sa pertinence, et à envisager des alternatives si nécessaire.</li>
                    <li>La conclusion se fait à travers des <b>entretiens personnalisés</b> où vous pourrez intégrer les résultats de l'étape précédente et définir les conditions favorisant la réalisation de vos objectifs. Les modalités et étapes pour la concrétisation de votre projet sont définies dans la synthèse produite par Attribut Conseils à l'issue du bilan de compétences.</li>
                </ul>
                <p>Forts de plus de 16 ans d'expérience, nous sommes parmi les meilleurs cabinets pour les bilans de compétences à Provins. Notre équipe multidisciplinaire est composée de psychologues du travail, de consultants experts en bilan, d'ingénieurs de formation, de spécialistes en coaching, ainsi que d'anciens RH et dirigeants d'entreprise. En tant que leader, Attribut Conseils assiste des centaines de salariés chaque année dans diverses problématiques liées au monde du travail. Que vous soyez à Torcy, Lagny-sur-Marne, Melun, Fontainebleau, Meaux, ou ailleurs en Seine-et-Marne, nos services sont à votre disposition. Les entretiens peuvent également être menés à distance via visio, ce qui rend notre expertise accessible aux professionnels d'autres départements et régions de France.</p>
            </article>
            <TelButton number="06 98 88 15 55" />
            <Questions tag='all' ville={ville} />
            <ScrollToTop />
        </section >
    );
};

export default Provins;