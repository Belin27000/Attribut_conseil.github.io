import React from 'react';
import './podcasts.scss'

import podCastData from '@/_Services/podcasts.service.js'
import { useNavigate } from 'react-router-dom';


const Podcasts = ({ title = 'Le podcast Attribut Conseils' }) => {

    const navigate = useNavigate();

    const handlePodcastClick = (link) => {
        navigate(`/blog/podcasts/${link}`)
    }

    return (
        <div className='Podcasts'>
            <h1 className='Podcasts_title'>{title}</h1>
            <div className="Podcasts_content">
                {podCastData.map((article, index) => (
                    <div className="container" key={index} onClick={() => handlePodcastClick(article.link)}>
                        <h2 className='Podcasts_title'>{article.title}</h2>
                        <p className='Podcasts_date'>{article.date}</p>
                        <p className='Podcasts_text'>{article.text}</p>
                        <p className='Podcasts_link' >voir le podcast en vidéo...</p>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Podcasts;