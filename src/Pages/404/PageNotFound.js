import React from 'react';
import ProfilPic from '@/Assets/Images/photoDaphne.png'
import './pageNotFound.scss'
import ContactButton from '../../Components/Button/ContactButton.js';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div className='PnF'>
            <h2 className='PnF-title'>Désolé, cette page n'existe plus</h2>
            <Link to={'/contact'}>
                <div className="PnF-PIC">
                    <img src={ProfilPic} alt="Profil Daphne Battaglia" />
                </div>
            </Link>
            <ContactButton />
        </div>
    );
};

export default PageNotFound;