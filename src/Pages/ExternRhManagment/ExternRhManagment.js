import React from 'react';
import './externRhManagment.scss'
import ContactButton from '../../Components/Button/ContactButton.js';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';

const ExternRhManagment = () => {
    const metaTitle = `Attribut Conseils - Gestion RH externalisée `
    const metaDescription = `Vous souhaitez externaliser votre gestion des ressources humaines? Contactez-nous !`
    return (
        <section className='ExternRhManagment'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />

            <h1 className='sr-only'>Gestion RH externalisée en Seine et Marne</h1>
            <h2 className="ExternRhManagment-title">GESTION RH EXTERNALISÉE </h2>
            <article className="ExternRhManagment-article_bgWhite">
                <h3 className="Bilan-article_blue">Optimisez votre gestion RH et renforcez vos compétences avec notre service d'externalisation professionnelle</h3>
            </article>
            <article className="ExternRhManagment-article">
                <p className="Bilan-article">Vous êtes une entreprise  qui reconnaît l'importance d'une gestion RH efficace et du développement des compétences de votre équipe. Mais vous savez aussi que ces tâches peuvent être complexes et nécessitent du temps et des ressources considérables. C'est pourquoi nous vous proposons notre service d'<strong>externalisation professionnelle des ressources humaines, avec une attention particulière portée à la partie formation.</strong></p>
                <h3 className="Bilan-article-title">Pourquoi choisir notre service d'externalisation RH avec un focus sur la formation ?</h3>
                <p><strong className='yellowBold'>Expertise en gestion RH et formation : </strong>Notre équipe expérimentée de professionnels des ressources humaines comprend l'importance de la formation continue pour le développement des compétences de vos employés. Nous élaborons des <strong>plans de formation personnalisés</strong> en fonction des besoins spécifiques de votre entreprise, afin de maximiser le potentiel de votre équipe.
                </p>
                <p><strong className='yellowBold'>Sélection d’un large éventail de programmes de formation : </strong>En externalisant votre gestion RH avec nous, vous avez accès à une gamme complète de programmes de formation adaptés à différents domaines de compétences. Que ce soit pour le renforcement des compétences techniques ou la communication interpersonnelle, nous vous proposons des solutions de formation en <strong>sélectionnant les organismes les plus qualifiés.</strong></p>


                <p><strong className='yellowBold'>Identification des besoins en formation : </strong>Nous effectuons une analyse approfondie des besoins en formation de votre entreprise par la <strong>GPEC</strong>, en prenant en compte vos objectifs stratégiques et les compétences requises. Cette approche nous permet de concevoir des plans de formation et des programmes de formation ciblés, alignés sur les besoins spécifiques de votre organisation.</p>
                <p><strong className='yellowBold'>Gestion complète du processus de formation : </strong>Nous prenons en charge l'ensemble du processus de formation. Nous travaillons en étroite collaboration avec vous pour garantir que chaque session de formation est pertinente, engageante et conforme à vos attentes. Nous nous chargeons de la <strong>relation avec votre OPCO et des demandes de financements.</strong></p>
                <p><strong className='yellowBold'>Optimisation des ressources et réduction des coûts : </strong>Externaliser votre gestion RH avec un focus sur la formation vous permet de bénéficier de notre expertise et de nos ressources spécialisées, sans avoir à supporter les coûts liés à la création d'un département de formation interne. Vous réalisez ainsi des <strong>économies significatives</strong> tout en garantissant des formations de qualité à vos employés.</p>
                <p><strong className='yellowBold'>Suivi et évaluation des résultats : </strong>Nous suivons de près les résultats de la formation et évaluons son impact sur les performances individuelles et globales de votre entreprise. Grâce à des mesures d'évaluation appropriées, nous vous aidons à mesurer le retour sur investissement de vos initiatives de formation et à ajuster votre stratégie en conséquence.</p>
            </article>

            <article className="ExternRhManagment-article_bgWhite">
                <h3 className="Bilan-article_blue">Ne laissez pas la gestion RH et la formation freiner votre croissance. Confiez-nous ces responsabilités et bénéficiez d'une gestion professionnelle et d'un développement des compétences de haut niveau.</h3>
                <ContactButton />
            </article>
        </section>
    );
};

export default ExternRhManagment;