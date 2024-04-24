import ScrollToTop from '@/Components/Button/ScrollButton/ScrollToTop.js';
import TelButton from '@/Components/Button/TelButton/TelButton.js';
import Qualiopi from '@/Assets/Images/Logo_Qualiopi.png'
import Cpf from '@/Assets/Images/logo_CPF.webp'
import climb from '@/Assets/video/Grimpeur.mp4'
import Movie from '@/Components/Movie/Movie.js';
// import Arc from '@/Assets/video/Tir_Arc.mp4';
import fireworks from '@/Assets/Images/fireworks.png';
import LogoTree from '@/Assets/Images/Tree.png';
import Light from '@/Assets/Images/LightStairs.png';
import React from 'react';
import '../BcCPF/bcCPF.scss';
// import '../seo.scss';
import Questions from '@/Components/Questions/Questions.js';
import GoogleWidget from '@/Components/Google/GoogleWidget/GoogleWidget.js';
import MetaTitleDes from '@/Components/Meta/MetaTitleDes.js';

import CircleDot from '@/Components/CircleDot/CircleDot.js';

const BcCPF = () => {
    const ville = 'Fontainebleau';
    const metaTitle = `Attribut Conseils - Bilan de compétences à ${ville}`
    const metaDescription = `Vous cherchez à réaliser votre bilan de compétence à ${ville}? Contactez-nous !`

    const mainTitleFaq = 'FAQ : Bilan de compétences et cpf'
    const mainPfaq = 'Vous avez des questions sur le processus de bilan de compétences ou sur la reconversion professionnelle en général ? Consultez notre foire aux questions pour des réponses claires et concises. Nous sommes là pour dissiper vos doutes et vous fournir les informations dont vous avez besoin pour prendre des décisions éclairées sur votre avenir professionnel.'
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
            <article className="timeline firstRight-container right-container withMovie">
                <h2 className='litleWhiteDot' >Qu’est ce que le CPF?</h2>
                <div className='TextMovieLogo' >
                    <div className='text-col'>
                        <p>Le Compte Personnel de Formation (CPF) est un dispositif instauré en France pour permettre à chaque actif, qu'il soit salarié ou demandeur d'emploi, d'acquérir des droits à la formation tout au long de sa carrière professionnelle. Concrètement, le CPF est un compte individuel alimenté en heures de formation, calculées en fonction du temps de travail effectué par l'individu. Ces heures sont créditées chaque année et peuvent être utilisées pour suivre des formations qualifiantes, certifiantes ou d'acquisition des compétences.
                        </p>
                        <p>Le CPF remplace depuis le 1er janvier 2015 le Droit Individuel à la Formation (DIF). Chaque personne dispose ainsi d'un capital d'heures de formation qu'elle peut mobiliser selon ses besoins tout au long de sa vie professionnelle.
                        </p>
                    </div>
                    <div className='withMovieAndLogo'>
                        <Movie src={climb} />
                        <div className="articleCertif-pic">
                            < img src={Qualiopi} alt="Logo Qualiopi" />
                            < img className='LogCpf' src={Cpf} alt="Logo Qualiopi" />
                        </div>
                    </div>
                </div>
                {/* </article>
            <article className="timeline right-container articleCertif"> */}
                <div className='articleCertif-container downDot'>
                    <div className='articleCertif-container-text'>
                        <p>Ce dispositif a été mis en place dans le but de favoriser l'employabilité des actifs en leur permettant d'accéder plus facilement à la formation professionnelle. En offrant la possibilité d'acquérir de nouvelles compétences et de se perfectionner tout au long de sa carrière, le CPF contribue à renforcer la compétitivité des travailleurs sur le marché du travail et à favoriser leur évolution professionnelle.
                        </p>
                        <p>Le CPF est accessible à tous les actifs, qu'ils soient en emploi, à la recherche d'un emploi. Les heures de formation acquises sur le CPF peuvent être utilisées pour suivre des formations éligibles répertoriées sur le site officiel dédié, Mon Compte Formation.
                        </p>
                    </div>
                </div>
            </article>
            <article className="timeline simpleCont-leftPic">
                <div>
                    <h2>Le bilan de compétences via le CPF </h2>
                    <p>Utiliser son Compte Personnel de Formation (CPF) pour financer un bilan de compétences est une démarche pertinente pour toute personne désireuse de prendre un temps de réflexion sur son parcours professionnel et d'envisager des perspectives d'évolution ou de reconversion. Le bilan de compétences est une prestation spécifique qui permet à chacun de faire le point sur ses compétences, ses motivations et ses aspirations professionnelles.
                    </p>
                </div>
                <CircleDot displayAll={false} />
            </article>
            <article className="timeline right-container withMovie">
                <p >Grâce au CPF, il est possible de financer intégralement un bilan de compétences sans avoir à mobiliser ses propres ressources financières. Cette opportunité permet à tous les actifs, qu'ils soient salariés ou demandeurs d'emploi, d'accéder à cette démarche essentielle pour leur développement professionnel. </p>
                <p>La première étape pour utiliser son CPF pour un bilan de compétences est de s'assurer que l'organisme proposant cette prestation est bien agréé par les autorités compétentes, qu’il possède de l’expérience. Chez Attribut Conseils, nous sommes un organisme agréé depuis 16 ans et nous sommes spécialisé dans la gestion de carrière. Une fois cette vérification effectuée, vous pouvez directement nous contacter ou vous connecter sur le site officiel Mon Compte Formation pour vérifier le solde de son CPF et démarrer la démarche de financement.</p>
            </article>
            <article className="timeline right-container-downDot">
                <div className='downDot'>
                    <p>Une fois votre demande de financement validée, vous pourrez entamer votre bilan de compétences en toute sérénité. Cette démarche se déroule généralement en plusieurs étapes, comprenant des entretiens individuels avec un consultant spécialisé, des tests psychotechniques et des exercices d'exploration de ses compétences et de ses motivations professionnelles.
                    </p>
                    <p>Le bilan de compétences via le CPF offre ainsi une opportunité unique de prendre du recul sur son parcours professionnel, de mieux se connaître et de définir des objectifs professionnels clairs et réalistes. Cette démarche peut être particulièrement utile dans le cadre d'une reconversion professionnelle ou d'une évolution de carrière, en permettant à chacun de prendre des décisions éclairées et de se donner les moyens de réussir dans son projet professionnel. Chez Attribut Conseils, nous sommes là pour vous accompagner dans cette démarche et vous offrir un service personnalisé et de qualité.
                    </p>
                </div>
            </article>
            <TelButton number="06 98 88 15 55" />
            <article className="timeline light ">
                <div className='light-text'>
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
                <div className='light-pic'>
                    <img src={Light} alt="Ampoule sur un escalier" />
                </div>
            </article>
            <article className="timeline fireworks ">
                <div className='circleInFire'>
                    <img src={fireworks} alt="" />
                    <div className="yellowCircle"></div>
                    <div className="whiteCircle"></div>
                </div>
                <div className='text'>

                    <h2 className='text-start'>Témoignages et retours d'expérience
                    </h2>
                    <p className='text-start'>Nos clients ont été nombreux à utiliser leur CPF pour financer un bilan de compétences chez Attribut Conseils, et les retours d'expérience sont unanimes. Beaucoup ont témoigné de l'impact positif de cette démarche sur leur parcours professionnel, en leur permettant de clarifier leurs objectifs et de prendre des décisions éclairées pour leur avenir. Les histoires de réussite de nos clients sont la meilleure preuve de l'efficacité du bilan de compétences dans le cadre d'une reconversion professionnelle.
                    </p>
                </div>
                <CircleDot displayAll={false} />
            </article>
            <GoogleWidget />

            {/* <TelButton number="06 98 88 15 55" /> */}
            <Questions tag='CPF' mainTitleFaq={mainTitleFaq} mainPfaq={mainPfaq} />
            <ScrollToTop />
        </section >
    );
};

export default BcCPF;