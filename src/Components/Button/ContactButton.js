import React from 'react';
import { useNavigate } from 'react-router-dom';
import './contactButton.scss'

const ContactButton = () => {
    let navigate = useNavigate();
    const RouteChange = () => {
        navigate('/comingSoon')
    }

    return (
        <button className='ContactButton' onClick={RouteChange}>
            Je contacte Attribut conseil
        </button>
    );
};

export default ContactButton;