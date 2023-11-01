import React from 'react';
import { Link } from 'react-router-dom';
const EntrpriseSubMenu = () => {

    return (
        <ul className='sous-menu'>
            <li><Link to="/ComingSoon" ><div>entretiens professionnels</div></Link></li>
            <li><Link to="/gestion_RH_externalisee" ><div>gestion RH externalisée</div></Link></li>
        </ul>
    );
};

export default EntrpriseSubMenu;