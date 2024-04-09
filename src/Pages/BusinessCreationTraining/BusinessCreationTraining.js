import React, { useEffect, useState } from 'react';
import Tree from '@/Assets/Images/Tree.png'
import FlagCPF from '@/Assets/Images/CPF_France.png'
import success from '@/Assets/Images/success.png'
import './businessCreationTraining.scss';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';

const BusinessCreationTraining = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollLittlePosition, setScrollLittlePosition] = useState(0);
    const [scrollLinePosition, setScrollLinePosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 1100) {
                setScrollPosition(window.scrollY);
                // const base = window.scrollTo(0, 0)
                // setScrollPosition(1500);
            }

            if (window.scrollY < 1400) {
                setScrollLittlePosition(window.scrollY);

            }
            if (window.scrollY < 1300) {
                setScrollLinePosition(window.scrollY);

            }
            // setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    const metaTitle = `Attribut Conseils - Formation à la création d'entreprise `
    const metaDescription = `Vous souhaitez être accompagné pour la création de votre entreprise ? Contactez Attribut conseils en Seine et Marne !`
    return (
        <section className='bct'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />

            <div className="container">
                <div className="Landing-Page container-img">
                    <img className='Tree' src={Tree} alt="Logo arbre Attribut conseils" />
                    <img className='FlagCPF' src={FlagCPF} alt="Logo CPF avec drapeau Français" />
                </div>
                <div className='container-head'>
                    <h1><span>Votre</span><br /> ACCOMPAGNEMENT CRÉATION D’ENTREPRISE</h1>
                    <h2>Préparez-vous à réussir<br /><span>Votre création d’entreprise !
                    </span></h2>
                </div>
            </div>
            <div className='bct-description'>
                <div className='bct-pres'>
                    <p >Bienvenue,<br />
                        Vous aspirez à concrétiser votre projet de création d’entreprise ? Vous recherchez à développer vos compétences entrepreneuriales et à inscrire votre entreprise dans une trajectoire de croissance durable ?
                    </p>
                    <p>Notre formation, entièrement personnalisée, a pour objectif de vous aider à prendre du recul afin de libérer le potentiel de croissance de votre future entreprise. Nous vous accompagnons dans la structuration et la consolidation de votre projet, en vous préparant à relever les défis de demain, pour un lancement serein et assuré.</p>
                </div>
                <div className='Success-container'>
                    <p>L’accompagnement<br />est le gage d’une<br /> réussite<br /> entrepreneuriale. 85 % des entreprises accompagnées sont toujours en activité 3 ans après leur <br />création. </p>
                    <img className='Success' src={success} alt="Logo recompense" />
                </div>
            </div>
            <div className='training-path'>
                <div className="description">
                    <h2>Comment se déroule la formation? {scrollPosition} {scrollLittlePosition}</h2>
                    <p>Chaque formation à la création d’entreprise est conçue de manière spécifique, offrant un apprentissage individualisé pour <b>répondre à vos besoins uniques</b>. Nous nous appuyons sur une méthodologie générale tout en adaptant les contenus et les outils à votre projet spécifique.
                    </p>
                    <p>Vous bénéficierez de l'accompagnement d'un dirigeant expérimenté de PME, spécialisé dans le soutien aux jeunes créateurs. <b>Un premier entretien, gratuit et sans engagement</b>, nous permettra d'analyser vos besoins afin de concevoir un programme sur mesure qui vous convienne.</p>
                    <p>Notre approche privilégie une pratique intensive, avec un ratio de 10% théorique et 90% pratique. Tout au long de la formation, vous travaillerez activement sur votre projet de création, depuis l'exploration de votre idée jusqu'à la concrétisation de votre entreprise.</p>
                </div>
                <div className='yellow-circle' style={{ transform: `translateX(${scrollPosition - 2150}px)` }}></div>
                <div className='white-circle' style={{ transform: `translateX(${scrollLittlePosition - 2450}px)` }}></div>
                <div className='yellow-line' style={{ transform: `translateX(${scrollLinePosition - 2250}px)` }}></div>
                {/* <div>
                    <img src={Tree} alt="Logo arbre Attribut conseils" />
                    <p></p>
                    <img src={Tree} alt="Logo arbre Attribut conseils" />
                </div> */}
            </div>
        </section>
    );
};

export default BusinessCreationTraining;