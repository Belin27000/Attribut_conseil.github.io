import React from 'react';
import { Link } from 'react-router-dom';

import Movie from '@/Components/Movie/Movie.js';
import Questions from '@/Components/Questions/Questions.js';
import MetaTitleDes from '@/Components/Meta/MetaTitleDes.js';
import ContactButton from '@/Components/Button/ContactButton.js';
import TelButton from '@/Components/Button/TelButton/TelButton.js';
import ScrollToTop from '@/Components/Button/ScrollButton/ScrollToTop.js';

import Tree from '@/Assets/video/Plante.mp4';
import visio from '@/Assets/video/Visio.mp4'
import climb from '@/Assets/video/Grimpeur.mp4'
import GrassGrow from '@/Assets/video/GrassGrow.mp4'
import WalkStairs from '@/Assets/video/WalkStairs.mp4'


import Cpf from '@/Assets/Images/logo_CPF.webp'
import LogoTree from '@/Assets/Images/Tree.png';
import Visio2 from '@/Assets/Images/Visio2.png'
import CircleDot from '@/Assets/Images/CircleDot.png'
import Qualiopi from '@/Assets/Images/Logo_Qualiopi.png'
import TwoDesigner from '@/Assets/Images/TwoDesigner.png'


import './bcInLine.scss';


