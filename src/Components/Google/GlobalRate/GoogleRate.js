import React from 'react';
import './googleRate.scss';
import LogoGoogle from '@/Assets/Images/google.png';
// import placeDetails from '@/_Services/FetchGoogleMaps.service.js';

const GoogleRate = () => {

    const googleRate = 'https://116301b0d9f345bfb30cc9636b5b237c.elf.site';

    // console.log('google', res.);
    return (
        <div className='Rate'>
            <div className='Logo-container'>
                <img src={LogoGoogle} alt="" className="Logo" />
            </div>
            <iframe
                src={googleRate}
                width="100%"
                height="100%"
                title="Google Widget" />
        </div>
    );
};

export default GoogleRate;