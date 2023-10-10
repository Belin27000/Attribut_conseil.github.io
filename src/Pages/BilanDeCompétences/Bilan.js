import React from 'react';
import './bilan.scss'
import Qualiopi from '../../Assets/Images/Logo_Qualiopi.png'
import ContactButton from '../../Components/Button/ContactButton.js';
import ExternButton from '../../Components/Button/ExternalButton/ExternButton.js';

const Bilan = () => {
    return (
        <section className='Bilan'>
            <h2 className="Bilan-title">Bilan de compétences</h2>
            <div className="Bilan-Qualiopi">
                <img src={Qualiopi} alt='qualiopi' />
                <div>
                    <h3>La certification Qualiopi a été délivrée pour la catégorie d'action suivante :
                        Bilan de compétences et actions de formation
                    </h3>
                    <p>Valable jusqu’au 31/12/2024</p>
                </div>
            </div>
            <article className="Bilan-article">
                <h3 className="Bilan-article-title">Définition :</h3>
                <p>Le bilan de compétences permet de faire le point sur ses compétences, aptitudes, motivations personnelles et professionnelles, ainsi que d'identifier ses ressources et ses potentiels.
                </p>
                <p>Le bilan de compétences est une action d'adaptation concourant au développement des compétences au sens de l'article L 6313-1 du Code du travail (extrait du texte de loi)</p>
            </article>
            <article className="Bilan-article">
                <h3 className="Bilan-article-title">Les objectifs :</h3>
                <p>Il vous permet de vous (re)positionner professionnellement, après avoir identifié vos potentialités et vos aspirations et de les avoir confrontés aux réalités du marché ou du contexte de votre entreprise.</p>
                <p>

                    Ce bilan vise à valoriser l'image de soi, à travers l'analyse dynamique de son parcours personnel et professionnel dans un objectif de réussite et pour atteindre un résultat concret. Il permet également d'agir en s'appuyant sur une meilleure connaissance de soi, à partir d'un projet clair et un plan d'action défini.
                </p>
            </article>
            <article className="Bilan-article">
                <h3 className="Bilan-article-title">Pour qui :</h3>
                <p>il n’est pas nécessaire de posséder, avant l’entrée en formation des prérequis spécifiques.</p>
                <p>
                    Toutes personnes souhaitant bénéficier d’un accompagnement, d’une aide dans l’élaboration de ses projets professionnels à venir (orientation, évolution de poste, formation, V.A.E., repositionnement professionnel suite à un licenciement, …) quel que soit son statut : cadre, ETAM, employé, étudiant, jeunes …de tous horizons professionnels.</p>
                <p>
                    Même si les motifs sont extrêmement variés, 4 grandes tendances se dégagent :</p>
                <p>
                    Enrichir ses compétences, obtenir un diplôme, creuser une idée ou une envie de changement, se reconvertir, se lancer dans la création d'une entreprise.</p>
                <p>
                    Changer quelque chose et quitter ce qu'on connait. Cet élan peut être provoqué par de la déception face à son activité professionnelle actuelle, ou bien une perte d'intérêt, de motivation ou de confiance.</p>
                <p>
                    Anticiper son repositionnement sur le marché de l'emploi face à un contexte de licenciement, de mutation, ou dans le cas d'un métier en voie de disparition.</p>
                <p>
                    Trouver des réponses quand on est perdu et qu'on ne sait pas dans quelle voie s'engager.
                </p>
                <p>
                    Quelle que soit la situation, le bilan de compétences est un dispositif puissant lorsqu'on souhaite explorer les meilleures options pour un avenir professionnel épanouissant.
                </p>
            </article>
            <article className='Bilan-article_bgWhite'>
                <h3 className="Bilan-article_blue">Réserver votre bilan dès maintenant, à distance ou en présentiel : </h3>
                <ExternButton text='Je suis éligible au CPF' />
                <ContactButton text='Je contacte Attribut conseils' />
                <p className='Bilan-article_blue'>Délais d’accès : 10 jours maximum</p>
            </article>
            <article className="Bilan-article">
                <h3 className="Bilan-article-title">Déroulement :</h3>
                <p>Nous proposons un accompagnement sur une durée de 3 mois en moyenne, avec des entretiens et des temps d'investigation personnelle. Les entretiens se déroulent en face à face avec un consultant spécialisé ou à distance en visio.</p>
                <p>
                    Un entretien préliminaire gratuit et sans engagement marque la première étape. C'est l'occasion pour vous de rencontrer le consultant, de poser des questions sur son profil ou sur l'accompagnement lui-même, et d'exposer les raisons de votre démarche.</p>
                <p>                    Le bilan est conduit par un consultant et se déroule sur 24H ; dont 16H d’entretiens individuels au minimum, 2 H de tests et 6 H de travail personnel (recherche documentaire, enquêtes …)</p>
                <p>À l'issue du bilan, une synthèse est réalisée par notre Cabinet. Même si le bilan de compétences est financé par votre employeur, la synthèse est confidentielle et vous appartient. Vous pouvez choisir de la transmettre ou non à votre employeur.
                </p>
                <p>
                    ATTRIBUT CONSEILS est tenu de respecter le caractère confidentiel des informations données et est soumis au secret professionnel.</p>
            </article>
            <article className="Bilan-article contenu">
                <h3 className="Bilan-article-title">Le contenu </h3>
                <h3 className="Bilan-article-title">                    Le bilan de compétences comprend les trois phases suivantes :</h3>
                <ol className='Bilan-article-list'>
                    <li className='Bilan-article-list-header'>Une phase préliminaire qui a pour objet :
                        <ul>
                            <li>d'analyser la demande et le besoin du bénéficiaire ;</li>
                            <li>de déterminer le format le plus adapté à la situation et au besoin ;</li>
                            <li>de définir conjointement les modalités de déroulement du bilan.
                            </li>
                        </ul>
                    </li>
                    <li className='Bilan-article-list-header'>Une phase d'investigation
                        <ul>
                            <li>permettant au bénéficiaire soit de construire son projet professionnel et d'en vérifier la pertinence, soit d'élaborer une ou plusieurs alternatives.</li>
                        </ul>
                    </li>
                    <li className='Bilan-article-list-header'>Une phase de conclusions qui, par la voie d'entretiens personnalisés, permet au bénéficiaire :
                        <ul>
                            <li>de s'approprier les résultats détaillés de la phase d'investigation ;</li>
                            <li>de recenser les conditions et moyens favorisant la réalisation du ou des projets professionnels ;</li>
                            <li>de prévoir les principales modalités et étapes du ou des projets professionnels, dont la possibilité de bénéficier d'un entretien de suivi avec le prestataire de bilan de compétences.</li>
                        </ul>
                    </li>
                </ol>
            </article>

        </section >
    );
};

export default Bilan;