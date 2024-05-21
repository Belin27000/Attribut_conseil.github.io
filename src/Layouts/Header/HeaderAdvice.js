import React from 'react';
import './headerAdvice.scss';
import { Link } from 'react-router-dom';
const HeaderAdvice = () => {
    const currentDate = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('fr-FR', options);

    return (
        <div className='HeaderAdvice'>
            <Link to={"/blog"}>
                <p>home news</p>
                <p>attribut conseils</p>
                <p>{formattedDate}</p>
            </Link>
        </div>
    );
};

export default HeaderAdvice;
