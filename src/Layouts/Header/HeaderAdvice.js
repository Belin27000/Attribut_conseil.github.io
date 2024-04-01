import React from 'react';
import './headerAdvice.scss';
const HeaderAdvice = () => {
    const currentDate = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('fr-FR', options);

    return (
        <div className='HeaderAdvice'>
            <p>home news</p>
            <p>attribut conseils</p>
            <p>{formattedDate}</p>
        </div>
    );
};

export default HeaderAdvice;
