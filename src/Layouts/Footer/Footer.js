import React from 'react';
import Bandeau from '@/Assets/Images/Bandeau.jpg'
import Qualiopi from '@/Assets/Images/Logo_Qualiopi.png'
import Cpf from '@/Assets/Images/logo_CPF.png'
import Charte from '@/Assets/Images/chartedeontologieCPF-1.jpeg'
import '@/Layouts/Footer/footer.css'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='FooterLogoContainer'>
                <div>
                    <img className='Qualiopi' src={Qualiopi} alt='Logo Qualiopi' />
                </div>
                <div>
                    <img className='Cpf' src={Cpf} alt='Logo Mon compte formation' />
                </div>
                <div>
                    <img className='Charte' src={Charte} alt='Logo Mon compte formation' />
                </div>
            </div>
            <div className='FooterPictureFont'>
                <img src={Bandeau} alt="Header font" />
                <p className='FooterPunchLine'>Spécialiste de la gestion de carrière et de la relation Homme/Travail</p>
            </div>
        </footer>
    );
};

export default Footer;