import React from 'react';
import { useNavigate } from 'react-router-dom';
import './contactButton.scss'

const ContactButton = ({ text }) => {
    let navigate = useNavigate();
    const RouteChange = () => {
        navigate('/comingSoon')
    }

    return (
        <button className='ContactButton' onClick={RouteChange}>
            {text}
        </button>
    );
};

export default ContactButton;