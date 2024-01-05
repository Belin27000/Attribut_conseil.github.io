import React from 'react';
import './trainingTrainer.scss'
import ContactButton from '../../Components/Button/ContactButton.js';
import DownloadFile from '../../Components/FileLink/DownloadFile.js';
import allFiles from '../../_Services/fileToDownload.service.js';

const TrainingTrainer = () => {
    return (
        <section className='TrainingTrainer'>
            <h2 className="TrainingTrainer-title">FORMATION METIER FORMATEUR ADULTES
            </h2>
            <article className="TrainingTrainer-article">
                <p>Ce programme exhaustif est divisé en deux niveaux distincts : Formateur Niveau 1 et Formateur Niveau 2 . Chez Attribut Conseils, nous comprenons que chaque apprenant est unique. C'est pourquoi nous offrons la possibilité de personnaliser votre formation selon vos besoins spécifiques. Nous pouvons également créer des modules de perfectionnement de courtes durées et sur mesure pour répondre à vos attentes particulières. N'hésitez pas à nous contacter pour discuter de vos besoins et élaborer ensemble un programme de formation adapté à vos objectifs. Ces formations sont accessibles en classe virtuelle ou en présentiel.</p>
                <ul>
                    <li className='TrainingTrainer-article-listTitle'>POUR QUI?
                        <p>Formateurs intervenants </p>
                        <p>Enseignants</p>
                        <p>Consultants, chef de projet formation, ingenieurs pédagogiques</p>
                        <p>Formateurs de formateurs en centre de formation </p>
                        <p>Concepteurs/organisateurs de formations</p>
                        <p>Aux personnes en reconversion souhaitant investir dans le champ de la formation professionnelle,</p>
                    </li>
                    <li className='TrainingTrainer-article-listTitle'>2 PARCOURS
                        <p><strong>Niveau 1</strong></p>
                        <p>Permet aux futurs formateurs d’obtenir toutes les compétences nécessaires à la création et à la mise en place d’une action de formation.
                        </p>
                        <p><strong>Niveau 2</strong></p>
                        <p>Accentue l’accompagnement des apprenants dans leur démarche d'employabilité sur le marché du travail.</p>
                        <p>Et permet au formateur de contribuer à l’évaluation de la formation et des dispositifs mis en place.</p>
                        <p><strong>Les deux niveaux sont indépendants l'un de l'autre.
                        </strong></p>

                    </li>
                </ul>
                <h3 className="TrainingTrainer-article-title">NIVEAU 1 - PR﻿ÉPARATION D'UNE ACTION DE FORMATION</h3>
                <p className='TrainingTrainer-article-pathIntro'>Savoir analyser la demande de formation </p>
                <p className='TrainingTrainer-article-pathIntro'>Structurer et mettre en place la formation (Analyse, conception, évaluation) </p>
                <p className='TrainingTrainer-article-pathIntro'>Animer une formation et évaluer son impact sur l’organisation</p>
                <ul className='TrainingTrainer-article-path'>
                    <li>Module 1  - <strong>Réponse aux cahiers des charges et conception du programme pédagogique</strong>
                        <ul className='TrainingTrainer-article-path-detail'>
                            <li>Comprendre la demande du client et formuler une réponse au cahier des charges</li>
                            <li>Différencier finalité, but, objectifs, objectifs opérationnels</li>
                            <li>Communiquer avec le commanditaire</li>
                            <li>Analyser les compétences requises et celles déjà acquises par les apprenants</li>
                            <li>Maintenir une cohérence entre les méthodes pédagogiques et les objectifs fixés</li>
                            <li>Assurer une progression pédagogique</li>
                            <li>Savoir se tenir à jour sur les techniques pédagogiques</li>
                        </ul>
                    </li>
                    <li>Module 3  - <strong>Savoir évaluer une formation</strong>
                        <ul className="TrainingTrainer-article-path-detail">
                            <li>Savoir s’auto-évaluer en tant que formateur</li>
                            <li>Evaluation des prérequis pour la formation</li>
                            <li>Mettre en place différents types d’évaluation pour les acquis de la formation et leur opérationnalité</li>
                            <li>Evaluation de la qualité de la formation, mettre en place des questionnaires de satisfaction</li>
                            <li>Connaitre les certifications qualité</li>
                        </ul>
                    </li>
                </ul>
                <p className='TrainingTrainer-article-duration'><strong>Durée : 3 semaines</strong></p>
                <p className='TrainingTrainer-article-duration'><strong>Tarifs :</strong></p>
                <p className='TrainingTrainer-article-duration'>3800 TTC (prise en charge par votre employeur – Plan de développement des compétences)</p>
                <p className='TrainingTrainer-article-duration'>2700 TCC (pour les particuliers)</p>
                <h3 className="TrainingTrainer-article-title">NIVEAU 2  - CONTRIBUER À L'ÉLABORATION DES DISPOSITIFS DE FORMATION ET ACCOMPAGNER LES APPRENANTS DANS LEURS PARCOURS</h3>
                <p className='TrainingTrainer-article-pathIntro'>Contribuer à l’élaboration des dispositifs de formation </p>
                <p className='TrainingTrainer-article-pathIntro'>Contribuer à l’élaboration du processus qualité en vigueur</p>
                <p className='TrainingTrainer-article-pathIntro'>Accompagner les apprenants dans leurs parcours</p>
                <ul className="TrainingTrainer-article-path">
                    <li>Module 1 - <strong>Contribuer à l’évaluation et ou à l’adaptation des dispositifs de formation pouvant combiner différentes modalités et situations pédagogiques
                    </strong>
                        <ul className="TrainingTrainer-article-path-detail">
                            <li>Utilisation des logiciels de gestion, plateforme LMS, elearning</li>
                            <li>Création d’outils elearning, outils pédagogiques</li>
                            <li>Proposer des méthodes pédagogiques pertinentes par rapport au public et au contexte social</li>
                            <li>Utilisation des formulations favorisant une relation formative de confiance dans un accompagnement à distance.</li>
                            <li>Développer sa créativité</li>
                            <li>Elaborer des méthodes de suivi spécifiques à chaque modalité</li>
                        </ul></li>
                    <li>Module 2- <strong>Accompagner les apprenants dans la construction et la mise en œuvre de leurs parcours</strong>
                        <ul className="TrainingTrainer-article-path-detail">
                            <li>Elaborer un outil de positionnement, outils d’évaluation, construire ou adapter les outils nécessaires au suivi des parcours</li>
                            <li>Analyser les difficultés d’apprentissage avec les apprenants </li>
                            <li>Faire le lien entre le statut de la personne et l’emploi visé</li>
                            <li>Mettre en œuvre des stratégies favorisant l’analyse réflexive et l’auto-évaluation</li>
                        </ul>
                    </li>
                    <li>Module 3 - <strong>Contribuer à l’évaluation d’un dispositif et rendre compte
                    </strong>
                        <ul className="TrainingTrainer-article-path-detail">
                            <li>Connaitre les partenaires de la formation professionnelle</li>
                            <li>Mettre en place la qualité selon la certification en vigueur</li>
                            <li>Assurer le suivi et s’assurer de sa conformité au regard des certifications qualité</li>
                            <li>Analyser l’impact de la formation par rapport à la commande sur les postes de travail</li>
                            <li>Faire le bilan de la formation et le présenter au commanditaire </li>
                        </ul>
                    </li>
                </ul>
                <p className='TrainingTrainer-article-duration'><strong>Durée : 3 semaines</strong></p>
                <p className='TrainingTrainer-article-duration'><strong>3800 TTC (prise en charge par votre employeur – Plan de développement des compétences)</strong></p>
                <p className='TrainingTrainer-article-duration'><strong>2700 TCC (pour les particuliers)</strong></p>
                <DownloadFile file={allFiles.TrainingTrainerFiles()} />
                {/* <ul className='Link-List'>
                    <li>
                    </li>
                </ul> */}
            </article>
            <article className="TrainingTrainer-article_bgWhite">
                <p><strong>Pédagogie par projet!
                </strong></p>
                <p><strong>L’une des forces de ces formations est son approche pédagogique par projet. Tout au long de la formation, vous allez travailler sur un cas concret de votre formation dans votre contexte professionnel ou objectif professionnel. A l’issue de cette formation, vous aurez donc structuré un vrai projet de formation et conçu des ressources utilisables.</strong></p>
                <p><strong>Un certificat de compétences est remis au stagiaire en fin de formation. </strong></p>
                <ContactButton />
            </article>
        </section>
    );
};

export default TrainingTrainer;