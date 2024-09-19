import React from 'react';
import allFiles from '../../_Services/fileToDownload.service.js';
import ContactButton from '../../Components/Button/ContactButton.js';
import Dday from '../../Components/Dday/Dday.js';
import DownloadFile from '../../Components/FileLink/DownloadFile.js';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';
import './youthGuidance.scss';

const YouthGuidance = () => {
    const metaTitle = `Attribut Conseils - Orientation des jeunes`
    const metaDescription = `Vous cherchez la bonne orientation pour votre enfant? Contactez-nous !`
    return (
        <section className='YouthGuidance'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />

            <h1 className='sr-only'>Orientation des jeunes générations</h1>
            <h2 className="YouthGuidance-title">ORIENTATION JEUNES</h2>
            <h3 className="YouthGuidance-article-title">L’ORIENTATION: ÇA S’ÉDUQUE!</h3>
            <article className="YouthGuidance-article">
                <p>
                    Quel parent ne se retrouve pas démunis face aux méandres de l'orientation scolaire et face à la difficulté qu'ont nos enfants à savoir répondre à ces grandes questions :
                </p>
                <p>&laquo; Quel est ton projet ? &raquo;</p>
                <p>&laquo;Que veux-tu faire comme métier ? &raquo;</p>
                <p><strong>Parents :</strong></p>
                <ul>
                    <li>L'orientation de votre enfant vous préoccupe ?</li>
                    <li>Vous vous interrogez sur son projet ? Sur ses débouchés possibles ?</li>
                    <li>Vous ne savez pas où trouver l'information ?</li>
                </ul>
                <p><strong>Élèves :</strong></p>
                <ul>
                    <li>Vous vous interrogez sur votre avenir ?</li>
                    <li>Vos projets d'orientation restent flous ?</li>
                    <li>Vous doutez de vos capacités, de vos motivations ?</li>
                    <li>Vous voulez faire le point sur vos résultats scolaires ?</li>
                </ul>
                <p>Au catalogue des séances d'orientation, on retrouve trop souvent de simples procédures d'évaluation débouchant sur des formes de recommandations. Pour ATTRIBUT CONSEILS, il s'agit d'impliquer votre enfant ou le jeune adulte dans le processus de choix et d'en intégrer les mécanismes.</p>
                <p>Il pourra intégrer dès aujourd'hui la démarche qui lui permettra d'être en capacité de prendre en main la gestion personnelle de son propre avenir et d'acquérir les habiletés qui lui permettront d'être autonome tout au long de sa vie professionnelle et personnelle. Car il sera sans cesse confronté à des périodes d'orientation, de réorientation, de changement de carrière. Vous le savez bien, car vous y êtes vous même de temps en temps confronté !</p>
            </article>
            <article className="YouthGuidance-article_bgWhite">
                <h3 className="YouthGuidance-article_blue">
                    Réserver votre bilan d’orientation dès maintenant, à distance ou en présentiel ou obtenez le programme :</h3>
                <ContactButton />
            </article>
            <article className="YouthGuidance-article">
                <h3 className="YouthGuidance-article-title">LES ÉTAPES DE L’ACCOMPAGNEMENT</h3>
                <h4 className="YouthGuidance-article-subtitle">Phase 1 : Soi</h4>
                <ul>
                    <li>A partir d'entretiens individuels, de tests et de questionnaires, nous dégageons vos motivations, vos centres d'intérêts. Nous explorons la dynamique de parcours et des réalisations scolaires et extra-scolaires, ferons un inventaire des compétences, un bilan de la personnalité et des potentiels.</li>
                    <li>Nous évaluons vos résultats scolaires sur plusieurs années pour faire le point sur vos capacités et vos compétences.</li>
                    <li>Nous analysons vos méthodes de travail personnel.</li>
                    <li>Nous vous aidons à prendre conscience de votre potentiel.</li>
                </ul>
                <h4 className="YouthGuidance-article-subtitle">Phase 2 : Environnement</h4>
                <ul>
                    <li>Élaboration de pistes de projets scolaires et professionnels.</li>
                    <li>Recherche d'informations et enquêtes terrain avec notre réseau de professionnelsafin de valider un ou des axes de développement (possibilité de faire une demi journée d'observation métier).</li>
                    <li>Confrontation du projet avec la réalité économique et avec les perspectives d'évolution du marché.</li>
                </ul>
                <h4 className="YouthGuidance-article-subtitle">Phase 3 : Formalisation du projet – Choix</h4>
                <ul>
                    <li>Pistes, élaboration de projets scolaires et professionnels réalistes et réalisables</li>
                    <li>Mise en oeuvre du plan d’action : principales étapes de la mise en œuvre du projet professionnel ou personnel</li>
                    <li>Synthèse du bilan</li>
                </ul>
                <h4 className="YouthGuidance-article-title">Nos outils :</h4>
                <ul>
                    <li>Tests à partir de logiciels d'aide à l'orientation</li>
                    <li>Questionnaires de profils d'intérêts</li>
                    <li>Tests de motivations</li>
                    <li>Base de données sur les métiers et les formations scolaires et professionnelles</li>
                </ul>
                <h4 className="YouthGuidance-article-title">Notre méthode : L’ORIENTATION ÉDUCATIVE</h4>
                <p>Nous utilisons le concept de l'orientation éducative : <strong>L'Activation du Développement Vocationnel et personnel</strong> et les techniques de coaching pour permettre à votre jeune de réussir son orientation, car comment choisir en mettant toutes les chances de son coté ?</p>
                <p><strong>L'activation du Développement Professionnel et Personnel : qu'est ce que c'est ??</strong></p>
                <p>Allez, un peu de théorie !!</p>
                <p>Ce modèle inspiré des recherches conduites aux Etats Unis, est né au Quebec. Pelletier, Noiseux, Ujold s'attachent à rendre compte de la dynamique complexe de choix professionnel et avancent la notion de développement vocationnel.</p>
                <p>Il s'agit d'appliquer à la séquence vocationnelle un questionnement opératoire nécessitant la réussite de quatre grandes tâches, à savoir :</p>
                <ol>
                    <li>L'exploration :
                        <p>Envisager toutes les possibilités sans tenir compte de la réalité par un processus d'essais et d'erreurs.</p>
                    </li>
                    <li>La cristallisation :
                        <p>Réduire par rapport à l'exploration, choisir un champ d'intérêt en terme de grandes lignes directrices.</p>
                    </li>
                    <li>La spécification :
                        <p>Identifier les valeurs et les critères, et les sélectionner vers une option plus spécifique, évaluer le projet en fonction du désirable et du probable.</p>
                    </li>
                    <li>La réalisation :
                        <p>Faire passer ses intentions au niveau du réel, poser les problèmes en termes concrets et pratiques, planifier, réviser les étapes.</p>
                    </li>
                </ol>
                <p>A chacune des étapes correspondent des tâches définies et ordonnées. La démarche d'orientation peut être comprise comme un cheminement qui permet à l'individu de se reconnaître tel qu'il est et tel qu'il se modifie.</p>
            </article>
            <article className="YouthGuidance-article_bgWhite">
                <h3 className="YouthGuidance-article_blue">
                    « Ici, l'expert n'est que l'expert de la méthode. Il a pour tâche principale de guider la personne à travers ses interrogations, ses désirs, ses découragements, ses demandes, sans se substituer à elle, mais tout simplement en l'accompagnant. »
                </h3>
            </article>
            <article className="YouthGuidance-article">
                <p>Ces séquences éducatives contribuent à <strong>accélérer le processus de cheminement en permettant au jeune de modifier notamment ses représentations initiales des professions.</strong> Elles agissent de ce fait contre les processus traditionnels de sélection qui conduisent à l'exclusion de nombreux jeunes.
                </p>
                <p>Ce faisant, elles permettent au jeune – <strong>de devenir acteur de son projet</strong> - de mieux utiliser les ressources de notre système de formation professionnelle ou initiale et de savoir naviguer ce système si complexe qu’est notre monde de l’emploi et de la formation.
                </p>
                <h3 className="YouthGuidance-article-title">Nos tarifs</h3>
                <p>Le coût de l’accompagnement est évalué lors d'un entretien préliminaire gratuit et sans engagement et varie en fonction de la situation du client ainsi que des modalités de financement.</p>
                <DownloadFile file={allFiles.jeune()} />
                {/* <ul className='YouthGuidance-article-doc'>
                    <li>Déontologie et éthique</li>
                </ul> */}
            </article>
            <Dday />
        </section>
    );
};

export default YouthGuidance;