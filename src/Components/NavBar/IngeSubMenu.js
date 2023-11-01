import React from 'react';
import { Link } from 'react-router-dom';


const IngeSubMenu = () => {



    return (
        <ul className='sous-menu'>
            <li><Link to="/ComingSoon" ><div>Gestion externalisée de la formation</div></Link></li>
            <li><Link to="/ComingSoon" ><div>Qualiopi</div></Link></li>
        </ul>
    );
};

export default IngeSubMenu;