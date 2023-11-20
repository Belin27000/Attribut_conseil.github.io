// import carouselService from '@/_Services/carousel.service.js';
import '@/Components/Gallery/carousel.scss';
import React, { useEffect, useState } from 'react';
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa"




const Carrousel = ({ images, key }) => {
    const imgNbr = parseInt(images.length)
    const [slide, setSlide] = useState(0)
    const [imageLoad, setImageLoad] = useState(images[slide].image)
    const [imageLeft, setImageLeft] = useState(images[imgNbr - 1].image)
    const [imageRight, setImageRight] = useState(images[slide + 1].image)
    const [title, setTitle] = useState(images[slide].title)

    useEffect(() => {
        picturesIndex(images, slide)
    }, [slide])

    const picturesIndex = (slide) => {
        // console.log(slide);
        // console.log(images);
        if (images[slide]) {
            console.log(images[slide]);
            switch (slide) {
                case 0:
                    setImageLeft(images[imgNbr].image)
                    setImageLoad(images[slide].image)
                    setImageRight(images[slide + 1].image)
                    break;
                case imgNbr - 1:
                    setImageLeft(images[imgNbr - 1].image)
                    setImageLoad(images[slide].image)
                    setImageRight(images[0].image)
                    break;
                default:
                    break;
            }
        }

    }
    // console.log('image de gauche =>', imageLeft);
    // console.log('image du centre =>', imageLoad);
    // console.log('image de droite =>', imageRight);

    return (
        <div className='Carrousel'>

            {
                images?.map((image, key) => {
                    return (
                        <div className='PictureContainer'>
                            <div className="PictureContainer-side">
                                <img src={imageLeft} alt={'Présentation slide ' + key} key={key} className={slide === key ? 'slide' : 'slide-hidden'} />
                            </div>
                            <div className="PictureContainer-center">
                                <img src={imageLoad} alt={'Présentation slide ' + key} key={key} className={slide === key ? 'slide' : 'slide-hidden'} />
                            </div>
                            <div className="PictureContainer-side">
                                <img src={imageRight} alt={'Présentation slide ' + key} key={key} className={slide === key ? 'slide' : 'slide-hidden'} />
                            </div>
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
                                    picturesIndex(key)
                                    // setImageRight(images[key - 1].image)
                                    // setImageLoad(images[key].image)
                                    // setImageLeft(images[key + 1].image)
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