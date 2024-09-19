import React from 'react';
import fullDate from '../../Hook/fullDate.js';
import '../Dday/dday.scss';

const Dday = () => {
    const Dday = fullDate()

    return (
        <div className='Dday'>
            <p>Dernière mise à jour le : {Dday}</p>
        </div>
    );
};

export default Dday;