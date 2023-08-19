// import carouselService from '@/_Services/carousel.service.js';
import '@/Components/Gallery/carousel.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"




const Carrousel = ({ images, key }) => {

    console.log({ images, key });

    // console.log(carouselService.allPictures());
    // const getPictures = async () => {
    //     await carouselService.allPictures()
    //         // console.log(carouselService.allPictures());
    //         .then((data) => {
    //             if (data) {
    //                 console.log(data);
    //                 setPictureList(data);
    //                 setIsLoading(false);
    //             } else {
    //                 navigate("/home");
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }
    // console.log(pictureList);
    // if (isLoading) return (<h3>Chargement...</h3>)

    return (
        <div className='Carrousel'>

            <div className='PictureLocation'>Le Carousel sera ici</div>

            {
                images?.map((image, key) => {
                    return (
                        <img src={image} alt={'Présentation slide ' + key} key={key} className={'slide'} />
                    )
                })
            }


        </div>
    );
};

export default Carrousel;