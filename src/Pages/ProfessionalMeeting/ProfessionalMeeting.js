import React from 'react';
import './professionalMeeting.scss'
import ContactButton from '../../Components/Button/ContactButton.js';

const ProfessionalMeeting = () => {
    return (
        <section className='ProfessionalMeeting'>
            <h1 className='sr-only'>Entretien professionnel Fontainebleau</h1>
            <h2 className="ProfessionalMeeting-title">FOCUS SUR L‘ENTRETIEN PROFESSIONNEL</h2>
            <article className='ProfessionalMeeting-article_bgWhite'>
                <p className='ProfessionalMeeting-article_blue'>L'article L.6315-1 du Code du travail stipule : "Tous les deux ans, l'employeur assure un entretien professionnel à chaque salarié. Cet entretien a pour objet de permettre au salarié d'être acteur de son évolution professionnelle, notamment en favorisant la construction d'un parcours professionnel personnalisé."</p>
            </article>
            <article className="ProfessionalMeeting-article">
                <h3 className="ProfessionalMeeting-article-title">Cet article précise également les objectifs de l'entretien professionnel, tels que :</h3>
                <ol>
                    <li>Faire le point sur le parcours professionnel du salarié et ses perspectives d'évolution au sein de l'entreprise.</li>
                    <li>Identifier les besoins en formation du salarié et définir les actions de formation appropriées.</li>
                    <li>Informer le salarié sur les différentes possibilités d'évolution professionnelle, notamment en termes de qualifications et de certifications.</li>
                    <li>Prévoir des mesures favorisant l'employabilité du salarié, notamment par la validation des acquis de l'expérience (VAE) ou la reconnaissance des compétences acquises</li>
                </ol>
                <p>Il est important de noter que cet article de <strong>loi prévoit également des sanctions en cas de non-respect de l'obligation d'organiser les entretiens professionnels,</strong> notamment le versement d'une somme au titre de l'abondement du compte personnel de formation du salarié.
                </p>
                <p className='yellowBold'>Vous êtes conscient de l'importance des entretiens professionnels pour le développement et l'épanouissement de vos collaborateurs, mais vous savez aussi qu'ils nécessitent une organisation rigoureuse et une expertise approfondie.</p>
                <p className='yellowBold'>C'est pourquoi nous vous proposons notre service d'externalisation professionnelle des ressources humaines, avec une attention particulière portée à la réalisation des entretiens professionnels.
                </p>
                <ul>
                    <li><strong>Maîtrise des meilleures pratiques : </strong>Notre équipe d'experts en ressources humaines est formée aux meilleures pratiques en matière d'entretiens professionnels. Nous vous accompagnons dans la mise en place d'un processus d'entretiens structuré et efficace, en garantissant la confidentialité et l'objectivité des échanges.
                    </li>
                    <li><strong>Personnalisation des entretiens : </strong>Nous adaptons les entretiens professionnels à votre culture d'entreprise et à vos besoins spécifiques. Nous prenons le temps de comprendre vos objectifs et vos attentes, afin de concevoir des entretiens sur mesure qui favorisent le développement des compétences de vos collaborateurs.
                    </li>
                    <li><strong>Préparation complète :</strong>Nous nous chargeons de la préparation en amont des entretiens professionnels, en collectant les informations nécessaires sur les collaborateurs et en les informant des objectifs et du déroulement de l'entretien. Nous veillons à ce que les collaborateurs soient bien préparés et en mesure de participer activement à l'entretien.
                    </li>
                    <li><strong>Conduite des entretiens : </strong>Nos experts en ressources humaines qualifiés assurent la conduite des entretiens professionnels, en favorisant un environnement ouvert et bienveillant. Nous posons des questions pertinentes, encourageons les échanges constructifs et veillons à ce que les objectifs de développement soient clairement identifiés.
                    </li>
                    <li><strong>Identification des axes d'amélioration : </strong>Nous analysons les résultats des entretiens professionnels et identifions les axes d'amélioration pour chaque collaborateur. Nous vous fournissons des recommandations concrètes pour soutenir le développement individuel et collectif de votre équipe.
                    </li>
                    <li><strong>Suivi et évaluation : </strong>Nous assurons un suivi régulier des plans d'action définis lors des entretiens professionnels, en veillant à ce que les objectifs fixés soient atteints. Nous évaluons l'impact des entretiens sur les performances et le bien-être des collaborateurs, afin d'ajuster les actions à mettre en place.
                    </li>
                    <li><strong>En externalisant la réalisation des entretiens professionnels avec nous</strong>, vous bénéficiez d'une expertise spécialisée, d'une organisation optimale et d'une approche personnalisée qui maximisent les retombées positives pour votre entreprise.</li>
                </ul>
            </article>
            <article className='ProfessionalMeeting-article_bgWhite'>
                <p className='ProfessionalMeeting-article_blue'>Contactez-nous dès aujourd'hui pour en savoir plus sur notre service d'externalisation RH avec une expertise en entretiens professionnels et découvrez comment nous pouvons vous accompagner dans la gestion de votre capital humain et le développement de vos talents.</p>
                <ContactButton />
            </article>
        </section>
    );
};

export default ProfessionalMeeting;