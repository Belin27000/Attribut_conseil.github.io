import React from 'react';
import './psyWork.scss'
import ContactButton from '../../Components/Button/ContactButton.js';
import ScrollToTop from '../../Components/Button/ScrollButton/ScrollToTop.js';

const PsyWork = () => {
    return (
        <section className='PsyWork'>
            <h2 className="PsyWork-title">Psychologie du travail </h2>
            <article className="PsyWork-article">
                <p>La souffrance au travail est une réalité de plus en plus préoccupante, affectant la santé et le bien-être des salariés. Cependant, il est essentiel de savoir qu'il existe des solutions efficaces pour surmonter cette épreuve. Notre accompagnement en psychologie du travail met en avant l'intérêt des thérapies brèves et systémiques pour vous aider à retrouver l'équilibre et la sérénité.
                </p>
                <p><strong>Cet accompagnement s’adresse aux particuliers en visio ou en présentiel, ou aux entreprises souhaitant mettre en place une cellule d’écoute pour maintenir le bien être de leurs salariés.
                </strong></p>
                <h3 className="PsyWork-article-title">NOTRE APPROCHE THÉRAPEUTIQUE</h3>
                <p>Les thérapies brèves se distinguent par leur <strong>approche ciblée et orientée vers des résultats rapides</strong>. Elles mettent l'accent sur la résolution des problèmes spécifiques liés au mal être en identifiant les schémas de pensée et de comportement qui contribuent à son maintien. En travaillant de manière collaborative et active, nous visons à apporter des changements significatifs et durables, favorisant ainsi votre rétablissement.
                </p>
                <p>Parallèlement, les thérapies systémiques considèrent le contexte relationnel et organisationnel dans lequel le mal être s'est développé. Elles mettent en lumière les interactions complexes entre l'individu, son environnement de travail, ses collègues et sa vie personnelle. En explorant ces relations, nous pouvons identifier les dynamiques à l'origine de la souffrance et développer des stratégies de prévention et d'intervention adaptées.
                </p>
                <p>En combinant les approches brèves et systémiques, nous offrons un accompagnement holistique, prenant en compte votre bien-être psychologique et votre environnement professionnel. Notre objectif est de vous aider à comprendre les facteurs contributifs à votre mal être, à développer des compétences adaptatives et à favoriser des changements positifs dans votre vie professionnelle.
                </p>
                <p>Avec notre accompagnement axé sur les thérapies brèves et systémiques, vous pouvez retrouver un équilibre durable, prévenir la rechute et redonner un sens à votre travail.
                </p>
            </article>
            <article className="PsyWork-article_bgWhite">
                <h3 className="PsyWork-article_blue">Réserver votre accompagnement dès maintenant, à distance ou en présentiel : </h3>
                <ContactButton text={'Je contacte Attribut conseils'} />
            </article>
            <article className="PsyWork-article">
                <h3 className="PsyWork-article-title">LES ÉTAPES DE L’ACCOMPAGNEMENT</h3>
                <p><strong>Évaluation personnalisée :</strong> Nous commençons par une évaluation approfondie de votre situation pour comprendre les facteurs qui ont contribué à votre mal être. Cette étape nous permet de personnaliser notre accompagnement en fonction de vos besoins spécifiques et pour vous de formuler vos objectifs à travers cet accompagnement
                </p>
                <p><strong>Soutien émotionnel et psychologique : </strong>Notre équipe de psychologues qualifiés vous offre un soutien empathique et professionnel pour vous aider à gérer le stress, l'anxiété et les émotions liés à votre situation psychologique. Nous travaillons ensemble pour renforcer votre résilience et vous permettre de rebondir.
                </p>
                <p><strong>Rétablissement progressif : </strong>Nous vous aidons à établir un plan de rétablissement progressif, en vous guidant dans la gestion de votre charge de travail, en identifiant les éléments déclencheurs et en vous proposant des stratégies pour restaurer votre énergie et votre motivation.
                </p>
                <p><strong>Thérapies brèves et systémiques : </strong>Notre approche thérapeutique repose sur des techniques de thérapies brèves et systémiques, qui se concentrent sur une résolution rapide des problèmes en identifiant les schémas de pensée et de comportement qui maintiennent la situation. Nous travaillons ensemble pour apporter des changements significatifs et durables.
                </p>
                <p><strong>Développement de compétences adaptatives : </strong>Nous vous proposons des outils et des techniques pratiques pour renforcer vos compétences en gestion du stress, en gestion du temps, en communication et en assertivité. Ces compétences vous aideront à prévenir la rechute et à maintenir un équilibre durable dans votre vie professionnelle.
                </p>
                <p><strong>Reconversion et réorientation professionnelle : </strong>Si nécessaire, nous vous soutenons dans votre réflexion sur votre carrière et vous accompagnons dans votre reconversion professionnelle, en tenant compte de vos intérêts, de vos compétences et de vos aspirations personnelles.
                </p>
                <p><strong>Suivi et soutien continu : </strong>Notre engagement envers vous ne s'arrête pas à la fin de l'accompagnement initial. Nous vous offrons un suivi régulier pour nous assurer de votre progression et pour vous soutenir dans votre parcours de rétablissement à long terme.
                </p>
                <h3 className="PsyWork-article-subtitle">Nos tarifs
                </h3>
                <p>Pour les particuliers : Le coût de la séance d’1 heure est de 60 euros en visio et de 70 euros en présentiel.
                </p>
                <p>Pour les entreprises : Nous contacter afin d’établir un devis
                </p>
                <p><strong>Retrouvez votre équilibre. Contactez notre équipe diplômée, psychologues du travail et Thérapie brèves pour bénéficier de notre accompagnement.
                </strong></p>
            </article>
            <ScrollToTop />
        </section>
    );
};

export default PsyWork;