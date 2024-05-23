import './socialNetwork.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// import insta from '../../Assets/Images/insta/v982-d3-04.jpg'

const SocialNetwork = () => {
    const insta = 'https://www.instagram.com/attribut_conseils/'
    const Fb = 'https://www.facebook.com/AttributConseils/'
    const Twitter = 'https://twitter.com/AttributConseil'
    const Linkedin = 'https://www.linkedin.com/company/attribut-conseils/?viewAsMember=true'
    return (
        <div className='Sn'>
            <h2 className="Sn-header">Nos réseaux sociaux</h2>
            <div className="Sn-imgContainer">
                <Link to={insta} target="_blank">
                    <div className='insta'>
                        <FaInstagram />
                    </div>
                </Link>
                <Link to={Fb} target="_blank">
                    <div className='facebook'>
                        <FaFacebookSquare />
                    </div>
                </Link>
                <Link to={Twitter} target="_blank">
                    <div className='twitter'>
                        <FaXTwitter />
                    </div>
                </Link>
                <Link to={Linkedin} target="_blank">
                    <div className='linkedin'>
                        <FaLinkedin />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SocialNetwork;