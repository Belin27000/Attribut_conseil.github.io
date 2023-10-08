import React from 'react';
import { Link } from 'react-router-dom';
import '@/Pages/ComingSoon/comingSoon.scss'
import soleil from '@/Assets/Images/Logo_soleil.png'


const ComingSoon = () => {
    return (
        <div className='ComingSoon'>
            <Link to="/home">
                <img src={soleil} alt="Sportsee application logo" />
                <h2 className='CsTitle'>COMING SOON</h2>
                <div className='CsMessage'>We are building this page</div>
            </Link>
        </div>
    );
};

export default ComingSoon;