const BCinLine = () => {
    const decret = 'https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000034640143&fastPos=1&fastReqId=1932182184&categorieLien=id&oldAction=rechTexte';
    const metaTitle = `Attribut Conseils - Bilan de compétences en ligne`
    const metaDescription = `Vous cherchez à réaliser un premier bilan de compétences en ligne ? Pourquoi ne pas le faire avec Attribut Conseils ?`

    return (
        <section className='Seo'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />

            <h1><span>Votre</span><br /> BILAN DE COMPÉTENCES EN LIGNE - ATTRIBUT CONSEILS</h1>
            <p className='Seo_Yellow'>Vous cherchez à réaliser un premier bilan de compétences en ligne ? Pourquoi ne pas le faire avec Attribut Conseils ?
            </p>
            <div className="Seo container-img">
                <img className='Tree' src={LogoTree} alt="Logo arbre Attribut conseils" />
            </div>
            <article className="Seo-article">
                <p>La profession que vous exercez actuellement ne vous convient plus. Vous envisagez donc une reconversion professionnelle dans le but de gagner plus d'argent ou d'exercer un métier qui vous passionne. Avant de vous tourner vers une nouvelle profession, vous pouvez faire le point de vos compétences et de vos connaissances. C'est là qu'intervient le bilan de compétences. Ce dernier se faisait en général en présentiel auprès des cabinets spécialisées, mais, depuis un certain temps, vous avez la possibilité de le faire en ligne. Attribut Conseils vous en dit plus sur le bilan de compétences en ligne.
                </p>
            </article>
            <article className="timeline right-container withMovie">
                <h2>Bilan de compétences en ligne: De quoi s’agit il?</h2>
                <div className='multipleText'>
                    <div className='multipleText-text'>
                        <p>Pour comprendre ce dispositif, il faut définir au préalable ce que c'est qu'un <b>bilan de compétences</b>. Ce dispositif  servant à l'orientation professionnelle a été mis en place par le Code du travail en 1991. Il est le premier système d'accompagnement professionnel individuel ayant été mis à votre disposition. Son but principal est de vous permettre de faire le point individuellement sur vos compétences professionnelles, vos capacités personnelles, vos ambitions et vos motivations.<br />Vous pourrez ainsi définir plus facilement un <b>nouveau projet professionnel</b> dans le cadre d'une reconversion ou de vous orienter vers la formation idéale afin d'être qualifié pour une offre d'emploi précise. Le bilan de compétences se déroule en présentiel avec un consultant auprès d'un organisme spécialisé et disposant d'une habilitation de l'État. Sa durée est 24 heures programmées en plusieurs séances sur environ 6 semaines.
                            <br />Le bilan de compétences en ligne n'est pas différent de ce dispositif. Le but et les objectifs à atteindre sont les mêmes pour ces deux notions. Les séances entre vous et votre consultant se font à distance par visioconférence, pas de plateforme impersonnelle. Vous n'aurez pas à vous déplacer, mais vous devez avoir à votre disposition :
                        </p>
                        <ul>
                            <li>un ordinateur ou une tablette,</li>
                            <li>une connexion internet,</li>
                            <li>un micro,</li>
                            <li>une webcam…</li>
                            <li>Et disposer d’un endroit calme et confidentiel</li>
                        </ul>
                        <p>                                En ligne, vous bénéficierez de plusieurs avantages en optant pour un bilan de compétences.</p>
                    </div>
                    <div className="multipleText-pic">

                        <Movie src={climb} />
                        <div className="articleCertif-pic">
                            < img src={Qualiopi} alt="Logo Qualiopi" />
                            < img className='LogCpf' src={Cpf} alt="Logo Qualiopi" />
                        </div>
                    </div>
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline left-container visio">
                <div className='multipleText'>
                    <h2>Quels sont les avantages du bilan de compétences en ligne ?</h2>
                    <p>Effectuer un bilan de compétences en ligne présente de nombreux avantages. Il s'agit tout d'abord d'une <b>solution plus flexible</b> qui vous offre beaucoup de possibilités. Vous pouvez par exemple faire votre bilan de compétences à n'importe quel endroit. Vous n'aurez pas à vous déplacer vers l'agence de l'organisme choisi. Vous pouvez également décider d'effectuer les séances à votre domicile, dans un espace de coworking ou même en étant en vacances.</p>
                    <p>Avec le bilan de compétences en ligne, vous n'avez pas non <b>plus de contrainte de temps</b>. C'est à vous de programmer les séances avec le consultant selon vos disponibilités. Vous avez la possibilité de les effectuer très tôt le matin avant d'aller travailler ou en soirée au retour du travail. Vous pouvez aussi les programmer à vos heures de pauses ou en week-end pour plus de liberté. Cette approche démocratise l'accès à l'auto-évaluation professionnelle. Elle vous aide à bénéficier de cet outil, indépendamment de votre localisation et de votre emploi du temps.</p>
                    <p>L'environnement numérique favorise par ailleurs un <b>sentiment de confidentialité et d'anonymat</b>, éléments propices à une réflexion personnelle profonde et honnête sur vous carrière. La richesse des ressources en ligne et l'accompagnement sur mesure proposé par des professionnels qualifiés  contribuent efficacement à l'identification des compétences. Vous pouvez également définir un projet professionnel aligné sur vos aspirations et vos capacités.
                    </p>
                </div>
                <Movie src={visio} />
            </article>
            <ContactButton text="Je demande mon bilan de compétences" />
            <article className="timeline right-container withMovie tree">
                <h2 className='text-centered'>Bilan de compétences: Pour quelles raisons?</h2>
                <div className='multipleText-text'>
                    <p className='text-end'>Plusieurs raisons peuvent vous pousser à effectuer un bilan de compétences en ligne. L'épanouissement est indispensable pour être productif à votre poste, peu importe le métier que vous exercez. Si vous ne vous sentez plus épanoui, vous pouvez vous engager dans cette démarche pour vous remotiver.</p>
                    <p>Grâce à ce dispositif, vous vous rendrez compte des capacités professionnelles dont vous disposez et de vos forces afin de reprendre confiance en vous et d'être plus épanoui à votre poste.</p>
                    <p>Le bilan de compétences en ligne est aussi idéal pour faire <b>un point sur votre carrière professionnelle</b> et de savoir où vous en êtes. Vous pourrez ainsi prendre connaissance de vos freins et y remédier afin d'améliorer votre profil professionnel.</p>
                    <p>L'une des raisons les plus classiques pour lesquelles vous devez effectuer cette démarche est la reconversion professionnelle. Dans le cadre d'une procédure de recherche d'un nouvel emploi, ce dispositif d'orientation vous permettra de maximiser vos chances de vous reconvertir dans un secteur d'activité ou à un poste qui vous convient.</p>
                    <p>Il sert également à <b>évaluer vos compétences</b> dans le but de mieux vous préparer aux défis de ce nouvel emploi. En effectuant un bilan de compétences en ligne, vous pourrez plus facilement trouver un métier dans lequel vous serez épanoui afin de faciliter votre intégration sur le marché du travail.</p>

                </div>
                <Movie src={Tree} />
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline left-container">
                <h2>Quelles sont les différentes phases d'un bilan de compétences ?</h2>
                <div>
                    <p>Un bilan de compétences se déroule en <b>trois phases clés</b>. La phase préliminaire identifie la demande et définit le cadre. La phase d'investigation explore les connaissances, les motivations et le projet professionnel. La conclusion, enfin, synthétise les résultats et élabore un plan d'action.</p>
                </div>
                <h3> Phase préliminaire</h3>
                <div>
                    <p>Le bilan de compétences en ligne commence par une <b>entrevue initiale</b>. Cette rencontre permet au conseiller ou au coach d'évaluer votre réelle motivation. Cette phase introductive se divise en deux segments distincts : le diagnostic préliminaire et la consultation avec un expert.</p>
                    <p>Les objectifs de cette <b>phase préliminaire</b> sont multiples. Elle vise tout d'abord à vous présenter l'établissement, à exposer l'approche pédagogique adoptée par ce dernier et à détailler les options de financement disponibles. Cette phase vous offre également l'opportunité de décrire votre situation professionnelle actuelle et d'exprimer vos aspirations et attentes. Cette démarche vous aide non seulement à préciser les besoins du salarié ou du demandeur d'emploi, mais également à valider son engagement dans le processus.</p>
                    <p>Avec la phase préliminaire, vous pouvez <b>établir les fondements du bilan de compétences en ligne</b> et le programme de ce dernier. Le consultant vous transmet alors de nombreuses informations pertinentes. C'est notamment sur les méthodologies qui seront mises en œuvre et sur les principes régissant l'exploitation des résultats obtenus à l'issue du bilan.</p>
                </div>
            </article>
            <article className="timeline right-container videoBefore">
                <h3>Phase d'investigation</h3>
                <div className='multipleText'>
                    <p>D'une grande importance, la <b>phase d'investigation</b> permet de vous plonger au cœur de la démarche d'orientation professionnelle. Elle est consacrée à une introspection approfondie et invite à une réflexion personnelle à travers des questions fondamentales sur :</p>
                    <ul>
                        <li>votre identité,
                        </li>
                        <li>votre parcours professionnel,
                        </li>
                        <li>l'évaluation des compétences acquises.
                        </li>
                    </ul>
                    <p>Des outils tels que <b>des tests et des questionnaires</b> sont utilisés par le consultant pour vous guider dans votre quête de connaissance de vous-même.
                    </p>
                    <p>Cette exploration minutieuse des compétences vous offre l'opportunité d'évaluer votre potentiel et de l'exploiter au maximum dans votre projet professionnel. La phase d'investigation aide aussi à <b>identifier vos atouts et vos limites</b>, ainsi que vos opportunités de carrière et de formation.</p>
                </div>
                <h3>Phase de conclusion</h3>
                <p>La <b>phase de conclusion</b> joue un rôle prépondérant dans le bilan de compétences. Elle permet de déterminer le plan d'action nécessaire à la réalisation de vos objectifs professionnels, que vous soyez un salarié ou un demandeur d'emploi.</p>
                <p>Cette phase offre la possibilité de déterminer si des mesures telles que la formation continue, la reprise d'études ou une reconversion professionnelle sont appropriées. Durant cette période, un <b>document de synthèse</b> est élaboré conjointement par le consultant et le bénéficiaire. Il récapitule le plan d'action et facilitant l'élaboration d'une argumentation solide pour le projet envisagé.</p>
                <div className="videoContainer">
                    <Movie src={WalkStairs} />
                </div>

            </article>

            <div className="allText">
                <div className="mainText">
                    <p>Obtenir un rendez-vous, un devis ou pour plus d’informations et concrétiser votre projet</p>
                    <p>Je contacte<br /><b>ATTRIBUT<br />CONSEILS</b> </p>
                </div>
                <div className="circleDot">
                    <img src={CircleDot} alt="cercle de petit point" />
                </div>
                <div className="yellowCircle"></div>
                <div className="videoContainer">
                    <Movie src={GrassGrow} />
                </div>
            </div>
            {/* <TelButton number="06 98 88 15 55" /> */}
            <article className="timeline container-oblique">
                <div className="oblique">
                    <div>
                        <h2 className='title'>Bilan de compétences en ligne : quelles sont les personnes concernées ?
                        </h2>
                        <p className='text-end'>Le bilan de compétences en ligne cible les personnes désirant évaluer ou réorienter leur carrière depuis leur domicile. Adapté aux employés, aux indépendants et aux chercheurs d'emploi, cet outil flexible s'adresse également à vous si vous envisagez une formation ou une évolution professionnelle.</p>
                        <h3>Les salariés du secteur privé</h3>
                        <p>Vous pouvez effectuer le bilan de compétences en ligne si vous êtes un salarié du secteur privé, peu importe votre contrat (CDD ou CDI) et votre statut. Vous pouvez solliciter ce dispositif d'accompagnement que vous soyez :</p>
                        <ul>
                            <li>ouvrier,</li>
                            <li>technicien,</li>
                            <li>cadre supérieur,</li>
                            <li>dirigeant d'entreprise</li>
                        </ul>
                        <p>Deux possibilités s'offrent à vous en ce qui concerne le bilan de compétences en ligne au sein d'une entreprise privée. Vous pouvez utiliser votre CPF et le faire <b></b>. Dans ce cas, vous n'avez pas besoin d'en informer votre employeur. Le contraire est aussi possible, si vous souhaitez que votre employeur prenne en charge le financement. Cela nécessite une autorisation de ce dernier par une demande de financement par le Plan de Développement des Compétences et d’une autorisation d’absence pour effectuer le bilan de compétences en ligne pendant le temps de travail.</p>
                        <h3>Les intérimaires</h3>
                        <p>Pour effectuer le bilan de compétences en ligne, en étant intérimaire,  vous avez les mêmes droits que les salariés du secteur privé pour effectuer votre bilan de compétences en ligne.</p>
                        <h3>Les salariés du secteur public</h3>
                        <p>Les salariés du secteur public peuvent désormais réaliser sur simple demande de leur part un bilan de compétences. Ils peuvent ainsi se faire accompagner pour élaborer leur projet de reconversion ou d’évolution professionnelle. La condition d’ancienneté de 10 ans de services qui était jusqu’à présent de rigueur se voit ainsi supprimée.<br />L’agent pourra réaliser au maximum 2 bilans au cours de sa carrière mais il devra respecter un délai de franchise minimal de 5 ans après la fin du dernier bilan.<br /><Link to={decret} target="_blank">Décret n°2017-928 du 6 mai 2017</Link> </p>
                        <h3>Les demandeurs d'emploi</h3>
                        <p>Vous pouvez effectuer un bilan de compétences en ligne <b>grâce au compte personnel de formation (CPF)</b> ou demander un financement France Travail. ATTRIBUT CONSEILS est habilité France Travail peut en faire la demande via leur logiciel de messagerie interne. </p>
                    </div>
                </div>
            </article>
            <article className="timeline left-container">
                <h2 className='text-centered'>Où effectuer votre bilan de compétences en ligne ?</h2>
                <p className='text-end'>Sur internet, un grand nombre de sites internet propose des bilans de compétences en ligne, d'autres le font même gratuitement. Nous pouvons citer l'exemple de Chance.co, Kledou, Nouvelle vie pro… Ces offres gratuites ne sont toutefois pas complètes et permettent en général de réaliser qu'un <b>test de personnalité</b>.</p>
                <p>D'autres offres, payantes, aident à obtenir de meilleurs résultats. Pour choisir l'organisme auprès duquel vous effectuerez votre bilan de compétences en ligne, vous devez prendre en compte certains critères :</p>
                <ul>
                    <li>L’adaptation de votre bilan à vos besoins</li>
                    <li>L'habilitation de l'organisme et son expérience passée</li>
                    <li>La qualité de l'offre proposée</li>
                    <li>La conformité du programme aux trois phases du bilan de compétences,</li>
                    <li>La possibilité d'obtenir un financement de la part d'un tiers (CPF ou votre employeur),</li>
                    <li>le professionnalisme, la disponibilité du consultant qui vous sera dédié…</li>
                </ul>
                <div className="description-picContainer">
                    <img src={TwoDesigner} alt="Two designer working" />
                    <div className="text">
                        <p className='Yellow'>100% visio</p>

                        <p>Pas de plateforme digitale impersonnelle, que des consultants formateurs en entretien</p>
                    </div>
                    <img src={Visio2} alt="Man working on a laptop" />

                </div>
            </article>
            <div className="centered">

                <p>Chez Attribut Conseils, nous sommes des <b>professionnels de la relation</b> homme/travail installés en France depuis plus de 16 ans. Nous vous proposons un bilan de compétences en ligne certifié Qualiopi et finançable par le CPF ou votre employeur.
                </p>
                <p>Notre programme respecte les trois phases normalement prévues pour ce dispositif d'orientation. Il consiste en un accompagnement de 24 heures établi sur une durée de trois mois, comprenant 16 heures d'entretiens individuels avec l'un de nos experts. Le reste du temps comprend 2 heures de tests et 6 heures de travail personnel.</p>
                <p>Nous vous proposons des tarifs concurrentiels et variables selon vos besoins. Avec Attribut Conseils, vous avez droit à <b>un accompagnement personnalisé</b> pour la réalisation de votre bilan de compétences, peu importe votre situation.</p>
            </div>
            <div className="allText">
                <div className="mainText">
                    <p>Obtenir un rendez-vous, un devis ou pour plus d’informations et concrétiser votre projet</p>
                    <p>Je contacte<br /><b>ATTRIBUT<br />CONSEILS</b> </p>
                </div>
                <div className="circleDot">
                    <img src={CircleDot} alt="cercle de petit point" />
                </div>
                <div className="yellowCircle"></div>
                <div className="videoContainer">
                    <Movie src={GrassGrow} />
                </div>
            </div>
            <Questions tag='all' ville='Fontainebleau' />
            <ScrollToTop />
        </section >
    );
};

export default BCinLine;