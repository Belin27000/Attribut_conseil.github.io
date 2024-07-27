import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import podCastData from '@/_Services/podcasts.service.js'
import { useState } from 'react';

import logo_Attribut from '@/Assets/Images/logo_Attribut.png'

import './podcast1.scss'
import Podcasts from '../Podcasts.js';

const Podcast1 = () => {
    const { id } = useParams();
    const [podcast, setPodcast] = useState(null)


    // const podcast = data.find((article) => article.link === id)

    useEffect(() => {
        const foundPocast = podCastData.find((article) => article.link === id)
        setPodcast(foundPocast)
    }, [id])

    if (!podcast) {
        return <div className='PodcastNotFind'>Podcast non trouvé</div>
    }

    return (
        <div className='PodcastPage'>
            <div className='PodcastCont'>
                <div className='Podcast1'>
                    <h1>{podcast.title}</h1>
                    <div className='Podcast-movie'>
                        <iframe
                            width="560"
                            height="315"
                            src={podcast.yt}
                            title={podcast.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* <p>{podcast.date}</p> */}
                    {podcast.text.split('\n').map((line, index) => (
                        <p className='Podcast-text' key={index}>{line}</p>
                    ))}
                    <Link to='/bilan-de-competence'>👉 Bilan de compétences</Link>
                    <img className='logo-picture' src={logo_Attribut} alt="logo d'attribut conseils un arbre jaune avec des flèche au bout de chaque branche" />
                </div>
                <div className="FreeMeeting">
                    <p>😎</p>
                    <p className='FreeMeeting-bold'>Je souhaite me reconvertir et j'ai besoin d'aide</p>
                    <p>bénéficiez d'un rendez-vous offert avec notre coach et formatrice spécialisée en reconversion.</p>
                    <Link className='FreeMeeting-btn' to='/contact'>1er rendez-vous offert 👋</Link>
                </div>
            </div>
            <div className='seeAllPodcast'>
                <Podcasts title='Nos autres podcasts' />
                <Link to='/blog/podcasts' >Voir tous les podcasts</Link>
            </div>
        </div>
    );
};

export default Podcast1;