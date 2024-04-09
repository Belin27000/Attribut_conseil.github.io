import React from 'react';
import ScrollToTop from '../../Components/Button/ScrollButton/ScrollToTop.js';
import TelButton from '../../Components/Button/TelButton/TelButton.js';
import ContactButton from '../../Components/Button/ContactButton.js';
import Qualiopi from '@/Assets/Images/Logo_Qualiopi.png'
import Cpf from '@/Assets/Images/logo_CPF.webp'
import climb from '@/Assets/video/Grimpeur.mp4'
import Movie from '@/Components/Movie/Movie.js';
import Arc from '@/Assets/video/Tir_Arc.mp4';
import Tree from '@/Assets/video/Plante.mp4';
import LogoTree from '@/Assets/Images/Tree.png';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './seo.scss';
import Questions from '../../Components/Questions/Questions.js';
import GoogleWidget from '../../Components/Google/GoogleWidget/GoogleWidget.js';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';


const MontereauFy = () => {
    const ville = 'Montereau-Fault-Yonne';
    const metaTitle = `Attribut Conseils - Bilan de compétences à ${ville}`
    const metaDescription = `Vous cherchez à réaliser votre bilan de compétence à ${ville}? Contactez-nous !`
    return (
        <section className='Seo'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />
            <h1><span>Votre</span><br /> BILAN DE COMPÉTENCES A <span className='Title city'>{ville}</span></h1>
            <p className='Seo_Yellow'>Vous cherchez à réaliser un bilan de compétences à {ville} ? Contactez notre cabinet spécialisé en Seine-et-Marne, retour rapide assuré !</p>
            <div className="Seo container-img">
                <img className='Tree' src={LogoTree} alt="Logo arbre Attribut conseils" />
            </div>
            <article className="Seo-article">
                <p>
                    Le bilan de compétences est un outil essentiel pour orienter une transition professionnelle ou une réorientation de carrière. Il repose sur l'identification des forces et aspirations individuelles, confrontées à la réalité du marché du travail ou du contexte professionnel.
                </p>
                <p>
                    En examinant en profondeur le parcours personnel et professionnel de chaque individu, le bilan de compétences vise à garantir le succès et à obtenir des résultats tangibles. En plus d'offrir une meilleure connaissance de soi-même, il permet d'agir de manière stratégique en élaborant un projet clair et un plan d'action précis. L'accompagnement personnalisé par des consultants en gestion de carrière assure une approche sur mesure et une stratégie réfléchie pour la construction d'un projet professionnel viable.
                </p>
                <p>
                    Attribut Conseils met à disposition son expertise pour soutenir chacun dans sa réussite professionnelle et son épanouissement. Notre équipe est disponible pour réaliser des bilans de compétences en Île-de-France, notamment à Montereau-Fault-Yonne, dans le département de Seine-et-Marne.
                </p>
            </article>
            <article className="timeline right-container withMovie">
                <h2>Qui peut faire un bilan de compétences ?</h2>
                <div>
                    <p>
                        Le cabinet ATTRIBUT CONSEILS, spécialisé dans la gestion de carrière professionnelle, propose des <b>bilans de compétences</b> adaptés à tous les profils. Que vous travailliez dans le secteur public ou privé, quel que soit votre niveau, votre statut ou votre domaine d'activité, que vous occupiez un poste de direction, de cadre supérieur, de technicien ou d'ouvrier, notre service est conçu pour répondre à vos besoins.
                    </p>
                    <Movie src={climb} />
                </div>
            </article>
            <article className="timeline right-container articleCertif">
                <h3>Le bilan de compétences pour les salariés et pour les demandeurs d'emploi</h3>
                <div className='articleCertif-container'>
                    <div className='articleCertif-container-text'>
                        <p>Si vous avez <b>cumulé des droits à la formation</b>, votre CPF est crédité chaque année en avril. Le financement d'un <b>bilan de compétences</b> dépend de votre situation, de votre statut et des modalités. Pour couvrir les frais d'un bilan de compétences, vous disposez de quatre options : utiliser vos droits CPF, le plan de développement des compétences (PDC) de votre employeur, France travail ou opter pour un financement personnel. Vous avez la possibilité d'effectuer le bilan de compétences pendant ou en dehors de vos heures de travail, sans obligation d'informer votre employeur.</p>
                        <p>Pour mieux connaitre vos droits à la formation, les modalités de financements pour les salariés du public ou du privé</p>
                    </div>
                    <div className="articleCertif-pic">
                        < img src={Qualiopi} alt="Logo Qualiopi" />
                        < img className='LogCpf' src={Cpf} alt="Logo Qualiopi" />
                    </div>
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline left-container">
                <h2>Pourquoi faire un bilan de compétences ?</h2>
                <p className='left-container_AlignStart'>Il existe diverses motivations pour prendre rendez-vous avec des consultants comme <b>Attribut Conseils</b> pour réaliser un bilan de compétences. Cet outil est remarquablement efficace pour atteindre plusieurs objectifs en matière de gestion de carrière.</p>
            </article>
            <article className="timeline left-container withMovie">
                <h3 className='text-centered'>L'évaluation de vos compétences pour un changement professionnel</h3>
                <div>
                    <p className='text-end'>Lorsque vous envisagez une reconversion professionnelle, le <b>bilan de compétences</b> représente un point de départ essentiel. Que ce soit pour votre <b>vie professionnelle ou vie personnelle</b>, vous avez acquis des compétences techniques et développé des qualités relationnelles  pour votre carrière. Grâce au bilan de compétences, appuyé par des <b>tests d'orientation et de personnalité</b>, vous prenez conscience de vos véritables points forts, identifiez ceux qui seront bénéfiques, ainsi que les compétences à acquérir pour atteindre vos objectifs..</p>

                    <Movie src={Arc} />
                </div>
            </article>
            <ContactButton text="Je demande mon bilan de compétences" />
            <article className="timeline right-container">
                <h3>La définition d'un projet de reconversion professionnelle pour retrouver du sens au travail</h3>
                <div>
                    <p>Envisagez-vous une reconversion mais avez-vous du mal à construire un plan d'évolution précis? Durant votre bilan de compétences, votre consultant sera là pour vous guider vers les secteurs en accord avec vos objectifs. Vous bénéficierez ensuite de recommandations sur les formations nécessaires pour accéder à chaque métier identifié. Grâce à un suivi personnalisé, vous pourrez développer un projet professionnel concret tout en ayant les moyens nécessaires pour le concrétiser.</p>
                </div>
            </article>
            <article className="timeline right-container">
                <h3>Travailler votre mobilité interne ou obtenir un poste à responsabilité dans votre entreprise</h3>
                <div>
                    <p><b>Le bilan de compétences</b> s'adresse aussi à ceux désirant évoluer en interne. Nos experts évaluent le transfert de compétences, renforçant ainsi vos chances d'accéder à des postes plus élevés ou à d'autres missions. Ils vous aident à cerner vos atouts et faiblesses vis-à-vis des exigences internes. À la clôture du bilan, vous serez mieux armé pour saisir les opportunités de promotion.</p>
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline left-container">
                <h3 className='text-end'>Améliorer votre profil pour les recruteurs</h3>
                <p className='text-end'>La réalisation d'un <b>bilan de compétences</b> envoie un signal extrêmement positif lors d'un  recrutement. Cette expérience enrichissante,  dans votre CV, est généralement discutée lors des entretiens. Cette démarche renforce la crédibilité de votre candidature et témoigne de votre engagement à dépasser vos limites. C'est un indicateur manifeste de motivation qui peut faire toute la différence.</p>
                <p className='text-end'>Lors de notre bilan de compétences à <b>Montereau-Fault-Yonne</b>, notre cabinet Attribut Conseils vous offre des outils concrets pour mettre en valeur votre profil. Notre équipe est là pour vous aider à perfectionner votre stratégie de recherche d’emploi et à réviser vos outils de communication..</p>
            </article>
            <article className="timeline left-container">
                <h3 className='text-centered'>La création d'entreprise</h3>
                <div className='left-container video-flexRow'>
                    <p className='text-end'>
                        Le bilan de compétences révèle les aptitudes entrepreneuriales et s'avère crucial pour ceux envisageant un projet de création d'entreprise. Avec un accompagnement personnalisé, vous identifiez clairement vos points forts et les domaines à améliorer.
                        Les entretiens pour votre bilan de compétences à Montereau-Fault-Yonne renforcent votre projet et fournissent des informations sur les dispositifs d'aide aux nouveaux entrepreneurs. Vous avez également la possibilité de suivre <Link to="/formation_creation_entreprise#top">une formation à la création d'entreprise en Seine-et-Marne</Link>. À la fin, vous repartez avec un plan d'action détaillé pour le développement de votre projet.
                    </p>
                    <div className='movieCentered'>
                        <Movie src={Tree} />
                    </div>
                </div>
            </article>
            <ContactButton text="Contactez-nous" />
            <GoogleWidget />
            <article className="Seo-article">
                <h2 className='title-Melun-textStart'>Bilan de compétences à {ville} </h2>
                <p>Faites confiance à Attribut Conseils - Avec une note de 5 sur 5 basée sur 170 avis Google.<span className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span></p>
                <p>À {ville}, réaliser un bilan de compétences permet de faire le point sur vos compétences, vos pistes d'évolution et les domaines nécessitant des améliorations. Les résultats obtenus permettent de cerner vos besoins en formation, à gagner confiance en vos capacités et à travailler sur vos points faibles pour une meilleure insertion professionnelle. Chez Attribut Conseils, ce processus se déroule en trois étapes principales : </p>
                <ul className='liste-Melun'>
                    <li>La phase préliminaire : <b>un entretien gratuit et sans engagement</b> pour analyser votre demande et vos besoins, et déterminer le format le plus adapté à votre situation.</li>
                    <li>L'investigation : la construction de votre projet professionnel, l'évaluation de sa pertinence et l'élaboration d'alternatives si nécessaire.</li>
                    <li>La conclusion : des entretiens personnalisés pour vous approprier les résultats de l'étape précédente, définir les conditions et les moyens favorisant l'atteinte de vos objectifs, et établir les principales modalités et étapes pour la réalisation de votre projet, telles que présentées dans la synthèse produite par Attribut Conseils.</li>
                </ul>
                <p>Fort de plus de 16 ans d'expérience, notre cabinet est reconnu comme l'un des meilleurs pour la réalisation de bilans de compétences à {ville}. Notre équipe comprend des psychologues du travail, des consultants experts en bilan, des ingénieurs de formation, des spécialistes en coaching, ainsi que d'anciens professionnels des ressources humaines et dirigeants d'entreprise.</p>
                <p>En tant que leader, Attribut Conseils accompagne chaque année des centaines de salariés dans diverses problématiques professionnelles. Que vous soyez à Torcy, Lagny-sur-Marne, Fontainebleau, Meaux ou ailleurs en Seine-et-Marne, nos services sont à votre disposition. Les entretiens peuvent également être organisés à distance via visioconférence, afin d'accueillir les professionnels d'autres départements et régions de France.</p>
            </article>
            <TelButton number="06 98 88 15 55" />
            <ScrollToTop />
            <Questions tag={['all']} ville={ville} />
        </section >
    );
};

export default MontereauFy;