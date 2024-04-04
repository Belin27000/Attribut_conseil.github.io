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


const Avon = () => {
    const ville = 'Avon';

    return (
        <section className='Seo'>
            <h1><span>Votre</span><br /> BILAN DE COMPÉTENCES A <span className='Title city'>{ville}</span></h1>
            <p className='Seo_Yellow'>Vous cherchez à réaliser un bilan de compétences à {ville} ? Contactez notre cabinet spécialisé en Seine-et-Marne, retour rapide assuré !</p>
            <div className="Seo container-img">
                <img className='Tree' src={LogoTree} alt="Logo arbre Attribut conseils" />
            </div>
            <article className="Seo-article">
                <p>Le bilan de compétences représente un outil précieux pour guider une transition professionnelle ou une réorientation de carrière. Il repose sur l'identification des forces et des aspirations individuelles, confrontées à la réalité du marché du travail ou du contexte professionnel spécifique.</p>
                <p>En examinant de manière approfondie le parcours personnel et professionnel de chaque individu, l'objectif du bilan de compétences est d'assurer le succès et d'atteindre des résultats concrets. En plus de permettre une meilleure connaissance de soi-même, il offre la possibilité d'agir de manière stratégique, en élaborant un projet clair et un plan d'action précis. L'accompagnement personnalisé par des consultants en gestion de carrière garantit une approche sur mesure, ainsi qu'une stratégie réfléchie pour la construction d'un projet professionnel solide et viable.</p>
                <p>
                    Attribut Conseils met à disposition son expertise pour soutenir chacun dans sa réussite et son épanouissement professionnel. Notre équipe est disponible pour réaliser des bilans de compétences en Île-de-France, notamment à AVON, dans le département de Seine-et-Marne.
                </p>
            </article>
            <article className="timeline right-container withMovie">
                <h2>Qui peut faire un bilan de compétences ?</h2>
                <div>
                    <p>Le cabinet ATTRIBUT CONSEILS, spécialiste de la gestion de carrière professionnelle, offre des <b>bilans de compétences</b> adaptés à chaque profil. Que vous évoluiez dans le secteur public ou privé, quel que soit votre niveau, votre statut ou votre domaine d'activité, que vous occupiez un poste de direction, de cadre supérieur, de technicien ou d'ouvrier, notre service est conçu pour vous.</p>
                    <Movie src={climb} />
                </div>
            </article>
            <article className="timeline right-container articleCertif">
                <h3>Le bilan de compétences pour les salariés et pour les demandeurs d'emploi</h3>
                <div className='articleCertif-container'>

                    <div className='articleCertif-container-text'>
                        <p>Si vous avez <b>cumulé des droits à la formation</b>, votre CPF est alimenté chaque année au mois d’avril. Le financement d'un bilan de compétences dépend de votre situation, de votre statut et des modalités.. Pour couvrir les frais d'un <b>bilan de compétences</b>, vous disposez de quatre options : utiliser vos droits CPF,  le plan de développement des compétences (PDC) de votre employeur,  France travail ou opter pour un financement personnel. Vous avez la possibilité d'effectuer le bilan de compétences pendant ou en dehors de vos heures de travail, sans nécessité d'informer votre employeur.</p>

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
                <p>Il existe diverses motivations qui peuvent vous pousser à prendre rendez-vous avec des consultants tels qu'<b>Attribut Conseils</b> pour réaliser un bilan de compétences. Cet outil est remarquablement efficace pour atteindre plusieurs objectifs en matière de gestion de carrière.</p>
            </article>
            <article className="timeline left-container withMovie">
                <h3 className='text-centered'>L'évaluation de vos compétences pour un changement professionnel</h3>
                <div>
                    <p className='text-end'>Lorsque vous envisagez une reconversion professionnelle, le bilan de compétences représente un point de départ essentiel. Que ce soit pour <b>votre vie professionnel</b>  ou  <b>vie personnelle</b>, vous avez acquis des compétences techniques et développé des qualités relationnelles cruciales au service de votre carrière. Grâce au bilan de compétences, appuyé par des <b>tests évaluations d’orientation et de personnalité</b>, vous prenez conscience de vos véritables points forts, identifiez ceux qui seront bénéfiques , ainsi que les compétences à acquérir pour atteindre vos objectifs.</p>

                    <Movie src={Arc} />
                </div>
            </article>
            <ContactButton text="Je demande mon bilan de compétences" />
            <article className="timeline right-container">
                <h3>La définition d'un projet de reconversion professionnelle pour retrouver du sens au travail</h3>
                <div>
                    <p>Envisagez-vous une reconversion mais avez-vous du mal à <b>construire un plan d'évolution</b> précis? Lors de votre bilan de compétences, votre consultant sera à votre écoute pour vous guider vers les secteurs alignés sur vos objectifs. Vous recevrez ensuite des recommandations concernant les formations requises pour accéder à chaque métier identifié. Grâce à un accompagnement personnalisé, vous pourrez élaborer un projet professionnel concret tout en disposant des moyens nécessaires pour le concrétiser.</p>
                </div>
            </article>
            <article className="timeline right-container">
                <h3>Travailler votre mobilité interne ou obtenir un poste à responsabilité dans votre entreprise</h3>
                <div>
                    <p><b>Le bilan de compétences</b> est également destiné aux individus souhaitant progresser au sein de leur entreprise. Nos consultants possèdent l'expertise nécessaire pour évaluer le transfert des compétences et augmenter vos chances d'accéder à des responsabilités supplémentaires ou à d'autres missions. Ils vous accompagnent dans l'identification de vos points forts et faiblesses par rapport aux exigences des postes internes. À la fin du bilan de compétences, vous serez mieux préparé(e) à saisir les opportunités de promotion au sein de votre entreprise.</p>
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline left-container">
                <h3 className='text-end'>Améliorer votre profil pour les recruteurs</h3>
                <p className='text-end'>La réalisation d'un bilan de compétences envoie un signal extrêmement positif lors d'un processus de recrutement. Cette <b>expérience enrichissante</b>, mentionnée dans votre CV, est généralement abordée lors des entretiens. Cette démarche renforce la crédibilité de votre candidature et démontre votre engagement à dépasser vos limites. C'est un indicateur manifeste de motivation qui peut faire toute la différence.</p>
                <p>
                    Lors de notre bilan de compétences à <b>Avon</b>, notre cabinet  Attribut Conseils, vous propose des outils concrets pour mettre en avant votre profil. Notre équipe est disponible pour vous aider à affiner votre stratégie de recherche d’emploi et à revoir vos outils de communication...
                </p>
            </article>
            <article className="timeline left-container">
                <h3 className='text-centered'>La création d'entreprise</h3>
                <div className='left-container video-flexRow'>

                    <p className='text-end'><b>Le bilan de compétences</b> révèle les aptitudes entrepreneuriales et représente un levier pertinent pour les professionnels souhaitant explorer leur <b>projet de création d'entreprise</b>. Grâce à un accompagnement personnalisé, vous approfondissez votre connaissance de votre profil entrepreneurial, identifiant clairement vos points forts et les domaines à améliorer.</p>
                    <div className='movieCentered'>
                        <Movie src={Tree} />
                    </div>
                </div>
                <p className='text-end'>
                    Les entretiens pour votre bilan de compétences à Avon servent également à renforcer votre projet. Vous recevez des informations précieuses sur les dispositifs d'aide accessibles aux nouveaux entrepreneurs, pour créer les conditions optimales pour lancer votre activité entrepreneuriale. De plus, vous avez la possibilité de suivre <Link to="/formation_creation_entreprise#top">une formation à la création d'entreprise en Seine-et-Marne</Link> pour approfondir vos connaissances sur le sujet. À la fin de ce processus, vous repartez avec un plan d'action détaillé, précisant les étapes indispensables au bon développement de votre projet. .
                </p>
            </article>
            <ContactButton text="Contactez-nous" />
            <GoogleWidget />

            <article className="Seo-article">
                <h2 className='title-Melun-textStart'>Bilan de compétences à {ville} </h2>
                <p>Faites confiance à Attribut Conseils - Avec une note de 5 sur 5 basée sur 170 avis Google.<span className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span></p>
                <p>À {ville}, réaliser un bilan de compétences permet de faire le point sur vos compétences, vos pistes d'évolution et les domaines nécessitant des améliorations. Les résultats obtenus permettent de cerner vos besoins en formation, à gagner confiance en vos capacités et à travailler sur vos points faibles pour une meilleure insertion professionnelle. Chez Attribut Conseils, ce processus se déroule en trois étapes principales : </p>
                <ul className='liste-Melun'>
                    <li>La phase préliminaire : <b>un entretien gratuit et sans engagement</b> pour analyser votre demande et vos besoins, et déterminer le format le plus adapté à votre situation.</li>
                    <li>L'investigation : la construction de votre projet professionnel, l'évaluation de sa pertinence et l'élaboration d'alternatives si nécessaire.</li>
                    <li>La conclusion : des entretiens personnalisés pour vous approprier les résultats de l'étape précédente, définir les conditions et les moyens favorisant l'atteinte de vos objectifs, et établir les principales modalités et étapes pour la réalisation de votre projet, telles que présentées dans la synthèse produite par Attribut Conseils.</li>
                </ul>
                <p>Fort de plus de 16 ans d'expérience, notre cabinet est reconnu comme l'un des meilleurs pour la réalisation de bilans de compétences à Avon. Notre équipe comprend des psychologues du travail, des consultants experts en bilan, des ingénieurs de formation, des spécialistes en coaching, ainsi que d'anciens professionnels des ressources humaines et dirigeants d'entreprise.
                </p>
                <p>En tant que leader, Attribut Conseils accompagne chaque année des centaines de salariés dans diverses problématiques professionnelles. Que vous soyez à Torcy, Lagny-sur-Marne, Fontainebleau, Meaux ou ailleurs en Seine-et-Marne, nos services sont à votre disposition. Les entretiens peuvent également être organisés à distance via visioconférence, afin d'accueillir les professionnels d'autres départements et régions de France.</p>
            </article>
            <TelButton number="06 98 88 15 55" />
            <Questions tag='all' ville='Avon' />
            <ScrollToTop />
        </section >
    );
};

export default Avon;