import React from 'react';
import { Link } from 'react-router-dom';
import './externButton.scss'

const ExternButton = ({ text }) => {


    return (
        <button className='ExternButton'>
            <Link to='https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/49962155500030_BC4/49962155500030_BC4?contexteFormation=ACTIVITE_PROFESSIONNELLE' target='_blank' rel='noreferrer'>{text}</Link>
        </button>
    );
};

export default ExternButton;