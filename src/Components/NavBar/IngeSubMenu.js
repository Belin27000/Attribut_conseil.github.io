import React from 'react';
import { Link } from 'react-router-dom';


const IngeSubMenu = () => {



    return (
        <ul className='sous-menu'>
            <li><Link to="/ComingSoon" >Gestion externalisée de la formation</Link></li>
            <li><Link to="/ComingSoon" >Qualiopi</Link></li>
        </ul>
    );
};

export default IngeSubMenu;