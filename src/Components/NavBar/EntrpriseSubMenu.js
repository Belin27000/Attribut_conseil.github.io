import React from 'react';
import { Link } from 'react-router-dom';
const EntrpriseSubMenu = () => {

    return (
        <ul className='sous-menu'>
            <li><Link to="/ComingSoon" >entretiens professionnels</Link></li>
            <li><Link to="/ComingSoon" >gestion RH externalisée</Link></li>
        </ul>
    );
};

export default EntrpriseSubMenu;