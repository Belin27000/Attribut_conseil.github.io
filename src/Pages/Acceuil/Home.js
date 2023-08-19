import React from 'react';
import Carrousel from '@/Components/Gallery/Carousel.js';
import carouselService from '@/_Services/carousel.service.js';

import '@/Pages/Acceuil/home.css';



const Home = () => {
    const pictures = carouselService.allPictures();
    // console.log(pictures.pictures);
    return (
        <div className='Home'>
            <section className='topSideHome'>
                <div className='PunchLine'>"Le travail nous travaille, ensemble faisons en sorte qu'il nous travaille bien"</div>
                <div className='DiffBloc'>
                    <p>Notre<span className='DiffBlocColor'>différence :</span>
                        <p>Notre expérience de la diversité des problématiques professionnelles et la capacité à travailler ensemble vers des solutions</p>
                    </p>
                </div>
                <Carrousel images={pictures} />
            </section>
            <p className='BlueBand'><span className='CapName'>attri</span><span className='EndName'>but</span><span className='CapName '>conseils </span> <span className='BlueBandLastWord'> c'est :</span></p>

        </div>
    );
};

export default Home;