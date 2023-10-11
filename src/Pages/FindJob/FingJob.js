import React from 'react';
import './findJob.scss'
import ScrollToTop from '../../Components/Button/ScrollButton/ScrollToTop.js';
import ContactButton from '../../Components/Button/ContactButton.js';

const FingJob = () => {
    return (
        <section className='FindJob'>
            <h2 className="FindJob-title">Accompagnement  à la recherche d‘emploi </h2>
            <article className="FindJob-article">
                <h3 className="FindJob-article-title">Accompagnement emploi</h3>
                <p>Notre accompagnement commence par un bilan personnel et professionnel, visant à faire émerger vos traits de personnalité marquants et vos potentialités. Nous <strong>analysons vos intérêts, aspirations, motivations et compétences transférables</strong> afin de mieux vous connaître et de définir une direction professionnelle qui vous correspond.
                </p>
                <p>Nous vous aidons à repérer les activités et les contextes qui vous conviennent le mieux afin de mieux <strong>cibler votre recherche d’emploi</strong>.
                </p>
                <p>Notre approche personnalisée et notre expertise dans l'accompagnement professionnel vous permettront de faire un bilan professionnel, d'explorer de nouvelles opportunités et de vous positionner de manière efficace dans votre domaine d'activité. Que vous souhaitiez évoluer dans votre carrière actuelle ou vous reconvertir professionnellement, nous sommes là pour vous guider et vous soutenir tout au long de votre parcours et vous apporter les techniques pour atteindre votre objectif.
                </p>
                <p>Nos consultants sont des <strong>experts du marché de l’emploi, du bilan de compétences et de la communication</strong>.</p>
                <p>Selon ce que vous souhaitez, cet accompagnement est individualisé et <strong>à la carte selon vos besoins</strong>.</p>
            </article>
            <article className="FindJob-article_bgWhite">
                <h3 className="FindJob-article_blue">Réserver votre acccompagnement emploi dès maintenant, à distance ou en présentiel : </h3>
                <ContactButton text={'Je contacte Attribut conseils'} />
            </article>
            <article className="FindJob-article withList">
                <h3 className="FindJob-article-title">Stratégie marketing de la recherche d’emploi</h3>
                <p>Dans cette partie de l’accompagnement, nous abordons la stratégie marketing de la recherche d'emploi, qui vise à maximiser vos chances de trouver un emploi en utilisant des techniques et des outils de communication efficaces. Vous découvrirez les meilleures pratiques pour analyser vos cibles, préparer des listings d'entreprises pertinentes et mettre en place des outils de communication professionnels tels que la charte graphique, le logo et la signature d'e-mail. En développant une stratégie marketing solide, vous pourrez vous démarquer sur le marché de l'emploi et attirer l'attention des employeurs potentiels.
                </p>
                <ul>
                    <li>Stratégies et techniques commerciales
                    </li>
                    <li>Analyser ses cibles et préparation de listings d'entreprises.
                    </li>
                    <li>Mettre en place les outils de communication tels que la charte graphique, le logo et la signature d'e-mail.
                    </li>
                    <li>Réalisation des outils de communication et promotion de soi :
                    </li>
                    <li>Réalisation des CV ciblés, lettres de motivation, mailing,
                    </li>
                    <li>Communication sur les réseaux sociaux professionnels
                    </li>
                    <li>Mise en valeur de l'identité professionnelle cohérente et solide
                    </li>
                    <li>Mise en place de la stratégie réseau, notamment sur LinkedIn, réseau d’entreprises</li>
                </ul>
                <h3 className="FindJob-article-subtitle">Entretiens d'embauche et négociation :</h3>
                <ul>
                    <li>Techniques de communication efficaces, entrainement à l’entretien (visio, face à face, jury..)
                    </li>
                    <li>Préparation, gestion et optimisation des entretiens</li>
                </ul>
                <h3 className="FindJob-article-subtitle">Positionnement sur le marché de l'emploi et/ou de la formation :</h3>
                <ul>
                    <li> Utilisation des canaux d'accès au marché de l'emploi et de la formation</li>
                    <li>Proposition d'offres collectées par l'équipe de prospection du cabinet</li>
                    <li>Appui des candidatures auprès des entreprise</li>
                    <li>Recherche d'offres d'emploi et de formation</li>
                    <li>Analyse et réponse aux annonces</li>
                    <li>Envoi de mailings ciblés et candidatures spontanées</li>
                    <li>Mise en ligne du CV et des alertes adaptées</li>
                </ul>
                <h3 className="FindJob-article-subtitle">Entretien individuel de suivi :</h3>
                <p>L'entretien individuel de suivi est une étape essentielle dans votre processus de recherche d'emploi. C'est l'occasion d'analyser les actions que vous avez entreprises, d'évaluer leurs résultats et de redéfinir votre stratégie si nécessaire.
                </p>
                <p>Dans cette partie de l’accompagnement, nous vous guiderons à travers une analyse quantitative et qualitative de vos actions, en mettant l'accent sur l'importance de mesurer vos progrès. Ensemble, nous identifierons les domaines où des ajustements sont nécessaires et vous proposerons des mesures adaptées pour améliorer votre recherche d'emploi.</p>
                <h3 className="FindJob-article-subtitle">Analyse des actions menées :</h3>
                <ul>
                    <li>Évaluation quantitative et qualitative des actions réalisées</li>
                    <li>Redéfinition de la stratégie si nécessaire</li>
                    <li>Proposition de mesures adaptées en fonction des résultats et observations</li>
                </ul>.
                <h3 className="FindJob-article-subtitle">Suivi de la période d’essai : </h3>
                <p>La période d'essai est une étape cruciale pour vous intégrer avec succès dans votre nouvel emploi. Dans cette partie de l’accompagnement, nous vous aiderons à solidifier votre période d’essai pendant cette période, en mettant l'accent sur le suivi de votre intégration, l'accompagnement de la période de transition et l'identification des éventuelles problématiques. Nous travaillerons ensemble sur la définition d'objectifs clairs à atteindre et vous fournirons des outils et des stratégies pour les atteindre. En recherchant des solutions efficaces, nous vous aiderons à surmonter les défis potentiels et à réussir votre période d'essai avec confiance.
                </p>
                <ul>
                    <li>Solidification de l'accompagnement</li>
                    <li>Suivi de l'intégration</li>
                    <li>Accompagnement de la période de transition</li>
                    <li>Identification et analyse des éventuelles problématiques</li>
                    <li>Travail sur les objectifs à atteindre</li>
                    <li>Recherches de solutions</li>
                </ul>
            </article>
            <article className="FindJob-article_bgWhite">
                <h3 className="FindJob-article_blue">EN CONCLUSION : </h3>
                <p>Nous sommes fiers de notre solide expérience dans l'accompagnement de collectifs et d'individuels dans leur parcours professionnel. Au fil des années, nous avons travaillé avec plus de 3000 personnes de tous niveaux, de tout âge et de tous secteurs.
                </p>
                <p>Offrant nos services d'outplacement, d’accompagnement à la <strong>stratégie de recherche d’emploi</strong> et développé des groupes spécifiques dédiés aux seniors, aux femmes, aux jeunes en partenariat avec la Préfecture et le Pôle Emploi.
                </p>
                <p>Cette expérience diversifiée nous permet d'affiner nos méthodes et une expertise approfondie dans le domaine de l’accompagnement à l’emploi.</p>
            </article>
            <article className="FindJob-article">
                <h3 className="FindJob-article-title">Nos tarifs</h3>
                <p>Le premier entretien d’analyse du besoin est gratuit et sans engagement. Le coût de l’accompagnement est évalué lors de l’entretien préliminaire et varie en fonction de la situation du client ainsi que des modalités de financement.
                </p>
            </article>
            <ScrollToTop />
        </section>
    );
};

export default FingJob;