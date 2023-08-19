import React from 'react';
import Bandeau from '@/Assets/Images/Bandeau.jpg'
import logo_Attribut from '@/Assets/Images/logo_Attribut.png'
import logo_soleil from '@/Assets/Images/Logo_soleil.png'
import { Link } from 'react-router-dom';
import '@/Layouts/Header/header.css'

const Header = () => {
    return (
        <header className='Header'>
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
            <nav className='NavBar'>
                <ul>
                    <li className='NavLink'><Link to="/home">Acceuil</Link></li>
                    <li className='NavLink'><Link to="/ComingSoon">Qui sommes nous</Link></li>
                    <li className='NavLink'><Link to="/ComingSoon">Gestion emploi et carrière</Link></li>
                    <li className='NavLink'><Link to="/ComingSoon">Formation</Link></li>
                    <li className='NavLink'><Link to="/ComingSoon">Ingenierie et administration de la formation</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;