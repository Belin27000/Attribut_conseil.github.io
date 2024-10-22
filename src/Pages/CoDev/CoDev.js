import CircleDot from '@/Components/CircleDot/CircleDot.js';
import Movie from '@/Components/Movie/Movie.js';
// import Questions from '@/Components/Questions/Questions.js';
import Boat from '@/Assets/Images/logo_AttributU.png';
import LogoTree from '@/Assets/Images/Tree.png';
import ContactButton from '@/Components/Button/ContactButton.js';
import ScrollToTop from '@/Components/Button/ScrollButton/ScrollToTop.js';
import GoogleWidget from '@/Components/Google/GoogleWidget/GoogleWidget.js';
import MetaTitleDes from '@/Components/Meta/MetaTitleDes.js';

import climb from '@/Assets/video/Grimpeur.mp4';
import React from 'react';

import './coDev.scss';

const CoDev = () => {
    const metaTitle = `Faire son bilan de compétences avec l’APEC`
    const metaDescription = `Vous souhaitez réaliser un bilan de compétences avec l’APEC mais vous ne savez pas quelles sont les démarches à effectuer ? Laissez-nous vous guider !`
    return (
        <section className='CoDev'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />

            <h1><span>Formation</span><br />CO-DÉVELOPPEMENT </h1>
            <p className='CoDev_p'>ACTION LEARNING.</p>
            <p className='CoDev_p_Yellow'>REPENSER SA POSTURE POUR LA METTRE AU SERVICE DE L‘INTELLIGENCE COLLECTIVE</p>
            <div className="CoDev container-img">
                <img className='Tree' src={LogoTree} alt="Logo arbre Attribut conseils" />
            </div>
            <article className="CoDev-article withMovie">
                <p className='Welcom'>Bienvenue,</p>
                <p className='Script'>Si vous êtes sur cette page, c'est que vous êtes à la recherche d'une approche de formation différente, qui valorise les connaissances individuelles pour les intégrer dans un processus d'apprentissage collectif.                    Le co-développement est une démarche de formation qui part de situations réelles et vécues par le professionnel, souvent problématiques, et questionnées par un collectif de pairs.
                    L’intervenant contribue à faire émerger des apprentissages propres aux différents individus mais aussi, parallèlement, à construire des connaissances et de l’intelligence collective.
                    Ces solutions issues du groupe deviennent des pistes de réponses à des problématiques jusque-là vécues de manière isolée.</p>
                <div className='movie-cont'>
                    <Movie src={climb} />
                </div>
            </article>
            <article className="Centrale-Text">
                <div>
                    <p>Cette recherche collective de sens et de solution participe à la reconnaissance d’une identité professionnelle, souvent en mouvement lorsqu’elle est interrogée dans les pratiques professionnelles quotidiennes ainsi qu’au renforcement de la cohésion d’équipe. </p>
                </div>
            </article>
            <article className="boat right-container articleCertif">
                <div className='boat-container-text'>
                    <p>Il s’agit donc d’un outil essentiel dans la prévention <span className='yellow'>des risques psycho-sociaux dans les métiers à forte composante relationnelle.</span></p>
                </div>
                <div className="boat-pic">
                    < img src={Boat} alt="Logo Qualiopi" />
                    {/* < img className='LogCpf' src={Cpf} alt="Logo Qualiopi" /> */}
                </div>
            </article>
            {/* <TelButton number="06 98 88 15 55" /> */}
            <article className="timeline left-container center">
                <div className='timeline-cont'>
                    <h2>Quels sont les fondements du co développement?</h2>
                    <p>Méthode venue d'outre-Atlantique, le co-développement s'est imposé comme une référence incontestable, dont nous sommes des ardents promoteurs ! Créée dans les années 80 par deux Canadiens, Claude Champagne et Adrien Payette, cette approche est définie comme <span className='Bold'>"un groupe de personnes désireuses d'améliorer leur pratique professionnelle, quel que soit leur domaine, et qui s'entraident mutuellement dans cette quête, convaincues qu'elles peuvent apprendre les unes des autres".</span></p>
                </div>
            </article>
            {/* <article className="timeline left-container withMovie">
                <div className="Arrow90percent-cont">
                    < img src={Boat} alt="Logo Qualiopi" />
                    < img className='LogCpf' src={Cpf} alt="Logo Qualiopi" />
                </div>
                <h3 className='text-centered'>Données chiffrées et tendances du marché du travail</h3>
                <div className='multiplePAndMovie'>
                    <div className='text-cointainer'>
                        <p className='text-end'>Le paysage professionnel évolue constamment, et les bilans de compétences deviennent un outil stratégique pour naviguer ces changements. Selon une étude menée par le Ministère du Travail français, environ 70 % des personnes ayant réalisé un bilan de compétences ont connu une progression significative dans leur carrière. De plus, une enquête de l'Observatoire du Bilan de Compétences indique que 80 % des participants ont gagné en confiance et en estime de soi suite à leur bilan.
                        </p>
                        <p>Les bilans de compétences reflètent une tendance croissante à la recherche de sens et d'épanouissement professionnel. La crise du Covid-19 n'a fait qu'amplifier ce besoin, poussant de nombreux professionnels à réévaluer leurs aspirations. Dans ce contexte, comment Attribut Conseils accompagne-t-il les professionnels vers une transition réussie ?..</p>

                    </div>
                    <Movie src={Arc} />
                </div>
            </article> */}
            <article className="timeline left-container center">
                <div className='timeline-cont'>
                    <h2>Comment se déroule le co-développement?</h2>
                    <p>L'espace de co-développement est un temps dédié où les collaborateurs confrontent leurs points de vue sur la manière de travailler et les différentes stratégies qu'ils ont développées pour composer avec la réalité professionnelle. La délibération implique l'explication des approches individuelles, exposant les limites et parfois les échecs. La confiance mutuelle est essentielle pour assumer ce risque. Cette intelligence délibérative redéfinit la responsabilité en la rendant collective et partagée entre les collègues. <span className='Bold'>La capacité d'inventer et de trouver des solutions est liée à la collaboration, elle prévient de l'isolement. </span></p>
                </div>
            </article>
            {/* <ContactButton text="Je demande un entretien d’informations gratuit et sans engagement " /> */}
            {/* <article className="timeline right-container">
                <h3>Accompagnement personnalisé et cas pratiques
                </h3>
                <div>
                    <p>Chez Attribut Conseils, chaque parcours de bilan de compétences est unique. Nous croyons en un accompagnement sur-mesure, reflétant la singularité de chaque client. Nos consultants s'appuient sur des outils innovants et des ressources exclusives pour vous offrir un service de qualité. Nous partageons des cas pratiques de clients ayant bénéficié de notre approche personnalisée, illustrant les transformations positives et concrètes dans leur vie professionnelle.
                    </p>
                    <p>Ces témoignages soulignent l'importance de l'accompagnement humain et expert que nous offrons, et comment il peut mener à une meilleure harmonie entre les compétences, les aspirations et les opportunités du marché. Au-delà de l'accompagnement, quel est l'impact d'un bilan de compétences sur la vie professionnelle ?
                    </p>
                </div>
            </article>
            <article className="timeline right-container withMovie">
                <h3>Impact du bilan de compétences sur la carrière
                </h3>
                <div className='multiplePAndMovie'>
                    <div className='text-cointainer'>
                        <p>Les retours de nos clients attestent de l'impact profond du bilan de compétences sur leur carrière. Ils rapportent une augmentation de la confiance en soi, une clarification de leur projet professionnel et une meilleure adéquation avec leurs aspirations personnelles. Ces changements se traduisent souvent par une transition vers des rôles plus satisfaisants ou par le lancement de projets entrepreneuriaux.
                        </p>
                        <p>Le bilan de compétences est donc un véritable catalyseur de développement personnel et professionnel. Prenons un moment pour réfléchir aux prochaines étapes après un bilan de compétences.
                        </p>
                    </div>
                    <Movie src={Tree} />
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline left-container">
                <h3 className='text-end'>Bilan de compétences APEC : Est-ce plus intéressant que de passer par un cabinet externe ?
                </h3>
                <p className='text-end'>Lorsqu'il s'agit de réaliser un bilan de compétences, l'option APEC est souvent envisagée par les cadres. Toutefois, choisir un cabinet externe comme Attribut Conseils présente des avantages distincts. Notre cabinet offre une approche plus personnalisée et flexible, adaptée aux spécificités de chaque individu. Contrairement à des structures plus grandes, nous cultivons une proximité avec nos clients, ce qui nous permet d'établir un diagnostic plus précis et d'élaborer des plans d'action sur mesure.
                </p>
                <p>En outre, Attribut Conseils possède une connaissance approfondie du marché local de l'emploi, un atout indéniable pour les professionnels de l'Essonne et de Seine et Marne. Nous intégrons une dimension humaine et empathique essentielle pour vous accompagner dans des moments clés de remise en question professionnelle. De plus, nous assurons un suivi post-bilan qui favorise la mise en œuvre effective de votre projet professionnel.
                </p>
                <p>Choisir Attribut Conseils, c'est opter pour un partenaire engagé qui valorise votre parcours unique et qui vous propulse vers des opportunités alignées avec vos aspirations profondes. C'est l'assurance d'un accompagnement dédié et d'une expertise reconnue pour faire de votre bilan de compétences une étape décisive vers le succès.
                </p>
            </article> */}
            <GoogleWidget />
            <CircleDot displayAll={false} />
            <ContactButton text="Contactez-nous" />
            {/* <Questions tag='APEC' mainTitleFaq={mainTitleFaq} mainPfaq={mainPfaq} /> */}

            {/* <Questions tag='all' ville={ville} /> */}
            <ScrollToTop />
        </section >
    );
};

export default CoDev;