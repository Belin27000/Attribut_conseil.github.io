import React from 'react';
import Bandeau from '@/Assets/Images/Bandeau.jpg'
// import logo_Attribut from '@/Assets/Images/logo_Attribut.png'
import logo_Attribut from '@/Assets/Images/logo_Attribut_Blanc.png'
// import logo_Attribut from '@/Assets/Images/logo_Attribut.webp'
import logo_soleil from '@/Assets/Images/Logo_soleil.webp'
import '@/Layouts/Header/header.scss'
import ContactButton from '../../Components/Button/ContactButton.js';
import NavBar from '@/Components/NavBar.js';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='Header'>
            <div className="headerContact">
                <ContactButton text='Nous contacter' />
            </div>
            <NavBar />
            <Link to={'/home'} className='PictureFont'>
                <img fetchpriority="high" className='Bandeau' src={Bandeau} alt="Header font" />
                <p className='HeaderText' >Expert de la relation homme/travail</p>
            </Link>
            <Link to={'/home'} className='Logos'>
                <div className='LogoContainerAc'>
                    <img width='780'
                        height='528' className='LogoAc' src={logo_Attribut} alt='Attribut Conseil Logo' />
                </div>
                <div className='LogoContainerSun'>
                    <img
                        width='1172'
                        height='1072' className='LogoSun' src={logo_soleil} alt='Attribut Conseil Logo sun' />
                </div>
            </Link>
        </header>
    );
};

export default Header;