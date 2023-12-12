// import carouselService from '@/_Services/carousel.service.js';
import '@/Components/Gallery/carousel.scss';
// import React, { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import React, { useCallback, useEffect, useRef, useState } from 'react';
// import HeroSlider, { Slide } from 'hero-slider/dist/HeroSlider';



const Carrousel = ({ images, key }) => {
    const imgNbr = parseInt(images.length)
    const timerRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [slide, setSlide] = useState(images[currentIndex].image)
    const [title, setTitle] = useState(images[currentIndex].title)


    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? imgNbr - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        setSlide(images[newIndex].image)
        setTitle(images[newIndex].title)
    }
    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === imgNbr - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        setSlide(images[newIndex].image)
        setTitle(images[newIndex].title)
    }, [currentIndex, images, imgNbr]);
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
        setSlide(images[slideIndex].image)
        setTitle(images[slideIndex].title)
    };
    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            goToNext()
        }, 2000)
        return () => clearTimeout(timerRef.current)
    }, [goToNext])

    return (
        <div className='Carrousel'>
            <div className="Carrousel-container">
                <p>{title}</p>
                <div className='image-container'>
                    <div className='arrow' onClick={goToPrevious}>
                        <FaAngleLeft />
                    </div>
                    <div className='image'>
                        <img src={slide} alt="" />
                    </div>
                    <div className='arrow' onClick={goToNext}>
                        <FaAngleRight />
                    </div>
                </div>
                <div className='dots-container'>
                    {images.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>•</div>
                    ))}
                </div>
            </div>
        </div>
    )
    // const timerRef = useRef(null)
    // const imgNbr = parseInt(images.length)
    // const [slide, setSlide] = useState(0)
    // const [imageLoad, setImageLoad] = useState(images[slide].image)
    // const [imageLeft, setImageLeft] = useState(images[imgNbr - 1].image)
    // const [imageRight, setImageRight] = useState(images[slide + 1].image)
    // const [title, setTitle] = useState(images[slide].title)
    // console.log(images);
    // // useEffect(() => {
    // //     picturesIndex(images, slide)
    // //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // // }, [slide])


    // const picturesIndex = (slide) => {
    //     // console.log(slide);
    //     // console.log(images);
    //     if (images[slide]) {
    //         console.log(images[slide]);
    //         switch (slide) {
    //             case 0:
    //                 setImageLeft(images[imgNbr].image)
    //                 setImageLoad(images[slide].image)
    //                 setImageRight(images[slide + 1].image)
    //                 break;
    //             case imgNbr - 1:
    //                 setImageLeft(images[imgNbr - 1].image)
    //                 setImageLoad(images[slide].image)
    //                 setImageRight(images[0].image)
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }

    // }
    // // console.log('image de gauche =>', imageLeft);
    // // console.log('image du centre =>', imageLoad);
    // // console.log('image de droite =>', imageRight);

    // return (
    //     <div className='Carrousel'>

    //         {
    //             images?.map((image, key) => {
    //                 return (
    //                     <div className='PictureContainer' key={key}>
    //                         <div className="PictureContainer-side">
    //                             <img src={imageLeft} alt={'Présentation slide ' + key} key={key} className={slide === key ? 'slide' : 'slide-hidden'} />
    //                         </div>
    //                         <div className="PictureContainer-center">
    //                             <img src={imageLoad} alt={'Présentation slide ' + key} key={key} className={slide === key ? 'slide' : 'slide-hidden'} />
    //                         </div>
    //                         <div className="PictureContainer-side">
    //                             <img src={imageRight} alt={'Présentation slide ' + key} key={key} className={slide === key ? 'slide' : 'slide-hidden'} />
    //                         </div>
    //                     </div>
    //                 )
    //             })
    //         }
    //         <span className='indicators'>
    //             {
    //                 images?.map((_, key) => {
    //                     return (
    //                         <button
    //                             key={key}
    //                             onClick={() => {
    //                                 setSlide(key)
    //                                 picturesIndex(key)
    //                                 // setImageRight(images[key - 1].image)
    //                                 // setImageLoad(images[key].image)
    //                                 // setImageLeft(images[key + 1].image)
    //                                 setTitle(images[key].title)
    //                             }
    //                             }

    //                             className={slide === key ? 'indicator' : 'indicator indicator-inactive'}>
    //                         </button>
    //                     )
    //                 }
    //                 )}
    //         </span>
    //         <div className='CarouselTitle'>{title}</div>
    //     </div>
    // );
};

export default Carrousel;