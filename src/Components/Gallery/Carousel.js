import '@/Components/Gallery/carousel.scss';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import React, { useCallback, useEffect, useRef, useState } from 'react';



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
};

export default Carrousel;