import React from 'react';
import './businessCreationTraining.scss'
import Qualiopi from '../../Assets/Images/Logo_Qualiopi.png'
import ExternButton from '../../Components/Button/ExternalButton/ExternButton.js';
import ContactButton from '../../Components/Button/ContactButton.js';


const BusinessCreationTraining = () => {
    return (
        <section className='Bct'>
            <h2 className="Bct-title">FORMATION CRÉATION D‘ENTREPRISE INDIVIDUALISÉE </h2>
            <div className="Bct-Qualiopi">
                <img src={Qualiopi} alt='qualiopi' />
                <div>
                    <h3>La certification Qualiopi a été délivrée pour la catégorie d'action suivante :
                        Bilan de compétences et actions de formation
                    </h3>
                    <p>Valable jusqu’au 31/12/2024</p>
                </div>
            </div>
            <article className="Bct-article">
                <h3 className="Bct-article-title">FINALITÉS</h3>
                <p>A l'issue de ce parcours de formation, le créateur ou repreneur d'entreprise aura vérifié la fiabilité de son projet grâce a un diagnostic et sera bien informé sur toutes les étapes de la création d'entreprise.</p>
                <p>Il aura été guidé, par des outils, du conseil et de l'accompagnement personnel, pour construire son rétroplanning et savoir quelles étapes il doit suivre pour créer son entreprise.</p>
                <p>Plus particulièrement, il aura compris comment réaliser une étude de marché, comment rédiger un business plan. Mais aussi, il aura reçu les informations nécessaires pour faire son choix de statut juridique et saura comment se diriger vers les professionnels adéquats pour confirmer ce choix (comptable, avocat, notaire, ...).</p>
                <p>Enfin, il aura été informé sur la marche à suivre pour effectuer les démarches administratives de la création d'entreprise auprès du cfe ou de l'urssaf.</p>
            </article>
            <article className="Bct-article_bgWhite">
                <h3 className="Bct-article_blue">Réserver votre formation dès maintenant, à distance ou en présentiel :</h3>
                <div>
                    <ExternButton text='Je suis éligible au CPF' />
                    <ContactButton />
                </div>
                <p className="Bct-article_blue">Délais d’accès : 10 jours maximum</p>
            </article>
            <article className="Bct-article">
                <h3 className="Bct-article-title">PROGRAMME</h3>
                <p>Chaque formation à la création d’entreprise est spécifique à un individu, c’est une formation individualisée. Cette formation s’appuie sur une méthode générale mais avec des contenus et outils adaptés au cas particulier (Situation et contexte du client, objectif, niveau, fonction...).
                </p>
                <ol>
                    <li className="Bct-article-subtitle">UN ENTRETIEN PRÉLIMINAIRE</li>
                    <ul>

                        <li className='simpleText'><p>Sans engagement marque la première étape. C'est l'occasion de faire connaissance avec le consultant formateur, de poser des questions sur l’accompagnement et d'exposer le projet.
                        </p></li>
                        <li className='simpleText'><p>Le consultant :</p></li>
                        <li className='simpleText'><p>Fera préciser l'objectif de la demande et les circonstances du projet afin d'analyser les besoins pour co construire la formation avec vous.</p></li>
                        <li className='simpleText'><p>Il vous Informera de la méthodologie, puis présentera le cabinet, les intervenants, le prix.</p></li>
                        <li className='simpleText'><p>La formation se déroule en général entre 8 à 12 entretiens d’1 heure 30.</p></li>
                        <li className='simpleText'><p>Les rendez-vous sont réalisés sous format d'entretiens en face à face.</p></li>
                        <li className='simpleText'><p>Qu'il s'agisse de présentiel ou de distantiel, ces entretiens sont individuels et personnalisés.</p></li>
                        <li className='simpleText'><p>Créer une entreprise est une démarche logique et itérative. Votre projet de création va vous amener à suivre des étapes et revenir sans cesse en arrière pour ajuster votre projet aux réalités du marché.</p></li>
                    </ul>
                    <li className="Bct-article-subtitle">LE PROJET</li>
                    <ul>

                        <li className='simpleText'><p>L'objectif de cette étape est de prendre le temps de bien réfléchir à son projet personnel en amont, de faire le point sur ses compétences, de se fixer un cap, des objectifs personnels, d’identifier les différentes contraintes qui pèsent sur le projet, de quantifier les moyens à mettre en oeuvre pour se lancer et d’anticiper d’éventuelles difficultés.</p></li>
                        <li className='simpleText'><p>Il s'agit de :</p>
                            <ul>
                                <li>Analyser ses compétences et points d'appui</li>
                                <li>Construire son projet personnel et mettre en évidence sa motivation à créer</li>
                                <li>Définir et évaluer l’idée</li>
                                <li>Évaluer la cohérence du Projet</li>
                            </ul>
                        </li>
                    </ul>
                    <li className="Bct-article-subtitle">LE BUSINESS PLAN</li>
                    <ul>
                        <li className='simpleText'><p>L'objectif de cette étape est de définir une stratégie d'entreprise et de maitriser les outils d'études de marché afin d'élaborer un plan d'actions.</p></li>
                        <li className='simpleText'><p>Il s'agit de :</p>
                            <ul>
                                <li>Etablir un résumé du plan de développement</li>
                                <li>Réaliser l’étude de marché :
                                    <ul>
                                        <li className="sublist">Nature, tendances du marché</li>
                                        <li className="sublist">Concurrence</li>
                                        <li className="sublist">Mon offre, description du produits/services</li>
                                    </ul>
                                </li>
                                <li>Fixer sa vision et ses objectifs stratégiques :
                                    <ul>
                                        <li className="sublist">La stratégie commerciale, communication</li>
                                        <li className="sublist">Les outils de réflexion : découvrir Les outils d'analyse comme le Swot</li>
                                    </ul>
                                </li>
                                <li>Mettre en place les moyens et organisation</li>
                            </ul>
                        </li>
                    </ul>
                    <li className="Bct-article-subtitle">L'ACTIVITÉ ET LES MOYENS</li>
                    <ul>

                        <li className='simpleText'><p>L'objectif de cette étape est d'être capable de définir l'ensemble des moyens nécessaires au bon fonctionnement de l'entreprise et de les chiffrer.
                        </p></li>
                        <li className='simpleText'><p>Il s'agit de :</p>
                            <ul>
                                <li>Faire les prévisions de chiffre d'affaires et des achats</li>
                                <li>Définir les moyens de production – Les investissements/leasing Les locaux</li>
                                <li>Prévoir les moyens humains</li>
                                <li>Connaitre les charges diverses</li>
                                <li>Définir la rentabilité</li>
                            </ul>
                        </li>
                    </ul>
                    <li className="Bct-article-subtitle">LE FINANCEMENT DU PROJET</li>
                    <ul>
                        <li className='simpleText'><p>L'objectif de cette étape est de connaitre et manipuler les outils de financement du projet.</p></li>
                        <li className='simpleText'><p>Il s'agit de :</p>
                            <ul>
                                <li>Connaitre le financement en bref, notions sur le bilan</li>
                                <li>Savoir ce que sont les fonds propres et immobilisations</li>
                                <li>Établir ses besoins en fond de roulement (BFR)</li>
                                <li>Connaitre les différents emprunts et subventions</li>
                            </ul>
                        </li>
                    </ul>
                    <li className="Bct-article-subtitle">LES PRÉVISIONS FINANCIÈRES</li>
                    <ul>
                        <li className='simpleText'><p>L'objectif de cette étape est de préparer ses tableaux de bords de suivi financiers.</p></li>
                        <li className='simpleText'><p>Il s'agit de :</p>
                            <ul>
                                <li>Réaliser le tableau de compte de résultat prévisionnel</li>
                                <li>Chiffrer l'évolution du chiffre d'affaires</li>
                                <li>Faire les tableaux de financement</li>
                                <li>Prévoir la trésorerie</li>
                                <li>Établir l'évolution de la trésorerie par mois</li>
                                <li>Information : les outils comptables : comprendre les outils comptables qui constitue un prévisionnel financier</li>
                                <li>Modèles : plan de financement, compte de résultat prévisionnel, plan de trésorerie.</li>
                            </ul>
                        </li>
                    </ul>

                    <li className="Bct-article-subtitle">LE STATUT JURIDIQUE DE L'ENTREPRISE ET LE RÉGIME SOCIAL DU DIRIGEANT</li>
                    <ul>
                        <li className='simpleText'><p>L'objectif de cette étape est de bien connaitre les différents statuts afin de choisir celui le mieux adapté, celui qui possède le plus d'avantages et présente le minimum de risques pour vous.</p></li>
                        <li className='simpleText'><p>Il s'agit de :</p>
                            <ul>
                                <li>Connaitre les différents statuts juridiques</li>
                                <li>S'informer sur le régime social du dirigeant</li>
                                <li>Choisir le statut adapté au projet</li>
                                <li>Connaître la fiscalité</li>
                            </ul>
                        </li>
                    </ul>
                    <li className="Bct-article-subtitle">LES DEMARCHE POUR LA CRÉATION D'ENTREPRISE</li>
                    <ul>
                        <li className='simpleText'><p>L'objectif de cette étape est de fixer un plan d'actions des formalités à entreprendre selon votre entreprise, son statut et ses spécificités.</p></li>
                        <li className='simpleText'><p>Il s'agit de :</p>
                            <ul>
                                <li>Connaitre l'ensemble des formalités à accomplir et le coût</li>
                                <li>Connaître les structures de dépôt de dossier Centre de formalités des entreprises (CFE)..</li>
                                <li>Comprendre ce qu’est un numéro d’identification de votre entreprise, numéro Siren. Les différentes démarches administratives. (infogreffe, etc.)</li>
                            </ul>
                        </li>
                    </ul>
                    <li className="Bct-article-subtitle">SUIVI À 6 MOIS</li>
                    <li className='simpleText'><p>Il s'agit d'un rdv 6 mois après le dernier entretien, afin d'évaluer l'avancement du projet et d'apporter des conseils et informations selon les besoins exprimés.</p></li>
                </ol>
                <ul className='Bct-article-doc'>
                    <li>Programme</li>
                    <li>Tarifs et conditions générales de vente</li>
                    <li>Déontologie et éthique</li>
                    <li>Chiffres clés de ma satisfaction clients 2023</li>
                </ul>
            </article>

        </section >
    );
};

export default BusinessCreationTraining;