import Movie from '@/Components/Movie/Movie.js';
import CircleDot from '@/Components/CircleDot/CircleDot.js';
// import Questions from '@/Components/Questions/Questions.js';
import MetaTitleDes from '@/Components/Meta/MetaTitleDes.js';
import TelButton from '@/Components/Button/TelButton/TelButton.js';
import ContactButton from '@/Components/Button/ContactButton.js';
import ScrollToTop from '@/Components/Button/ScrollButton/ScrollToTop.js';
import GoogleWidget from '@/Components/Google/GoogleWidget/GoogleWidget.js';
import Cpf from '@/Assets/Images/logo_CPF.webp'
import LogoTree from '@/Assets/Images/Tree.png';
import Qualiopi from '@/Assets/Images/Logo_Qualiopi.png'

import Arc from '@/Assets/video/Tir_Arc.mp4';
import Tree from '@/Assets/video/Plante.mp4';
import climb from '@/Assets/video/Grimpeur.mp4'
import React from 'react';

import './coDev.scss'

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
            <article className="CoDev-article">
                <p>Bienvenue chez Attribut Conseils, votre cabinet de référence pour le bilan de compétences dans l'Essonne et en seine et marne. Conscients de l'impact décisif d'un bilan de compétences pour le parcours professionnel de chacun, nous nous engageons à vous accompagner dans votre quête d'évolution ou de reconversion. Que vous soyez en période de transition ou à la recherche d'une meilleure adéquation entre vos aspirations et votre métier, Attribut Conseils est à vos côtés. Examinons ensemble la valeur ajoutée d'un bilan de compétences réalisé avec l’APEC et comment Attribut Conseils peut vous accompagner dans ce domaine.
                </p>
                <div className="articleCertif-pic">
                    < img src={Qualiopi} alt="Logo Qualiopi" />
                    < img className='LogCpf' src={Cpf} alt="Logo Qualiopi" />
                </div>
            </article>
            <article className="timeline right-container withMovie">
                <h2>Qu’est ce qu’un bilan de compétences ?</h2>
                <div>
                    <p>Un bilan de compétences est un processus d'accompagnement personnalisé qui permet d'analyser vos compétences professionnelles, vos aptitudes et vos motivations. Il sert à définir un projet d'évolution ou de reconversion professionnelle. À travers des entretiens individuels, des tests et des exercices, vous pourrez construire ou valider un projet professionnel cohérent et réaliste, ou simplement mieux cerner vos aspirations pour donner un nouveau souffle à votre carrière.
                    </p>
                    <Movie src={climb} />
                </div>
            </article>
            <article className="timeline right-container articleCertif">
                <h2>Qu’est ce que l’APEC?</h2>
                <div className='articleCertif-container'>
                    <div className='articleCertif-container-text'>
                        <p>L'APEC, ou Association pour l'Emploi des Cadres, est une organisation française qui offre des services et des conseils aux cadres dans leur gestion de carrière. Elle accompagne également les entreprises dans leurs recrutements et la définition de leurs besoins en compétences. L'APEC peut jouer un rôle dans le bilan de compétences en fournissant des informations sur le marché du travail, des conseils en évolution professionnelle et en facilitant l'accès aux offres d'emploi correspondant aux aspirations et compétences des cadres.</p>
                    </div>
                    {/* <div className="articleCertif-pic">
                        < img src={Qualiopi} alt="Logo Qualiopi" />
                        < img className='LogCpf' src={Cpf} alt="Logo Qualiopi" />
                    </div> */}
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline left-container">
                <h2>L'expertise d'Attribut Conseils en bilan de compétences </h2>
                <p>Avec plus de 16 ans d'expérience, Attribut Conseils se positionne comme un expert dans le domaine du bilan de compétences. Notre équipe de formateurs, consultants et coachs experts utilisent des méthodologies éprouvées et adaptées à chaque profil pour vous guider vers le succès.
                </p>
                <p>Notre cabinet se distingue par une approche humaine et personnalisée, prenant en compte la diversité des problématiques professionnelles. Nous travaillons ensemble vers des solutions qui respectent votre individualité et vos aspirations. La réussite d'un bilan de compétences repose également sur des données et des tendances du marché du travail actuel.
                </p>
            </article>
            <article className="timeline left-container withMovie">
                <h3 className='text-centered'>Données chiffrées et tendances du marché du travail</h3>
                <div className='multiplePAndMovie'>
                    <div className='text-cointainer'>
                        <p className='text-end'>Le paysage professionnel évolue constamment, et les bilans de compétences deviennent un outil stratégique pour naviguer ces changements. Selon une étude menée par le Ministère du Travail français, environ 70 % des personnes ayant réalisé un bilan de compétences ont connu une progression significative dans leur carrière. De plus, une enquête de l'Observatoire du Bilan de Compétences indique que 80 % des participants ont gagné en confiance et en estime de soi suite à leur bilan.
                        </p>
                        <p>Les bilans de compétences reflètent une tendance croissante à la recherche de sens et d'épanouissement professionnel. La crise du Covid-19 n'a fait qu'amplifier ce besoin, poussant de nombreux professionnels à réévaluer leurs aspirations. Dans ce contexte, comment Attribut Conseils accompagne-t-il les professionnels vers une transition réussie ?..</p>

                    </div>
                    <Movie src={Arc} />
                </div>
            </article>
            <ContactButton text="Je demande un entretien d’informations gratuit et sans engagement " />
            <article className="timeline right-container">
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
            </article>
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