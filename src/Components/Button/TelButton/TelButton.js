import React from 'react';
import './telButton.scss';

const TelButton = ({ number, onClick }) => {
    return (
        <button className='TelButton' onClick={onClick}>
            <a href={`tel:${number}`}>{number}</a>
        </button>
    );
};

export default TelButton;