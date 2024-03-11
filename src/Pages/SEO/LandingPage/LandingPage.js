import './landingPage.scss'
import React from 'react';
import Euro from '@/Assets/Images/Euro.png'
import Tree from '@/Assets/Images/Tree.png'
import Crown from '@/Assets/Images/Crown.png'
import Visio from '@/Assets/Images/Visio.png'
import Qualiopi from '@/Assets/Images/Logo_Qualiopi.png'
import Calendar from '@/Assets/Images/Calendar.png'
import climb from '@/Assets/video/Grimpeur.mp4'
import Basket from '@/Assets/video/Basket.mp4'
import Movie from '../../../Components/Movie/Movie.js';
import ContactButton from '../../../Components/Button/ContactButton.js';
import TelButton from '../../../Components/Button/TelButton/TelButton.js';
import useNoIndexMetaTag from '../../../Hook/useNoIndexMetaTag.js';
const LandingPage = () => {
    useNoIndexMetaTag();
    return (
        <section className="Landing-Page">
            <div className="container">
                <div className="Landing-Page container-img">
                    <img className='Tree' src={Tree} alt="Logo arbre Attribut conseils" />
                </div>
                <div className='container-head'>
                    <h1><span>Votre</span><br /> BILAN DE COMPÉTENCES</h1>
                    <h2>construisez<br />l’avenir professionnel<br /><span>qui vous ressemble</span></h2>
                </div>
            </div>
            <div className='Landing-Page-pres'>Bonjour,<br />
                Enchantée et bienvenue. Si vous êtes ici, c’est que vous cherchez potentiellement  à transformer ou à faire évoluer votre carrière professionnelle. Pour sortir d’une impasse professionnelle ou donner du sens à votre carrière, optimiser vos compétences ou vous redonner confiance en vous.  Quel que soit votre objectif, nous sommes là pour vous accompagner dans cette démarche.
            </div>
            <article className="right-container" >
                <h3 >Qu’est ce qu’un bilan de compétences?</h3>
                <div>
                    <p>Le bilan de compétences est un dispositif puissant pour  (re)positionner professionnellement, après avoir identifié vos potentialités et vos aspirations et de les avoir confrontés aux réalités du marché ou du contexte de votre entreprise.
                    </p>
                    <p>A travers l'analyse dynamique de votre parcours personnel et professionnel dans un objectif de réussite et pour atteindre un résultat concret! Il permet également d'agir en s'appuyant sur une meilleure connaissance de soi, à partir d'un projet clair et un plan d'action défini.
                    </p>
                </div>
            </article>
            <article className="right-container" >
                <h3 >Qui peut faire un bilan de compétences ?</h3>
                <div className='right-container-text_movies'>
                    <p>Le cabinet ATTRIBUT CONSEILS spécialisé dans la gestion de carrière professionnelle réalisent des <b>bilans de compétences</b> pour tous types de profils. Que vous exerciez un métier dans le public ou le privé, quel que soit votre niveau, votre statut et votre secteur d’activité. </p>
                    <div className='container-movie'>
                        <Movie src={climb} />
                    </div>
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="left-container" >
                <h3 >Comment se déroule un bilan de compétences ?</h3>
                <div className='left-container-text_movies'>
                    <p>Vous êtes accompagné sur une durée de 3 mois en moyenne par un consultant expert durant 24 heures, dont 16 heures de séances en face à face, et des temps d'investigation personnelle.<br />Un entretien de suivi est organisé 6 mois après la fin du bilan pour faire le point.<br />Un premier entretien gratuit et sans engagement permet, avant de démarrer la démarche, de faire connaissance avec le consultant, de poser des questions, et d’exposer votre situation</p>
                    <div className='container-movie'>
                        <Movie src={Basket} />
                    </div>
                </div>
            </article>
            <article className="left-container" >
                <h3 >Aide à savoir :</h3>
                <div className='left-container-text_movies'>
                    <p>D’où je viens : analyse du parcours, des expériences, des compétences<br />Qui je suis : analyse de la personnalité, des motivations, des valeurs et potentiels<br />Où je vais : définition et hiérarchisation des projets<br />Comment j’y vais : mise en place d’un plan d’action, mise en œuvre des premières démarches, suivi à 6 mois</p>
                </div>
            </article>
            <div className='Landing-Page-middle'>Quelques soit votre objectif, contactez attribut conseils pour une analyse de situation et informations sur le processus bilan de compétences. <b>Entretien gratuit et sans engagement.</b> </div>
            <ContactButton text="Je demande un rdv" />

            <div className="Landing-Page-oblique">
                <div className='oblique-Left'><p>Avec plus de 16 ans d'expérience à notre actif, nous sommes l'un des meilleurs cabinets pour toutes les problématiques concernant la relation au travail.  Notre équipe est constituée de psychologues du travail, de consultants experts bilan, d'ingénieurs de formation, de spécialistes en coaching, d'anciens RH et dirigeants d'entreprise.
                </p><p>En tant que leader, Attribut Conseils aide des centaines de salariés chaque année.  Vous pouvez recourir à nos services que vous soyez en présentiel ou en visio, nos accompagnements sont individualisés et personnalisés. </p>
                </div>
                <div className='oblique-Right'>
                    <ul className='oblique-Right_list'>
                        <li className='subList'>
                            <ul className='subList-text-list'>
                                <li className='subList-Yellow small'>Du lundi au samedi inclus
                                </li>
                                <li className='subList-Yellow'>De 8h30 à 20h</li>
                                <li>Des horaires adaptés aux vôtres, pour prendre le temps de bien faire</li>
                            </ul>
                        </li>
                        <li className='subList_imgCont'> <img className='Calendar' src={Calendar} alt="Logo calendrier Attribut conseils" /> </li>
                    </ul>
                    <ul className='oblique-Right_list'>
                        <li className='subList'>
                            <ul className='subList-text-list'>
                                <li className='subList-Yellow small'>100% visio/100% présentiel ou mixte
                                </li>
                                <li className='subList-Yellow'>Au choix</li>
                                <li>Pas de plateforme digitale impersonnelle, que des consultants diplômés</li>
                            </ul>
                        </li>
                        <li className='subList_imgCont'> <img className='Visio' src={Visio} alt="Logo personne devant un bureau" /> </li>
                    </ul>
                    <ul className='oblique-Right_list'>
                        <li className='subList'>
                            <ul className='subList-text-list'>
                                <li className='subList-Yellow small'>Tous les accompagnements</li>
                                <li className='subList-Yellow'>100% financés par votre CPF po par le PDC</li>
                                <li>La gestion de votre carrière avec des experts, entièrement prise en charge</li>
                            </ul>
                        </li>
                        <li className='subList_imgCont'> <img className='Euro' src={Euro} alt="Logo euro jaune" /> </li>
                    </ul>
                    <ul className='oblique-Right_list'>
                        <li className='subList'>
                            <ul className='subList-text-list'>
                                <li className='subList-Yellow small'>Experts en gestion de carrière</li>
                                <li className='subList-Yellow'>depuis 20 ans</li>
                                <li>5000 personnes accompagnées
                                    Certification qualité Qualiopi</li>
                            </ul>
                        </li>
                        <li className='subList_imgCont'>
                            <div>
                                <img className='Crown' src={Crown} alt="Logo couronne de laurier jaune" />
                                <img className='Qualiopi-list' src={Qualiopi} alt="Logo Qualiopi" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <article className="right-container-Last" >
                <h3 >Comment financer mon bilan de compétences? </h3>
                <div>
                    <p>Le prix d’un bilan se situe entre <b>1000€ et 2240€.</b> Le financement d’un bilan de compétences dépend de votre situation, statut et des modalités souhaitées. </p>
                    <p>Pour financer le bilan de compétences vous avez 4 possibilités : utiliser vos droits CPF, le plan de développement des compétences de votre employeur, France Travail ou le financement personnel.</p>
                    <p>Vous pouvez effectuer le bilan de compétences sur le temps de travail ou hors temps de travail sans prévenir votre employeur. Nous sommes habilité France Travail, Qualiopi pour le plan de développement des compétences et sur le CPF. </p>
                </div>
            </article>
            <ContactButton text="Je demande mon bilan de compétences" />
        </section>
    );
};

export default LandingPage;