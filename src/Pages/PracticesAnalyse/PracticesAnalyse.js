import React from 'react';
import ContactButton from '../../Components/Button/ContactButton.js';
import Dday from '../../Components/Dday/Dday.js';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';
import './practicesAnalyse.scss';

const PracticesAnalyse = () => {
    const metaTitle = `Attribut Conseils - Analyse de pratiques professionnelles`
    const metaDescription = `Vous souhaitez vous former à l'analyse de pratiques professionnelles en Seine et Marne? Contactez-nous !`
    return (
        <section className='PracticesAnalyse'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />

            <h1 className="PracticesAnalyse-title">ANALYSES DES PRATIQUES PROFESSIONNELLES - SUPERVISION </h1>
            <article className='PracticesAnalyse-article_bgWhite'>
                <p className='PracticesAnalyse-article_blue'>Cette formation vise à offrir aux professionnels un espace de réflexion et d'apprentissage, favorisant le développement de compétences essentielles dans leur pratique. L’analyse de pratiques permet de maintenir les apprentissages présents: poser le cadre, tenir la posture, revisiter les théories, naviguer dans la dynamique de séance, réviser les outils ou en découvrir…</p>
            </article>
            <article className="PracticesAnalyse-article">
                <h2 className="PracticesAnalyse-article-title">POUR QUI?</h2>
                <p>Cette formation est spécialement conçue pour répondre aux besoins de tous les professionnels travaillant avec divers publics, que ce soit dans le domaine du management, de la thérapie, de l'insertion, du coaching ou de l'accompagnement au changement, formateurs. Vous êtes constamment sur le terrain, confrontés à une multitude de problématiques. Notre formation se déroule en groupe, avec un minimum de 5 personnes, en visioconférence ou en présentiel.
                </p>
                <ul className='doubleList'>
                    <li className='listTitle'>OBJECTIFS
                        <ul className='listItems'>
                            <li className='listItems-Title'><strong> Prendre du recul émotionnel :</strong></li>
                            <li> Apprendre à analyser les situations émotionnelles complexes avec les bénéficiaires, favorisant ainsi une réflexion objective.</li>
                            <li className='listItems-Title'><strong> Améliorer l'accompagnement :</strong></li>
                            <li>Identifier des options, des outils et des solutions pour améliorer l'accompagnement des bénéficiaires, renforçant ainsi l'efficacité des interventions.</li>
                            <li className='listItems-Title'><strong> Comprendre et accompagner la mobilisation professionnelle :</strong></li>
                            <li>Développer la compréhension et les compétences nécessaires pour soutenir les bénéficiaires dans leur mobilisation, en équilibrant les enjeux humains, professionnels et institutionnels.</li>
                            <li className='listItems-Title'><strong> Renforcer la posture professionnelle :</strong></li>
                            <li>Travailler sur la posture entre l'accompagnement et la relation d'aide, contribuant ainsi à la professionnalisation tout en préservant le bien-être des professionnels.</li>
                        </ul>
                    </li>
                    <li className='listTitle'>BENEFICES
                        <ul className='listItems'>
                            <li className='listItems-Title'><strong> Motivation et fidélisation des équipes :</strong></li>
                            <li> Renforcement de la motivation des équipes par la compréhension approfondie de leur rôle et de l'impact positif de leur travail.</li>
                            <li className='listItems-Title'><strong> Recherche de sens :</strong></li>
                            <li>Aider les professionnels à réaligner leur engagement avec la raison pour laquelle ils ont choisi ce métier, renforçant ainsi leur satisfaction au travail.</li>
                            <li className='listItems-Title'><strong> Prévention des risques psychosociaux :</strong></li>
                            <li>Réduire l'usure professionnelle, le taux de rotation du personnel et l'absentéisme en offrant un espace pour traiter les difficultés rencontrées.</li>
                            <li className='listItems-Title'><strong> Développement des compétences cliniques :</strong></li>
                            <li>Utiliser les problématiques rencontrées pour enrichir les compétences cliniques, favorisant ainsi la croissance professionnelle.</li>
                        </ul>
                    </li>
                </ul>
                <h2 className="PracticesAnalyse-article-title">PROGRAMME</h2>
                <p>Les séances d'analyse permettront d’exposer vos cas, de recevoir du feed back sur vos pratiques ainsi que des pistes de travail et d’amélioration et de trouver une solution à la situation que vous présentez. Au-delà du cas traité, votre difficulté “personnelle” liée au cas pourra être évoquée.</p>
                <p>Vous vous enrichirez également en assistant au traitement des cas apportés par les autres participants.</p>
                <ul className='globalList'>
                    <li className='Title'><strong> Analyse des situations pratiques :</strong></li>
                    <li> Utilisation des situations difficiles pour développer des compétences cliniques et trouver des solutions créatives.</li>
                    <li className='Title'><strong> Favoriser la résilience par des techniques d’intelligence collective :</strong></li>
                    <li>Encourager les professionnels à ne pas céder à la plainte chronique et au découragement, transformant les fragilités en forces et en facteurs de confiance.</li>
                    <li className='Title'><strong>Adaptabilité: </strong>Réduire l'usure professionnelle, le taux de rotation du personnel et l'absentéisme en offrant un espace pour traiter les difficultés rencontrées.</li>
                    <li className='Title'><strong> Co construction des solutions: </strong>Partage des connaissances ou solutions pour aider à résoudre la problématiques</li>
                    <li>Découverte d’outils de résolution de problèmes</li>
                </ul>
                <h2 className="PracticesAnalyse-article-title">MODALITÉS DE PARTICIPATION</h2>
                <p>“L’animateur” expert des groupes d’analyses de pratiques est  garant:</p>
                <ul className='globalList'>
                    <li className='Title'><strong> du cadre structuré :</strong></li>
                    <li>Instaurer un cadre rigoureux et structuré pour les interventions, favorisant la créativité et l'évaluation constructive des contributions de chacun.
                    </li>
                    <li className='Title'><strong>De la confidentialité et neutralité</strong></li>
                    <li>: Assurer la confidentialité des échanges et la neutralité bienveillante de l'animateur extérieur, créant un environnement de confiance.</li>
                    <li className='Title'><strong>De la prise de parole réglementée </strong>: Les prises de parole sont soumises à des règles, favorisant un échange respectueux et constructif.</li>
                    <li className='Title'><strong>De la constance du groupe</strong> : Le dispositif est stable en termes de règles et de participants, garantissant une cohérence et une régularité dans les sessions.</li>
                </ul>
            </article>
            <article className='PracticesAnalyse-article_bgWhite'>
                <p className='PracticesAnalyse-article_blue'>Personnalisez votre expérience de supervision et d'analyse de pratiques professionnelles selon vos besoins spécifiques. Contactez-nous dès maintenant pour discuter de vos attentes et élaborer un programme sur mesure.</p>
                <ContactButton />
            </article>
            <Dday />
        </section >
    );
};

export default PracticesAnalyse;