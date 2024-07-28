import React, { useEffect } from 'react';
import './podcasts.scss'

import podCastData from '@/_Services/podcasts.service.js'
import { useNavigate } from 'react-router-dom';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';


const Podcasts = ({ titleBloc = 'Le podcast Attribut Conseils', titlePage = 'Attribut Conseils - La libre antenne: Podcasts', metades = 'Les podcasts d\'Attribut Conseils: Toutes les informations utiles en vidéos', meta = true }) => {

    const navigate = useNavigate();

    const handlePodcastClick = (link) => {
        navigate(`/blog/podcasts/${link}`)
    }
    const metaTitle = titlePage
    const metaDescription = metades

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='Podcasts'>
            {meta && (
                <MetaTitleDes title={metaTitle} description={metaDescription} />
            )}
            <h1 className='Podcasts_title'>{titleBloc}</h1>
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