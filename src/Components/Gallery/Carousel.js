// import carouselService from '@/_Services/carousel.service.js';
import '@/Components/Gallery/carousel.scss';
import React, { useState } from 'react';
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa"




const Carrousel = ({ images, key }) => {

    const [slide, setSlide] = useState(0)
    const [imageLoad, setImageLoad] = useState(images[slide].image)
    const [title, setTitle] = useState(images[slide].title)

    return (
        <div className='Carrousel'>

            {
                images?.map((image, key) => {
                    return (
                        <div className='PictureContainer'>
                            <img src={imageLoad} alt={'Présentation slide ' + key} key={key} className={slide === key ? 'slide' : 'slide-hidden'} />
                        </div>
                    )
                })
            }
            <span className='indicators'>
                {
                    images?.map((_, key) => {
                        return (
                            <button
                                key={key}
                                onClick={() => {
                                    setSlide(key)
                                    setImageLoad(images[key].image)
                                    setTitle(images[key].title)
                                }
                                }

                                className={slide === key ? 'indicator' : 'indicator indicator-inactive'}>
                            </button>
                        )
                    }
                    )}
            </span>
            <div className='CarouselTitle'>{title}</div>
        </div>
    );
};

export default Carrousel;