import React from 'react';
import carouselService from '@/_Services/carousel.service.js';
import PresAC from '@/Assets/video/Pres_AC.mp4'
import '@/Pages/Acceuil/home.scss';
import KeyNumber from '../../Components/KeyNumbers/KeyNumber.js';
import Movie from '../../Components/Movie/Movie.js';
import GoogleWidget from '../../Components/Google/GoogleWidget/GoogleWidget.js';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';



const Home = () => {
    const pictures = carouselService.allPictures();
    console.log(pictures.pictures);
    return (
        <div className='Home'>
            <MetaTitleDes />
            <h1 className='sr-only'>Bilan de compétences en Seine et Marne</h1>
            <section className='topSideHome'>
                <div translate="no" className='PunchLine'>"Le travail nous travaille, ensemble faisons en sorte qu'il nous travaille bien"</div>
                <div className='DiffBloc'>
                    <p>Notre<span className='DiffBlocColor'>différence :</span></p>
                    <p>Notre expérience de la diversité des problématiques professionnelles et la capacité à travailler ensemble vers des solutions</p>
                </div>
                {/* <div className='movie' >
                    <video className='responsive-video' autoPlay muted loop playsInline>
                        <source src={PresAC} type='video/mp4' />
                    </video>
                </div> */}
                <Movie src={PresAC} loop={true} />
            </section>
            <p className='BlueBand'><span className='CapName'>attri</span><span className='EndName' translate="no">but</span><span className='CapName '>conseils </span> <span className='BlueBandLastWord'> c'est :</span></p>
            <KeyNumber />
            <GoogleWidget />
        </div>
    );
};

export default Home;