import React from 'react';
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
import './seo.scss';
import Questions from '../../Components/Questions/Questions.js';


const Melun = () => {
    return (
        <section className='Seo'>
            <h1><span>Votre</span><br /> BILAN DE COMPÉTENCES A MELUN</h1>
            <p className='Seo_Yellow'>Vous cherchez à réaliser un bilan de compétences à Melun ? Contactez notre cabinet spécialisé en Seine-et-Marne, retour rapide assuré !</p>
            <div className="Seo container-img">
                <img className='Tree' src={LogoTree} alt="Logo arbre Attribut conseils" />
            </div>
            <article className="Seo-article">
                <p>Le bilan de compétences est un dispositif puissant pour orienter ou réorienter sa carrière professionnelle, après avoir identifié vos potentialités et vos aspirations et de les avoir confrontés aux réalités du marché ou du contexte de votre entreprise.
                </p>
                <p>En analysant de manière dynamique votre parcours personnel et professionnel, dans le but de garantir votre succès et d'atteindre des résultats tangibles, le bilan de compétences offre également la possibilité d'agir en se fondant sur une connaissance approfondie de soi-même, à partir d'un projet clair et d'un plan d'action précis. Vous bénéficiez ainsi d'un accompagnement personnalisé par des consultants en gestion de carrière, ainsi que d'une stratégie élaborée pour construire un projet professionnel viable.</p>
                <p>
                    Attribut Conseils propose son expertise pour aider chacun à réussir et à s'épanouir dans le monde du travail. Notre équipe est disponible pour vos bilans de compétences en Île-de-France, plus précisément à Fontainebleau dans le département de Seine-et-Marne.
                </p>
            </article>
            <article className="timeline right-container withMovie">
                <h2>Qui peut faire un bilan de compétences ?</h2>
                <div>
                    <p>Le cabinet ATTRIBUT CONSEILS, expert en gestion de carrière professionnelle, propose des <b>bilans de compétences</b> adaptés à tous les profils. Que vous travailliez dans le secteur public ou privé, peu importe votre niveau, votre statut ou votre domaine d'activité, que vous soyez dirigeant, cadre supérieur, technicien ou ouvrier, notre service s'adresse à vous.</p>
                    <Movie src={climb} />
                </div>
            </article>
            <article className="timeline right-container articleCertif">
                <h3>Le bilan de compétences pour les salariés et pour les demandeurs d'emploi</h3>
                <div className='articleCertif-container'>
                    <div className='articleCertif-container-text'>
                        <p>Vous avez <b>cumulé des droits à la formation</b>, votre compte CPF est crédité une fois par an. Le financement d’un <b>bilan de compétences</b> dépend de votre situation, statut et des modalités souhaitées. </p>
                        <p>Pour financer le bilan de compétences vous avez 4 possibilités : utiliser vos droits CPF, le plan de développement des compétences de votre employeur, France Travail ou le financement personnel. Vous pouvez effectuer <b>le bilan de compétences</b> pendant ou en dehors de vos heures de travail sans avoir à informer votre employeur.</p>
                        <p>Pour mieux connaitre vos droits à la formation, les modalités de financements pour les salariés du public ou du privé</p>
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
                <p className='left-container_AlignStart'>Différents objectifs peuvent vous amener à prendre un rendez-vous chez des consultants tels qu'<b>Attribut Conseils</b> pour un bilan de compétences. C'est un outil puissant qui permet de répondre à plusieurs objectifs de gestion de carrière.</p>
            </article>
            <article className="timeline left-container withMovie">
                <h3 className='text-centered'>L'évaluation de vos compétences pour un changement professionnel</h3>
                <div>
                    <p className='text-end'>Lorsque vous envisagez une reconversion, le bilan de compétences se révèle être un point de départ crucial. Que ce soit dans votre métier actuel ou dans votre <b>vie personnelle</b>, vous avez accumulé des connaissances techniques et développé des qualités relationnelles essentielles pour votre <b>vie professionnelle</b>. Grâce au bilan de compétences, accompagné de tests d’orientation et de personnalité, vous prenez conscience de vos véritables atouts, identifiez ceux qui vous seront bénéfiques dans votre future carrière, ainsi que les compétences à acquérir pour atteindre vos objectifs. </p>

                    <Movie src={Arc} />
                </div>
            </article>
            <ContactButton text="Je demande mon bilan de compétences" />
            <article className="timeline right-container">
                <h3>La définition d'un projet de reconversion professionnelle pour retrouver du sens au travail</h3>
                <div>
                    <p>Vous envisagez une reconversion, mais éprouvez des difficultés à <b>construire un plan d'évolution</b> précis ? Lors du bilan de compétences, votre consultant est à votre écoute pour vous orienter vers les secteurs correspondant à vos objectifs. Vous recevez ensuite des informations sur les formations nécessaires pour accéder à chaque métier identifié. Grâce à un accompagnement personnalisé, vous pouvez établir un projet professionnel concret tout en disposant des moyens nécessaires pour le concrétiser.</p>
                </div>
            </article>
            <article className="timeline right-container">
                <h3>Travailler votre mobilité interne ou obtenir un poste à responsabilité dans votre entreprise</h3>
                <div>
                    <p><b>Le bilan de compétences</b> s'adresse également aux individus désirant évoluer au sein de leur entreprise. Nos consultants possèdent l'expertise requise pour analyser le transfert des compétences et accroître vos chances d'accéder à davantage de responsabilités ou à d’autres missions. Ils vous guident dans l'identification de vos points forts et faiblesses par rapport aux exigences des postes internes. À la clôture du bilan de compétences, vous serez mieux préparé(e) à saisir les opportunités de promotion au sein de votre entreprise.</p>
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline left-container">
                <h3 className='text-end'>Améliorer votre profil pour les recruteurs</h3>
                <p className='text-end'>Un candidat qui a réalisé un bilan de compétences envoie un signal très positif lors d'un processus de recrutement. Cette expérience enrichissante, mentionnée dans votre CV, est généralement abordée lors des entretiens. Ce développement renforce la crédibilité de votre candidature et témoigne de votre volonté de repousser vos limites. C'est un signe indéniable de motivation qui peut faire la différence. Au cours du bilan de compétences à <b>Melun</b>, notre cabinet de coaching, Attribut Conseils, vous propose des outils concrets pour mettre en valeur votre profil. Notre équipe est notamment disponible pour vous aider à travailler votre stratégie de recherche d’emploi et repenser vos outils de communication.</p>
            </article>
            <article className="timeline left-container">
                <h3 className='text-centered'>La création d'entreprise</h3>
                <div className='left-container video-flexRow'>
                    <p className='text-end'>Le bilan de compétences, révèle les compétences entrepreunariales. Le bilan de compétences est un levier pertinent pour les professionnels désireux d'appréhender leur <b>projet de création d'entreprise</b>. Grâce à un accompagnement personnalisé, vous approfondissez votre connaissance de votre profil d'entrepreneur. Vos différentes facultés sont clairement identifiées, vous permettant ainsi de connaître vos points forts et les domaines sur lesquels vous devez encore travailler.<br />Les entretiens pour votre <b>bilan de compétences</b> à Melun servent également à consolider votre projet. Vous recevez des informations précieuses sur les dispositifs d'aides accessibles aux nouveaux entrepreneurs. Ces éléments sont cruciaux si vous aspirez à créer les conditions optimales pour lancer votre activité entrepreneuriale. De plus, il est envisageable d'opter pour <Link to="/formation_creation_entreprise#top">une formation à la création d'entreprise en Seine-et-Marne</Link>  pour approfondir vos connaissances sur le sujet. À la fin de ce processus, vous repartez avec un plan d’action détaillé, précisant les étapes indispensables au bon développement de votre projet. </p>
                    <div className='movieCentered'>
                        <Movie src={Tree} />
                    </div>
                </div>
            </article>
            <ContactButton text="Contactez-nous" />
            <article className="Seo-article">
                <h2 className='title-Melun-textStart'>Bilan de compétences à Melun </h2>
                <p>Faites confiance à Attribut Conseils - Avec une note de 5 sur 5 basée sur 170 avis Google.<span className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span></p>
                <p>Réaliser des bilans de compétences à Melun, c'est faire le point de vos aptitudes, vos <b>pistes d'évolution</b> ainsi que les domaines où des améliorations sont nécessaires. Les résultats obtenus vous aident à identifier vos besoins en termes de formation. Vous apprenez à avoir confiance en vos capacités et à travailler sur vos points faibles pour une meilleure intégration professionnelle. Chez Attribut Conseils, cela se déroule en trois étapes principales : </p>
                <ul className='liste-Melun'>
                    <li>La phase préliminaire : <b>un entretien gratuit et sans engagement</b> pour analyser votre demande et vos besoins, et déterminer le format le plus adapté à votre situation.</li>
                    <li>L'investigation : la construction de votre projet professionnel, l'évaluation de sa pertinence et l'élaboration d'alternatives si nécessaire.</li>
                    <li>La conclusion : des entretiens personnalisés pour vous approprier les résultats de l'étape précédente, définir les conditions et les moyens favorisant l'atteinte de vos objectifs, et établir les principales modalités et étapes pour la réalisation de votre projet, telles que présentées dans la synthèse produite par Attribut Conseils.</li>
                </ul>
                <p>Avec plus de 16 ans d'expérience, nous sommes l'un des meilleurs cabinets pour la réalisation de bilans de compétences à Melun. Notre équipe est composée de psychologues du travail, de consultants experts en bilan, d'ingénieurs de formation, de spécialistes en coaching, ainsi que d'anciens RH et dirigeants d'entreprise.</p>
                <p>En tant que leader, Attribut Conseils accompagne des centaines de salariés chaque année dans diverses problématiques du monde du travail. Que vous soyez à Torcy, Lagny-sur-Marne, Fontainebleau, Meaux ou ailleurs en Seine-et-Marne, nos services sont à votre disposition. Les entretiens peuvent également se dérouler à distance via visioconférence, accueillant ainsi les professionnels d'autres départements et régions de France.
                </p>
            </article>
            <TelButton number="06 98 88 15 55" />
            <ScrollToTop />
            <Questions tag={['all']} ville="Melun" />
        </section >
    );
};

export default Melun;