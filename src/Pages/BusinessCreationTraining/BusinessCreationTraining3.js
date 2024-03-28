import React from 'react';
import Tree from '@/Assets/Images/Tree.png'
import FlagCPF from '@/Assets/Images/CPF_France.png'
import success from '@/Assets/Images/success.png'
import './businessCreationTraining.scss';

const BusinessCreationTraining = () => {
    return (
        <section className='bct'>
            <div className="container">
                <div className="Landing-Page container-img">
                    <img className='Tree' src={Tree} alt="Logo arbre Attribut conseils" />
                    <img className='FlagCPF' src={FlagCPF} alt="Logo CPF avec drapeau Français" />
                </div>
                <div className='container-head'>
                    <h1><span>Votre</span><br /> ACCOMPAGNEMENT CRÉATION D’ENTREPRISE</h1>
                    <h2>Préparez-vous à réussir<br /><span>otre création d’entreprise !
                    </span></h2>
                </div>
            </div>
            <p className='bct-pres'>Bienvenue,<br />
                Vous aspirez à concrétiser votre projet de création d’entreprise ? Vous recherchez à développer vos compétences entrepreneuriales et à inscrire votre entreprise dans une trajectoire de croissance durable ?
            </p>
            <p className='bct-pres'>Notre formation, entièrement personnalisée, a pour objectif de vous aider à prendre du recul afin de libérer le potentiel de croissance de votre future entreprise. Nous vous accompagnons dans la structuration et la consolidation de votre projet, en vous préparant à relever les défis de demain, pour un lancement serein et assuré.</p>
            <div className='Success-container'>
                <p>L’accompagnement<br />est le gage d’une<br /> réussite<br /> entrepreneuriale. 85 % des entreprises accompagnées sont toujours en activité 3 ans après leur <br />création. </p>
                <img className='Success' src={success} alt="Logo recompense" />
            </div>
        </section>
    );
};

export default BusinessCreationTraining;