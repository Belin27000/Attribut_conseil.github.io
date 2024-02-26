import React from 'react';
import './ingeTraining.scss'
import ContactButton from '../../Components/Button/ContactButton.js';

const IngeTraining = () => {
    return (
        <section className='IngeTraining'>
            <h1 className='sr-only'>Ingénierie de la formation Fontainebleau</h1>
            <h2 className="Bilan-title">INGENIERIE DE LA FORMATION</h2>
            <article className="IngeTraining-article">
                <p>Chez ATTRIBUT CONSEILS nous sommes passionnés par la création et la mise en œuvre de programmes de formation de qualité supérieure. Notre équipe d'experts en ingénierie de la formation est là pour vous accompagner dans toutes les étapes de développement de vos programmes de formation, en veillant à ce qu'ils soient pertinents, efficaces et répondent aux besoins spécifiques de votre entreprise.</p>
                <h3 className="IngeTraining-article-title">NOTRE APPROCHE</h3>
                <p>Nous croyons en une approche personnalisée de l'ingénierie de la formation, en tenant compte des particularités de votre secteur d'activité, de votre culture d'entreprise et des compétences que vous souhaitez développer chez vos collaborateurs ou stagiaires. Notre équipe travaille en étroite collaboration avec vous pour comprendre vos objectifs, vos défis et vos attentes en matière de formation, afin de concevoir des programmes sur mesure qui répondent à vos besoins.
                </p>
                <h3 className="IngeTraining-article-title">NOS SERVICES</h3>
                <p><strong>Analyse des besoins de formation : </strong>Nous réalisons une évaluation approfondie des besoins en formation de votre entreprise, en tenant compte des compétences actuelles et des lacunes à combler. Cette étape nous permet de cibler les domaines clés sur lesquels nous devons nous concentrer pour atteindre vos objectifs de développement.</p>
                <p><strong>Conception de programmes de formation : </strong>Notre équipe d'experts en ingénierie de la formation conçoit des programmes adaptés à vos besoins spécifiques. Nous utilisons des méthodologies pédagogiques innovantes et des approches d'apprentissage engageantes pour garantir une expérience d'apprentissage efficace et motivante pour vos apprenants.</p>

                <p><strong>Développement de contenus pédagogiques : </strong>                    Nous créons des contenus pédagogiques de haute qualité, tels que des supports de cours, des modules d'apprentissage en ligne, des vidéos de formation, des exercices pratiques, etc. Nous sommes spécialisés dans l'e-learning et le blended learning, en combinant des modules d'apprentissage en ligne interactifs avec des sessions en présentiel ou des activités pratiques en groupe. Ces ressources sont conçues pour faciliter l'acquisition de connaissances et de compétences de manière interactive et engageante.</p>
                <p><strong>Gestion de la logistique de formation : </strong>Nous prenons en charge tous les aspects logistiques de la formation, tels que la planification des sessions, la réservation des salles, la coordination des formateurs, la gestion des inscriptions, etc. Nous veillons à ce que tout soit parfaitement organisé pour garantir une expérience fluide et sans tracas pour vos apprenants.</p>
                <p><strong>Évaluation et suivi de la formation : </strong>Nous réalisons des évaluations régulières pour mesurer l'efficacité de nos programmes de formation. Nous recueillons les feedbacks des apprenants et analysons les résultats pour apporter les ajustements nécessaires et améliorer continuellement nos interventions.</p>
            </article>
            <article className="IngeTraining-article_bgWhite">
                <h3 className="IngeTraining-article_blue">Contactez-nous dès maintenant pour analyser vos besoin et réaliser un devis</h3>
                <ContactButton />

            </article>
            <article className="IngeTraining-article">
                <h3 className="IngeTraining-article-title">Pourquoi choisir notre expertise en Ingénierie de la Formation ?</h3>
                <ul>
                    <li>Une équipe d'experts qualifiés et expérimentés en ingénierie de la formation.</li>
                    <li>Une approche personnalisée, adaptée à vos besoins spécifiques.</li>
                    <li>Des programmes de formation de haute qualité, basés sur les meilleures pratiques</li>
                    <li>Une gestion complète de la logistique de formation pour une expérience fluide.</li>
                    <li>Un suivi et une évaluation régulière pour garantir l'efficacité de nos interventions.</li>
                </ul>

            </article>
            <article className="IngeTraining-article_bgWhite">
                <h3 className="IngeTraining-article_blue">N'hésitez pas à nous contacter pour discuter de vos besoins en ingénierie de la formation. Nous sommes ingénieurs de formation et chef de projet blended learning. Ensemble, nous construirons des programmes de formation qui propulseront le développement de vos collaborateurs, des stagiaires et de votre entreprise vers de nouveaux sommets !</h3>
                <ContactButton />

            </article>

        </section>
    );
};

export default IngeTraining;