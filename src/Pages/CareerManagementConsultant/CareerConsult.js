import React from 'react';
import './careerConsult.scss'
import ContactButton from '../../Components/Button/ContactButton.js';

const CareerConsult = () => {
    return (
        <section className='CareerConsult'>
            <h2 className="CareerConsult-title">FORMATION METIER CONSULTANT EN GESTION DE CARRIERES</h2>
            <article className="CareerConsult-article">
                <p>Ce programme exhaustif est divisé en deux niveaux distincts : Consultant Niveau 1 et Consultant Niveau 2  axé expert bilan. Chez Attribut Conseils, nous comprenons que chaque apprenant est unique. C'est pourquoi nous offrons la possibilité de personnaliser votre formation selon vos besoins spécifiques. Nous pouvons également créer des modules de perfectionnement de courtes durées et sur mesure pour répondre à vos attentes particulières. N'hésitez pas à nous contacter pour discuter de vos besoins et élaborer ensemble un programme de formation adapté à vos objectifs. Ces formations sont accessibles en classe virtuelle ou en présentiel.
                </p>
                <ul>
                    <li className='CareerConsult-article-listTitle'>POUR QUI?
                        <p>Formateurs intervenants en pré-qualification, en orientation, en recherche d'emploi, Conseillers en bilan, en conseil, en orientation professionnelle, Chargés d'insertion social et professionnel. Consultants en formation, Assistantes sociales accompagnant des demandeurs d'emplois. Experts en bilan de compétences ou out-placement.
                        </p>
                        <p>Aux personnes en reconversion souhaitant investir le champ de l’accompagnement professionnel ou de la gestion des ressources humaines
                        </p>
                    </li>
                    <li className='CareerConsult-article-listTitle'>2 PARCOURS
                        <ul>
                            <li><strong>Le parcours 1</strong> est le tronc commun qui permet de pratiquer le métier, élargir et diversifier ses compétences et d’analyser ses pratiques professionnelles.
                            </li>
                            <li><strong>Le parcours 2 </strong>Enrichit la palette d’outils de l’accompagnateur et le professionnalise au métier de consultant expert en bilan de compétences
                            </li>
                        </ul>
                    </li>
                </ul>
                <h3 className="CareerConsult-article-title">TRONC COMMUN AUX 2 PARCOURS</h3>
                <ul className='CareerConsult-article-path'>
                    <li>Module 1  - <strong>Écouter le client :</strong>
                        <ul className='CareerConsult-article-path-detail'>
                            <li>Acquérir une compréhension approfondie de la motivation et des besoins individuels des clients en situation de licenciement, recherche d'emploi et reconversion.
                            </li>
                            <li>Analyser les différentes phases psychologiques des individus dans ces situations, qu'elles soient contraintes ou non.
                            </li>
                            <li>Identifier les mécanismes de défense, les freins, et le locus interne et externe des clients.
                            </li>
                            <li>Développer une compréhension profonde de la vision du monde du client.
                            </li>
                            <li>Acquérir des compétences en psychologie de l'orientation orientation éducative
                            </li>
                            <li>Maîtriser les techniques de questionnement et l'écoute active.
                            </li>
                            <li>Comprendre l'analyse systémique et savoir l'appliquer pour évaluer les situations des clients de manière holistique.
                            </li>
                            <li>Intégrer la grammaire des conduites à projet dans l'approche d'accompagnement.
                            </li>
                        </ul>
                    </li>
                    <li>Module 2  - <strong>Développement des Compétences du Consultant :</strong>
                        <ul className="CareerConsult-article-path-detail">
                            <li>Définir le cadre et les limites d'intervention de l'accompagnant en bilan de compétences.
                            </li>
                            <li>Approfondir les connaissances sur l'accompagnement éducatif dans la relation d'aide.
                            </li>
                            <li>Explorer les aspects psychologiques de la relation.</li>
                            <li>Adopter la posture du consultant en cultivant le non-savoir, le non-vouloir et le non-jugement dans les interactions avec les clients.</li>
                            <li>Co-construire l'accompagnement avec le client et définir le cadre d'intervention.</li>
                        </ul>
                    </li>
                </ul>
                <h3 className="CareerConsult-article-title">PARCOURS 1 - Consultant en gestion de carrière</h3>
                <ul className="CareerConsult-article-path">
                    <li>Module 3 - <strong>Comprendre son client et adapter son accompagnement</strong>
                        <ul className="CareerConsult-article-path-detail">
                            <li>Acquérir une méthodologie structurée fondée sur les principes de l’orientation éducative (ADVP)
                            </li>
                            <li>Maîtriser les 4 dimensions de la recherche d’emploi
                            </li>
                            <li>Acquérir les techniques du marketing emploi
                            </li>
                            <li>Accompagner le bénéficiaire dans l'élaboration de ses outils techniques
                            </li>
                            <li>Développer une aisance en communication pour optimiser les situations d'entretien
                            </li>
                        </ul></li>
                    <li>Module 4- <strong>Maîtrise de la Méthodologie du Projet :</strong>
                        <ul className="CareerConsult-article-path-detail">
                            <li>Apprendre à mener un entretien de diagnostic approfondi, à analyser les besoins des clients et à évaluer leur situation.
                            </li>
                            <li>Comprendre les différentes étapes de l'accompagnement et de la méthodologie de projet.
                            </li>
                            <li>Acquérir des compétences avancées en techniques de questionnement et en écoute active.
                            </li>
                            <li>Connaître les étapes de l’ADVP
                            </li>
                            <li>Avec le client, structurer la décision dans l'orientation en élaborant et mettant en œuvre un plan d'action détaillé.
                            </li>
                            <li>Avec le client, évaluer efficacement un projet en analysant ses résultats et en identifiant les domaines d'amélioration.
                            </li>
                        </ul></li>
                    <li>Module 5 - <strong>Expertise en Stratégie Marketing Emploi :</strong>
                        <ul className="CareerConsult-article-path-detail">
                            <li>Clarifier les projets d'emploi des clients et structurer leurs décisions en conséquence.
                            </li>
                            <li>Maîtriser les stratégies avancées de recherche d'emploi et effectuer une analyse approfondie du marché du travail.</li>
                            <li>Connaître et utiliser efficacement les outils pertinents pour aider les clients à atteindre leurs objectifs professionnels.</li>
                            <li>Ce programme de formation vise à doter les participants des connaissances, des compétences et de l'expertise nécessaires pour accompagner les clients de manière holistique, en tenant compte de leurs besoins individuels, de leurs aspirations professionnelles et des défis psychologiques auxquels ils peuvent être confrontés.</li>
                        </ul>
                    </li>
                </ul>
                <p className='CareerConsult-article-duration'><strong>Durée : 105 heures de formation</strong></p>
                <p className='CareerConsult-article-duration'><strong>Tarifs:</strong></p>
                <p className='CareerConsult-article-duration'>3800 TTC (prise en charge par votre employeur – Plan de développement des compétences)</p>
                <p className='CareerConsult-article-duration'>2700 TCC (pour les particuliers)</p>
                <h3 className="CareerConsult-article-title">PARCOURS 2 - Consultant EXPERT BILAN </h3>
                <p className='CareerConsult-article-pathIntro'>Situer le bilan de compétences parmi les autres pratiques d’orientation et de conseil</p>
                <p className='CareerConsult-article-pathIntro'>Connaître les familles d’outils utilisés</p>
                <p className='CareerConsult-article-pathIntro'>S’approprier les démarches et phases du bilan</p>
                <ul className="CareerConsult-article-path">
                    <li>Module 3 -  <strong>Maîtrise des fondamentaux du bilan de compétences :</strong>
                        <ul className='CareerConsult-article-path-detail'>
                            <li>Comprendre les fondements législatifs, le dispositif juridique et les cadres réglementaires du bilan de compétences.</li>
                            <li>Maîtriser la finalité, les dispositifs, la structure, la méthodologie et les outils du bilan de compétences.</li>
                            <li>Intégrer la déontologie dans la pratique professionnelle.</li>
                            <li>Maîtriser les différentes phases du bilan (entretiens préliminaire, investigation, conclusion, suivi à mois).</li>
                            <li>Intégrer la démarche QUALIOPI dans le bilan de compétences.</li>
                        </ul>
                    </li>
                    <li>Module 4 - <strong>Exploration des modèles et approches :</strong>
                        <ul className="CareerConsult-article-path-detail">
                            <li>Étudier les différents modèles et approches liés à la notion de compétences, de motivation et de personnalité.</li>
                            <li>Comprendre les théories de l'apprentissage, l'auto-formation, l'apprentissage expérientiel, la formation non formelle et le récit de vie et en décrypter les compétences.</li>
                            <li>Maîtriser la méthodologie de l'entretien d'analyse de l'expérience et des compétences.</li>
                            <li>Mettre en œuvre la démarche de portefeuille de compétences.</li>
                            <li>Appréhender la méthodologie des tests psychométriques, en respectant la législation et l'éthique.</li>
                            <li>Exploiter les tests et restituer les résultats.</li>
                            <li>Créer des outils d'auto-positionnement et d'évaluation pour les clients</li>
                            <li>Utiliser les outils du coaching et de la systémie dans la démarche de bilan.</li>
                        </ul>
                    </li>
                    <li>Module 5 - <strong>Approfondissement des techniques et stratégies :</strong>
                        <ul className="CareerConsult-article-path-detail">
                            <li>Approcher les intérêts et les valeurs des clients en utilisant des typologies telles que celle de Holland, et en employant des méthodes éducatives.
                            </li>
                            <li>Mettre en pratique la méthodologie de l'enquête métier et de la confirmation de projet.</li>
                            <li>Utiliser des techniques de recherche, lieux, outils et d'évaluation du marché de l'emploi.</li>
                            <li>Informer les clients sur leurs droits à la formation.</li>
                            <li>Savoir élaborer des stratégies et des plans d'actions en prenant en compte l’analyse des risques</li>
                            <li>Réaliser des synthèses efficaces du bilan de compétences.</li>
                            <li>Appliquer la méthodologie de l'entretien de restitution pour aider les clients à s’emparer et à utiliser les résultats de leur bilan.</li>
                        </ul>
                    </li>
                </ul>
                <p className='CareerConsult-article-duration'><strong>Durée de la Formation : 140 heures de formation</strong></p>
                <p className='CareerConsult-article-duration'><strong>Tarifs :</strong></p>
                <p className='CareerConsult-article-duration'>- 5295 € TTC (prise en charge par l'employeur – Plan de développement des compétences)</p>
                <p className='CareerConsult-article-duration'>   - 3295 € TTC (particuliers)</p>
            </article>
            <article className="CareerConsult-article_bgWhite">
                <p><strong>Ces formations intensives offre un parcours complet dans le domaine de l'accompagnement en bilan de compétences et en gestion de carrière. En mettant l'accent sur la compréhension approfondie des clients, le développement des compétences du consultant, et l'intégration des fondamentaux, elle prépare les participants à exceller dans ce domaine en constante évolution. Grâce à des méthodes pédagogiques actives, interactives et une approche pratique, les participants seront prêts à guider leurs clients vers des solutions professionnelles et personnelles épanouissantes. Cette formation constitue un investissement essentiel pour tous ceux cherchant à se démarquer en tant que consultants.
                </strong></p>
                <ContactButton />
            </article>
        </section>
    );
};

export default CareerConsult;