import React from 'react';
import './fontainebleau.scss';
import ScrollToTop from '../../Components/Button/ScrollButton/ScrollToTop.js';

const Fontainebleau = () => {
    return (
        <section className='Bilan-Bleau'>
            <h1><span>Votre</span><br /> BILAN DE COMPÉTENCES A FONTAINEBLEAU</h1>
            <p className='Bilan-Bleau_Yellow'>Vous cherchez à réaliser un bilan de compétences à Fontainebleau ? Contactez notre cabinet spécialisé en Seine-et-Marne, retour rapide assuré !</p>
            <article className="Bilan-Bleau-article">
                <p>Le bilan de compétences est un dispositif puissant pour (re)positionner professionnellement, après avoir identifié vos potentialités et vos aspirations et de les avoir confrontés aux réalités du marché ou du contexte de votre entreprise.
                </p>
                <p>A travers l'analyse dynamique de votre parcours personnel et professionnel dans un objectif de réussite et pour atteindre un résultat concret ! Il permet également d'agir en s'appuyant sur une meilleure connaissance de soi, à partir d'un projet clair et un plan d'action défini.
                </p>
                <p>
                    Vous bénéficiez d'un accompagnement par des consultants en gestion de carrière et d'une stratégie dans la construction d'un projet professionnel adapté à vos aspirations.
                </p>
                <p>Attribut Conseils propose son expertise pour aider chacun à réussir et à s'épanouir dans le monde du travail. Notre équipe est disponible pour vos bilans de compétences en Île-de-France, plus précisément à Fontainebleau dans le département de Seine-et-Marne.</p>
            </article>

            <ScrollToTop />
        </section>
    );
};

export default Fontainebleau;