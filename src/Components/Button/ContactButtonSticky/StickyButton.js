import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEnvelope } from "react-icons/fa";

import './stickyButton.scss'

const StickyButton = ({ text }) => {
    let navigate = useNavigate();
    const RouteChange = () => {
        navigate('/contact')
    }
    return (
        <button translate="no" className='StickyButton' onClick={RouteChange}>

            <FaRegEnvelope />
            <div className='textButton'>
                {

                    text ? text : "Je contacte Attribut conseils"
                }
            </div>
        </button>
    );
};

export default StickyButton;