import React from 'react';
import Bandeau from '@/Assets/Images/Bandeau.jpg'
import logo_Attribut from '@/Assets/Images/logo_Attribut.png'
import logo_soleil from '@/Assets/Images/Logo_soleil.png'
import '@/Layouts/Header/header.css'
import NavBar from '@/Components/NavBar.js';

const Header = () => {
    return (
        <header className='Header'>
            <NavBar />
            <div className='Logos'>
                <div className='LogoContainer'>
                    <img className='LogoLeft' src={logo_Attribut} alt='Attribut Conseil Logo' />
                </div>
                <p>expert de la relation homme/travail</p>
                <div className='LogoContainer'>
                    <img className='LogoRight' src={logo_soleil} alt='Attribut Conseil Logo sun' />
                </div>
            </div>
            <div className='PictureFont'>
                <img src={Bandeau} alt="Header font" />
            </div>
        </header>
    );
};

export default Header;