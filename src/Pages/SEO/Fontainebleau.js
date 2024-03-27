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




const Fontainebleau = () => {
    return (
        <section className='Seo'>
            <h1><span>Votre</span><br /> BILAN DE COMPÉTENCES A FONTAINEBLEAU</h1>
            <p className='Seo_Yellow'>Vous cherchez à réaliser un bilan de compétences à Fontainebleau ? Contactez notre cabinet spécialisé en Seine-et-Marne, retour rapide assuré !</p>
            <div className="Seo container-img">
                <img className='Tree' src={LogoTree} alt="Logo arbre Attribut conseils" />
            </div>
            <article className="Seo-article">
                <p>Le bilan de compétences est un dispositif puissant pour (re)positionner professionnellement, après avoir identifié vos potentialités et vos aspirations et de les avoir confrontés aux réalités du marché ou du contexte de votre entreprise.
                </p>
                <p>A travers l'analyse dynamique de votre parcours personnel et professionnel dans un objectif de réussite et pour atteindre un résultat concret ! Il permet également d'agir en s'appuyant sur une meilleure connaissance de soi, à partir d'un projet clair et un plan d'action défini.
                </p>
                <p>
                    Vous bénéficiez d'un accompagnement par des consultants en gestion de carrière et d'une stratégie dans la construction d'un projet professionnel adapté à vos aspirations.
                </p>
                <p>Attribut Conseils propose son expertise pour aider chacun à réussir et à s'épanouir dans le monde du travail. Notre équipe est disponible pour vos bilans de compétences en Île-de-France, plus précisément à Fontainebleau dans le département de Seine-et-Marne.</p>
            </article>
            <article className="timeline right-container withMovie">
                <h2>Qui peut faire un bilan de compétences ?</h2>
                <div>
                    <p>Le cabinet ATTRIBUT CONSEILS spécialisé dans la gestion de carrière professionnelle réalisent des <b>bilans de compétences</b> pour tous types de profils. Que vous exerciez un métier dans le public ou le privé, quel que soit votre niveau, votre statut et votre secteur d’activité. Dirigeant, cadre supérieur, technicien ou ouvrier, vous êtes concerné, peu importe votre statut ou votre métier.</p>
                    <Movie src={climb} />
                </div>
            </article>
            <article className="timeline right-container articleCertif">
                <h3>Le bilan de compétences pour les salariés et pour les demandeurs d'emploi</h3>
                <div className='articleCertif-container'>

                    <div className='articleCertif-container-text'>
                        <p>Vous avez <b>cumulé des droits à la formation</b>, votre compte CPF est crédité une fois par an. Le financement d’un bilan de compétences dépend de votre situation, statut et des modalités souhaitées. </p>
                        <p>Pour financer <b>le bilan de compétences</b> vous avez 4 possibilités : utiliser vos droits CPF, le plan de développement des compétences de votre employeur, France Travail ou le financement personnel.Vous pouvez effectuer <b>le bilan de compétences</b> sur le temps de travail ou hors temps de travail sans prévenir votre employeur. </p>
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
                <p>Différents objectifs peuvent vous amener à prendre un rendez-vous chez des consultants tels qu'<b>Attribut Conseils</b> pour un bilan de compétences. C'est un outil puissant qui permet de répondre à plusieurs objectifs de gestion de carrière.</p>
            </article>
            <article className="timeline left-container withMovie">
                <h3 className='text-centered'>L'évaluation de vos compétences pour un changement professionnel</h3>
                <div>
                    <p className='text-end'>Le bilan de compétences est un excellent point de départ lorsque vous envisagez une reconversion. En exerçant votre métier actuel ou dans votre vie personnelle, vous avez acquis des connaissances techniques et des qualités relationnelles indispensables dans la <b>vie professionnelle</b>. </p>

                    <Movie src={Arc} />
                </div>
                <p>Grâce au bilan de compétences, aux tests de personnalité, <b>tests d'orientation du bilan de compétences</b> vous prenez conscience de vos véritables atouts, identifiez ceux qui vous serviront dans la suite de votre carrière et les compétences à acquérir pour atteindre vos objectifs.</p>
            </article>
            <ContactButton text="Je demande mon bilan de compétences" />
            <article className="timeline right-container">
                <h3>La définition d'un projet de reconversion professionnelle pour retrouver du sens au travail</h3>
                <div>
                    <p>Vous pensez à une reconversion, mais avez du mal à construire un plan d'évolution précis ? Lors du bilan de compétences, votre consultant se rend disponible pour votre orientation vers les secteurs correspondant à votre objectif. Vous obtenez ensuite des informations sur les formations pour accéder à chaque métier identifié. Un accompagnement personnel vous permet d'établir un projet professionnel concret tout en vous donnant les moyens de le réaliser.</p>
                </div>
            </article>
            <article className="timeline right-container">
                <h3>Travailler votre mobilité interne ou obtenir un poste à responsabilité dans votre entreprise</h3>
                <div>
                    <p>Le bilan de compétences est aussi dédié aux personnes qui veulent une évolution dans leur poste de travail. Nos consultants ont l'expérience nécessaire pour transférer vos compétences et augmenter vos chances de gagner en responsabilité. Ils vous aident à identifier vos forces et vos faiblesses par rapport aux exigences des postes en interne. À la fin du <b>bilan de compétences</b>, vous serez en mesure de saisir les opportunités offertes par votre société en matière de promotion.</p>
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline left-container">
                <h3 className='text-end'>Améliorer votre profil pour les recruteurs</h3>
                <p className='text-end'>Un candidat qui a effectué son bilan de compétences envoie un signal très positif lors d'un recrutement. Indiquée dans votre CV, cette <b>expérience enrichissante</b> est généralement abordée au cours de l'entretien. Ce développement donne davantage de crédit à votre candidature et démontre votre envie de dépasser vos limites. Il s'agit d'un gage de motivation qui peut être décisif.</p>
                <p className='text-end'>Lors du bilan de compétences à Fontainebleau, notre <b>cabinet de coaching Attribut Conseils</b> vous propose des outils concrets pour mettre votre profil en valeur. Notre équipe est par exemple disponible pour aider à repenser votre CV, travailler la lettre de motivation, etc.</p>
            </article>
            <article className="timeline left-container">
                <h3 className='text-centered'>La création d'entreprise</h3>
                <p className='text-end'>Composé de plusieurs tests, le bilan de compétences se distingue également comme un levier pertinent pour le professionnel qui désire mieux appréhender son <b>projet de création d'entreprise</b>. Un accompagnement personnel vous permet de mieux connaître votre profil d'entrepreneur. Vos différentes facultés sont clairement identifiées et vous savez quels sont vos points forts et les éléments sur lesquels vous devez encore travailler.</p>
                <div className='movieCentered'>
                    <Movie src={Tree} />
                </div>
                <p className='text-end'>Les entretiens pour votre <b>bilan de compétences</b> à Fontainebleau permettent par ailleurs de consolider votre projet. Vous obtenez des informations précieuses sur les dispositifs d'aides accessibles aux nouveaux entrepreneurs. Tout cela est déterminant si vous souhaitez créer les meilleures conditions pour mettre en place votre activité entrepreneuriale. Il est d'ailleurs possible d'opter pour <Link to="/formation_creation_entreprise#top">une formation à la création d'entreprise en Seine-et-Marne</Link> pour aller plus loin sur le sujet. Vous ressortez avec une feuille de route précisant les actions indispensables au bon développement de votre projet.</p>
            </article>
            <ContactButton text="Contactez-nous" />
            <article className="Seo-article">
                <h2>Bilan de compétences à Fontainebleau </h2>
                <p>Faites confiance à Attribut Conseils - C’est 170 avis google<span className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span></p>
                <p>Réaliser des bilans de compétences à Fontainebleau, c'est faire le point de vos aptitudes, vos <b>pistes d'évolution</b> complétés par ainsi que les améliorations nécessaires. Les résultats vous aident à identifier vos besoins en termes de formation. Vous apprenez à avoir confiance en vos capacités et à travailler sur vos points faibles pour une meilleure intégration professionnelle. Chez Attribut Conseils, cela passe par trois principales étapes qui sont : </p>
                <ul>
                    <li>La phase préliminaire,</li>
                    <li>L’investigation</li>
                    <li>La conclusion.</li>
                </ul>
                <p>La phase préliminaire est <b>un entretien gratuit et sans engagement</b>. Elle consiste à analyser la demande et le besoin du bénéficiaire. C'est aussi le moment où nos consultants déterminent le format le plus adapté à votre situation. À votre écoute, nous définissons ensemble les modalités de déroulement du bilan de compétences.</p>
                <p>L'investigation correspond à la construction de votre projet professionnel, à l'évaluation de sa pertinence et, si nécessaire, à l'élaboration d'alternatives.La conclusion se déroule via des <b>entretiens personnalisés</b> durant lesquels vous pourrez vous approprier les résultats de l'étape précédente. On relève les conditions et les moyens qui favoriseront l'atteinte de vos objectifs. Les principales modalités et étapes pour la réalisation de votre projet sont définies à l'issue du bilan de compétences dans la synthèse produite par Attribut Conseils.</p>
                <p>Avec plus de 16 ans d'expérience à notre actif, nous sommes l'un des meilleurs cabinets pour la réalisation de bilans de compétences à Fontainebleau. Notre équipe est constituée de psychologues du travail, de consultants experts bilan, d'ingénieurs de formation, de spécialistes en coaching, d'anciens RH et dirigeants d'entreprise.
                </p>
                <p>En tant que leader, Attribut Conseils aide des centaines de salariés chaque année et traite diverses problématiques du monde du travail. Vous pouvez recourir à nos services que vous soyez à Torcy, Lagny-sur-Marne, Melun, Meaux ou ailleurs en Seine-et-Marne. Les entretiens étant possibles à distance en visio, les professionnels d'autres départements et régions de France sont les bienvenus.</p>
            </article>
            <TelButton number="06 98 88 15 55" />
            <Questions tag='all' ville='Fontainebleau' />
            <ScrollToTop />
        </section >
    );
};

export default Fontainebleau;