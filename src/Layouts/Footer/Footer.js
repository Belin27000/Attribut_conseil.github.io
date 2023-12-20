import React from 'react';
import Bandeau from '@/Assets/Images/Bandeau.webp'
import Qualiopi200 from '@/Assets/Images/Logo_Qualiopi/Logo_Qualiopi_200.webp'
import Qualiopi634 from '@/Assets/Images/Logo_Qualiopi/Logo_Qualiopi_634.webp'
import Cpf200 from '@/Assets/Images/logo_CPF/logo_CPF_200.webp'
import Cpf1400 from '@/Assets/Images/logo_CPF/logo_CPF_1400.webp'
import Charte200 from '@/Assets/Images/chartedeontologieCPF/charte200.webp'
import Charte800 from '@/Assets/Images/chartedeontologieCPF/charte800.webp'
import '@/Layouts/Footer/footer.scss'
import data from '../../Assets/data/data.json'
// import { Link } from 'react-router-dom';
import DownloadFile from '../../Components/FileLink/DownloadFile.js';
import allFiles from '../../_Services/fileToDownload.service.js';
import Handi from '../../Assets/Images/Handicapped.png'
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    const QualiopiValidity = data.Qualiopi.validationDate

    return (
        <footer className='Footer'>
            <div className='FooterLogoContainer'>
                <div className='QualContainer'>
                    {/* <img className='QualContainer-Pic' width='634' height='339' src={Qualiopi} alt='Logo Qualiopi' /> */}
                    <img className='QualContainer-Pic'
                        sizes="(max-width: 634px) 100vw, 634px"
                        srcSet={`
                        ${Qualiopi200} 200w,
                        ${Qualiopi634} 634w
                        `}
                        width='634'
                        height='339'
                        src={Qualiopi634}
                        alt="Logo Qualiopi" />
                    <p className='QualContainer-Data'>Validé jusqu'au {QualiopiValidity}.</p>
                </div>
                <div className='CpfContainer'>
                    {/* <img className='CpfContainer-Pic' width='2647' height='1559' src={Cpf} alt='Logo Mon compte formation' /> */}
                    <img className='CpfContainer-Pic'
                        sizes="(max-width: 1400px) 100vw, 1400px"
                        srcSet={`
                        ${Cpf200} 200w,
                        ${Cpf1400} 1400w
                        `}
                        width='2647'
                        height='1559'
                        src={Cpf1400}
                        alt="Logo Mon compte formation" />
                </div>
                <div className='CharteContainer'>
                    {/* <img className='CharteContainer-Pic' width='800' height='676' src={Charte} alt='Logo Mon compte formation' /> */}
                    <img className='CharteContainer-Pic'
                        sizes="(max-width: 800px) 100vw, 800px"
                        srcSet={`
                        ${Charte200} 200w,
                        ${Charte800} 800w
                        `}
                        width='800'
                        height='676'
                        src={Charte800}
                        alt="Logo Charte CPF" />
                </div>
            </div>
            <div className='Map'>
                <h2>
                    Ou nous trouver
                </h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10594.503031689123!2d2.6953754!3d48.4061297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5de5466d64191%3A0xcd129d3981711195!2sAttribut%20Conseils!5e0!3m2!1sfr!2sfr!4v1703104076596!5m2!1sfr!2sfr" width="450" height="330" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* <div className="Handi">
                <img src={Handi} alt='Handicapped logo' width='220' height='220' />
            </div> */}
            <div className='FooterPictureFont'>
                <img width='2480'
                    height='797' src={Bandeau} alt="Header font" />
                {/* <p className='FooterPunchLine'>Spécialiste de la gestion de carrière et de la relation Homme/Travail</p> */}
                <div className="FooterPictureFont-mention">
                    <div className="Handi">
                        <img className='handicap-picture' src={Handi} alt='Handicap log' width='220' height='220' />
                        <DownloadFile image={Handi} className='FooterFiles' file={allFiles.HandiFiles()} />
                    </div>
                    <DownloadFile className='FooterFiles' file={allFiles.CGUFiles()} />
                    <div className='builderRef'>
                        <p>Made with <FaHeart /> By <a href="https://conseilsandtechs.com/" rel="noreferrer" target="_blank">Yann LECERF from Conseils & Tech</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;