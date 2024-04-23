import ScrollToTop from '../../Components/Button/ScrollButton/ScrollToTop.js';
import TelButton from '../../Components/Button/TelButton/TelButton.js';
import ContactButton from '../../Components/Button/ContactButton.js';
import Qualiopi from '@/Assets/Images/Logo_Qualiopi.png'
import Cpf from '@/Assets/Images/logo_CPF.webp'
import climb from '@/Assets/video/Grimpeur.mp4'
import Movie from '@/Components/Movie/Movie.js';
// import Arc from '@/Assets/video/Tir_Arc.mp4';
import Tree from '@/Assets/video/Plante.mp4';
import LogoTree from '@/Assets/Images/Tree.png';
import Light from '@/Assets/Images/LightStairs.png';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react';
import './seo.scss';
import Questions from '../../Components/Questions/Questions.js';
import GoogleWidget from '../../Components/Google/GoogleWidget/GoogleWidget.js';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';
import './seo.scss';
import CircleDot from '../../Components/CircleDot/CircleDot.js';

const BcCPF = () => {
    const ville = 'Fontainebleau';
    const metaTitle = `Attribut Conseils - Bilan de compétences à ${ville}`
    const metaDescription = `Vous cherchez à réaliser votre bilan de compétence à ${ville}? Contactez-nous !`
    return (
        <section className='Seo'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />

            <h1>BILAN DE COMPÉTENCES CPF: <br />Prix et financement</h1>
            <div className="Seo container-img">
                <img className='Tree' src={LogoTree} alt="Logo arbre Attribut conseils" />
            </div>
            <article className="Seo-article">
                <p>Vous envisagez peut-être une évolution professionnelle ou une reconversion, mais vous vous demandez par où commencer. C'est là qu'intervient le Compte Personnel de Formation (CPF). Ce dispositif, essentiel pour le développement professionnel, offre une opportunité unique de financer des formations tout au long de votre carrière. Mais saviez-vous que le CPF peut également être utilisé pour financer un bilan de compétences ? Chez Attribut Conseils, nous comprenons l'importance de cette démarche dans votre parcours professionnel.
                </p>
                <p>Le CPF, instauré par le gouvernement français, vise à renforcer les compétences des actifs en leur permettant d'accéder à des formations adaptées à leurs besoins. Il s'agit d'un outil puissant pour favoriser l'employabilité et l'évolution professionnelle. Dans cette optique, le bilan de compétences apparaît comme une étape essentielle pour mieux se connaître, identifier ses atouts et ses axes de développement, et définir un projet professionnel cohérent et réaliste.
                </p>
                <p>
                    Dans cette page dédiée au bilan de compétences CPF, nous vous guiderons à travers les différentes étapes de cette démarche. Nous vous expliquerons comment utiliser votre CPF pour financer un bilan de compétences et quels en sont les avantages pour votre carrière. Chez Attribut Conseils, nous sommes là pour vous accompagner dans cette démarche et vous aider à prendre les bonnes décisions pour votre avenir professionnel.
                </p>
            </article>
            <article className="timeline right-container withMovie">
                <h2>Qu’est ce que le CPF?</h2>
                <div>
                    <div>
                        <p>Le Compte Personnel de Formation (CPF) est un dispositif instauré en France pour permettre à chaque actif, qu'il soit salarié ou demandeur d'emploi, d'acquérir des droits à la formation tout au long de sa carrière professionnelle. Concrètement, le CPF est un compte individuel alimenté en heures de formation, calculées en fonction du temps de travail effectué par l'individu. Ces heures sont créditées chaque année et peuvent être utilisées pour suivre des formations qualifiantes, certifiantes ou d'acquisition des compétences.
                        </p>
                        <p>Le CPF remplace depuis le 1er janvier 2015 le Droit Individuel à la Formation (DIF). Chaque personne dispose ainsi d'un capital d'heures de formation qu'elle peut mobiliser selon ses besoins tout au long de sa vie professionnelle.
                        </p>
                    </div>
                    <Movie src={climb} />
                    <div className="articleCertif-pic">
                        < img src={Qualiopi} alt="Logo Qualiopi" />
                        < img className='LogCpf' src={Cpf} alt="Logo Qualiopi" />
                    </div>
                </div>
            </article>
            <article className="timeline right-container articleCertif">
                <div className='articleCertif-container'>
                    <div className='articleCertif-container-text'>
                        <p>Ce dispositif a été mis en place dans le but de favoriser l'employabilité des actifs en leur permettant d'accéder plus facilement à la formation professionnelle. En offrant la possibilité d'acquérir de nouvelles compétences et de se perfectionner tout au long de sa carrière, le CPF contribue à renforcer la compétitivité des travailleurs sur le marché du travail et à favoriser leur évolution professionnelle.
                        </p>
                        <p>Le CPF est accessible à tous les actifs, qu'ils soient en emploi, à la recherche d'un emploi. Les heures de formation acquises sur le CPF peuvent être utilisées pour suivre des formations éligibles répertoriées sur le site officiel dédié, Mon Compte Formation.
                        </p>
                    </div>
                </div>
            </article>
            <article className="timeline left-container">
                <div>
                    <h2>Le bilan de compétences via le CPF </h2>
                    <p>Utiliser son Compte Personnel de Formation (CPF) pour financer un bilan de compétences est une démarche pertinente pour toute personne désireuse de prendre un temps de réflexion sur son parcours professionnel et d'envisager des perspectives d'évolution ou de reconversion. Le bilan de compétences est une prestation spécifique qui permet à chacun de faire le point sur ses compétences, ses motivations et ses aspirations professionnelles.
                    </p>
                </div>
                <CircleDot />
            </article>
            <article className="timeline right-container withMovie">
                <p >Grâce au CPF, il est possible de financer intégralement un bilan de compétences sans avoir à mobiliser ses propres ressources financières. Cette opportunité permet à tous les actifs, qu'ils soient salariés ou demandeurs d'emploi, d'accéder à cette démarche essentielle pour leur développement professionnel. </p>
                <p>La première étape pour utiliser son CPF pour un bilan de compétences est de s'assurer que l'organisme proposant cette prestation est bien agréé par les autorités compétentes, qu’il possède de l’expérience. Chez Attribut Conseils, nous sommes un organisme agréé depuis 16 ans et nous sommes spécialisé dans la gestion de carrière. Une fois cette vérification effectuée, vous pouvez directement nous contacter ou vous connecter sur le site officiel Mon Compte Formation pour vérifier le solde de son CPF et démarrer la démarche de financement.</p>
            </article>
            <article className="timeline right-container">
                <div>
                    <p>Une fois votre demande de financement validée, vous pourrez entamer votre bilan de compétences en toute sérénité. Cette démarche se déroule généralement en plusieurs étapes, comprenant des entretiens individuels avec un consultant spécialisé, des tests psychotechniques et des exercices d'exploration de ses compétences et de ses motivations professionnelles.
                    </p>
                    <p>Le bilan de compétences via le CPF offre ainsi une opportunité unique de prendre du recul sur son parcours professionnel, de mieux se connaître et de définir des objectifs professionnels clairs et réalistes. Cette démarche peut être particulièrement utile dans le cadre d'une reconversion professionnelle ou d'une évolution de carrière, en permettant à chacun de prendre des décisions éclairées et de se donner les moyens de réussir dans son projet professionnel. Chez Attribut Conseils, nous sommes là pour vous accompagner dans cette démarche et vous offrir un service personnalisé et de qualité.
                    </p>
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline ">
                <div>
                    <h2>Comment Attribut Conseils peut vous aider ? </h2>
                    <p>Chez Attribut Conseils, nous comprenons que le choix d'entreprendre un bilan de compétences via le CPF est une étape importante dans votre parcours professionnel. C'est pourquoi nous mettons à votre disposition notre expertise et notre savoir-faire pour vous accompagner dans cette démarche.</p>
                    <p>Tout d'abord, notre équipe de consultants expérimentés est là pour vous guider tout au long du processus. Nous commençons par une première rencontre pour comprendre vos besoins, vos attentes et vos objectifs professionnels. Cette étape nous permet de personnaliser notre accompagnement et de vous proposer une démarche adaptée à votre situation.</p>
                    <p>Ensuite, nous vous assistons dans toutes les démarches administratives liées à l'utilisation de votre CPF pour financer votre bilan de compétences. Nous vous aidons à vérifier vos droits, à constituer votre dossier de demande de financement et à suivre l'avancement de votre demande sur le site officiel Mon Compte Formation.
                    </p>
                    <p>Une fois votre demande de financement approuvée, nous mettons en place un programme de bilan de compétences sur mesure, en fonction de vos besoins et de vos objectifs. Ce programme comprend des entretiens individuels avec un consultant spécialisé, des tests psychotechniques et de personnalité, des exercices d'exploration de vos compétences et de vos motivations, de l’analyse marché.</p>
                    <p>Tout au long du bilan de compétences, notre équipe reste à votre écoute pour répondre à vos questions, vous fournir des conseils avisés et vous soutenir dans votre réflexion. Notre objectif est de vous offrir un accompagnement personnalisé et de qualité, pour vous permettre de tirer le meilleur parti de cette démarche et de prendre des décisions éclairées pour votre avenir professionnel.</p>
                    <p>En choisissant Attribut Conseils pour votre bilan de compétences via le CPF, vous faites le choix de la qualité, de l'expertise et du professionnalisme. Nous mettons tout en œuvre pour vous aider à réussir dans votre projet professionnel et à atteindre vos objectifs. N'hésitez pas à nous contacter pour plus d'informations ou pour démarrer votre bilan de compétences dès aujourd'hui.
                    </p>
                </div>
                <div>
                    <img src={Light} alt="Ampooule sur un escalier" />
                </div>
            </article>
            <article className="timeline left-container">
                <h3 className='text-end'>Améliorer votre profil pour les recruteurs</h3>
                <p className='text-end'>Un candidat qui a effectué son bilan de compétences envoie un signal très positif lors d'un recrutement. Indiquée dans votre CV, cette <b>expérience enrichissante</b> est généralement abordée au cours de l'entretien. Ce développement donne davantage de crédit à votre candidature et démontre votre envie de dépasser vos limites. Il s'agit d'un gage de motivation qui peut être décisif.</p>
                <p className='text-end'>Lors du bilan de compétences à {ville}, notre <b>cabinet de coaching Attribut Conseils</b> vous propose des outils concrets pour mettre votre profil en valeur. Notre équipe est par exemple disponible pour aider à repenser votre CV, travailler la lettre de motivation, etc.</p>
            </article>
            <article className="timeline left-container">
                <h3 className='text-centered'>La création d'entreprise</h3>
                <p className='text-end'>Composé de plusieurs tests, le bilan de compétences se distingue également comme un levier pertinent pour le professionnel qui désire mieux appréhender son <b>projet de création d'entreprise</b>. Un accompagnement personnel vous permet de mieux connaître votre profil d'entrepreneur. Vos différentes facultés sont clairement identifiées et vous savez quels sont vos points forts et les éléments sur lesquels vous devez encore travailler.</p>
                <div className='movieCentered'>
                    <Movie src={Tree} />
                </div>
                <p className='text-end'>Les entretiens pour votre <b>bilan de compétences</b> à {ville} permettent par ailleurs de consolider votre projet. Vous obtenez des informations précieuses sur les dispositifs d'aides accessibles aux nouveaux entrepreneurs. Tout cela est déterminant si vous souhaitez créer les meilleures conditions pour mettre en place votre activité entrepreneuriale. Il est d'ailleurs possible d'opter pour <Link to="/formation_creation_entreprise#top">une formation à la création d'entreprise en Seine-et-Marne</Link> pour aller plus loin sur le sujet. Vous ressortez avec une feuille de route précisant les actions indispensables au bon développement de votre projet.</p>
            </article>
            <ContactButton text="Contactez-nous" />
            <GoogleWidget />

            <article className="Seo-article">
                <h2>Bilan de compétences à {ville} </h2>
                <p>Faites confiance à Attribut Conseils - C’est 170 avis google<span className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span></p>
                <p>Réaliser des bilans de compétences à {ville}, c'est faire le point de vos aptitudes, vos <b>pistes d'évolution</b> complétés par ainsi que les améliorations nécessaires. Les résultats vous aident à identifier vos besoins en termes de formation. Vous apprenez à avoir confiance en vos capacités et à travailler sur vos points faibles pour une meilleure intégration professionnelle. Chez Attribut Conseils, cela passe par trois principales étapes qui sont : </p>
                <ul>
                    <li>La phase préliminaire,</li>
                    <li>L’investigation</li>
                    <li>La conclusion.</li>
                </ul>
                <p>La phase préliminaire est <b>un entretien gratuit et sans engagement</b>. Elle consiste à analyser la demande et le besoin du bénéficiaire. C'est aussi le moment où nos consultants déterminent le format le plus adapté à votre situation. À votre écoute, nous définissons ensemble les modalités de déroulement du bilan de compétences.</p>
                <p>L'investigation correspond à la construction de votre projet professionnel, à l'évaluation de sa pertinence et, si nécessaire, à l'élaboration d'alternatives.La conclusion se déroule via des <b>entretiens personnalisés</b> durant lesquels vous pourrez vous approprier les résultats de l'étape précédente. On relève les conditions et les moyens qui favoriseront l'atteinte de vos objectifs. Les principales modalités et étapes pour la réalisation de votre projet sont définies à l'issue du bilan de compétences dans la synthèse produite par Attribut Conseils.</p>
                <p>Avec plus de 16 ans d'expérience à notre actif, nous sommes l'un des meilleurs cabinets pour la réalisation de bilans de compétences à {ville}. Notre équipe est constituée de psychologues du travail, de consultants experts bilan, d'ingénieurs de formation, de spécialistes en coaching, d'anciens RH et dirigeants d'entreprise.
                </p>
                <p>En tant que leader, Attribut Conseils aide des centaines de salariés chaque année et traite diverses problématiques du monde du travail. Vous pouvez recourir à nos services que vous soyez à Torcy, Lagny-sur-Marne, Melun, Meaux ou ailleurs en Seine-et-Marne. Les entretiens étant possibles à distance en visio, les professionnels d'autres départements et régions de France sont les bienvenus.</p>
            </article>
            <TelButton number="06 98 88 15 55" />
            <Questions tag='all' ville='Fontainebleau' />
            <ScrollToTop />
        </section >
    );
};

export default BcCPF;