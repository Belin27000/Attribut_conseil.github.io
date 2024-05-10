import React from 'react';
import Movie from '@/Components/Movie/Movie.js';
import GrassGrow from '@/Assets/video/GrassGrow.mp4'
import { Link } from 'react-router-dom';
import CircleWithDot from '@/Assets/Images/CircleDot.png'

import './circleDotV2.scss'

const CircleDotV2 = ({ text, littleDot }) => {

    const textDisplay = text ? text : ""
    return (
        <>
            <Link to="/contact" className='circleDotCont'>
                <div className="allTextV2">
                    <div className="mainTextV2">
                        {text ? <p>{textDisplay}</p> : ""}
                        <p>Je contacte<br /><b>ATTRIBUT<br />CONSEILS</b> </p>
                    </div>
                    <div className="circleDotV2">
                        <img src={CircleWithDot} alt="cercle de petit point" />
                    </div>
                    {littleDot ? <div className="yellowCircleV2"></div> : ""}
                </div>
                <div className="videoContainerV2">
                    <Movie src={GrassGrow} />
                </div>
            </Link>
        </>
    );
};

export default CircleDotV2;