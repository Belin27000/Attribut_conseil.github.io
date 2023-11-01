import React from 'react';
import './qualiopi.scss'
import ContactButton from '../../Components/Button/ContactButton.js';

const Qualiopi = () => {
    return (
        <section className='Qualiopi'>
            <h2 className="Qualiopi-title"> Découvrez notre service de gestion de formation externalisée soutenu par notre expertise QUALIOPI !</h2>
            <article className="Qualiopi-article">
                <p>Êtes-vous à la recherche d'une solution efficace pour gérer vos formations internes sans soucis ni tracas ?  Notre service de gestion de formation externalisée est là pour vous faciliter la vie et vous permettre de vous concentrer sur votre cœur de métier.
                </p>
                <ul>
                    <li className='ListTitle'>Qu'est-ce que la gestion de formation externalisée ?</li>
                    <li>La gestion de formation externalisée consiste à confier la planification, l'organisation et la coordination de vos programmes de formation à des professionnels expérimentés. Nous travaillons en étroite collaboration avec votre entreprise pour comprendre vos besoins spécifiques, concevoir des modules adaptés et assurer la mise en œuvre fluide de vos formations.</li>
                    <li className='ListTitle'>Les avantages de notre service de gestion de formation externalisée :
                        <ol>
                            <li>Expertise spécialisée : Bénéficiez de l'expertise de notre équipe de professionnels en gestion de formation qui maîtrisent les meilleures pratiques et les exigences QUALIOPI
                            </li>
                            <li>Gain de temps : Libérez-vous des tâches fastidieuses de planification et de coordination de vos formations. Nous nous occupons de tout, de la logistique à l'évaluation des résultats.</li>
                            <li>Flexibilité : Nous nous adaptons à vos besoins et à votre emploi du temps. Que vous ayez besoin d'une gestion ponctuelle ou d'un programme complet, nous nous assurons de répondre à vos attentes.</li>
                            <li>Réduction des coûts : Externaliser la gestion de formation vous permet d'économiser sur les ressources internes nécessaires à la gestion et à l'administration des formations.</li>
                        </ol>
                    </li>
                    <li className='ListTitle'>Nos services de gestion de formation externalisée comprennent :
                        <ul>
                            <li>Analyse des besoins de formation</li>
                            <li>Conception de programmes de formation sur mesure</li>
                            <li>Planification et organisation logistique des formations</li>
                            <li>Coordination des formateurs et des participants</li>
                            <li>Évaluation des résultats et des retours d'expérience</li>
                            <li>Respect des exigences QUALIOPI</li>
                        </ul>
                    </li>
                </ul>
                <p>Ne perdez plus de temps et d'énergie dans la gestion complexe de vos formations ! Confiez-nous cette tâche et bénéficiez d'un service professionnel, personnalisé et efficace.</p>
            </article>
            <article className="Qualiopi-article_bgWhite">
                <p className="Qualiopi-article_blue">Contactez-nous dès aujourd'hui pour discuter de vos besoins en gestion de formation externalisée. Ensemble, nous veillerons à ce que vos formations soient une réussite totale ! </p>
                <ContactButton />
            </article>
        </section>
    );
};
export default Qualiopi;