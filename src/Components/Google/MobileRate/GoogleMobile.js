import './googleMobile.scss';
import LogoGoogle from '@/Assets/Images/google.png';
import placeDetails from '@/_Services/FetchGoogleMaps.service.js';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const GoogleMobile = () => {
    const info = placeDetails();
    const rating = parseFloat(info?.result?.rating);
    const globalRate = info?.result?.user_ratings_total;

    // Ensure that rating is a number and not NaN
    const validRating = !isNaN(rating) ? rating : 0;

    // Create an array for the full stars
    const fullStars = Array(Math.floor(validRating)).fill(<FaStar />);

    // Add a half star if the rating has a decimal part
    const halfStar = (validRating % 1) >= 0.5 ? <FaStarHalfAlt /> : null;

    // Fill the rest with empty stars up to 5
    const emptyStars = Array(5 - Math.ceil(validRating)).fill(<FaRegStar />);

    // Combine the full stars, half star, and empty stars
    const starElements = [...fullStars, halfStar, ...emptyStars].filter(Boolean); // Filter out null values

    return (
        <>
            <div className='googleMobile'>
                <Link to="https://www.google.com/search?sca_esv=25d4fcab23a30d49&hl=fr&sxsrf=ACQVn09s5zQBRRVux2TYdH0b7Jy-DyJSEw:1710004785729&q=attribut+conseils&uds=AMwkrPt7Nxk8oyZykvWfiv_huehnRG5TuiG1ptmXIckNSi5ywmnkaV00tPbcDqbq18qfLHLyF24z6z3yxKZ2g9B3dq0vARqCt9Fdm_Cl2CKhXSCrLe2XHDm3d0Ox8uv-dZUIgm1jdtqT&si=AKbGX_pYNwgZ8bR4wYGfeDhNB2SEWOEwflc0Iy_SV8YABn1ydDJTUlw08bNKILGoglncv1i8trg3TwHklE8Onze36MklZZknVhuGGsM2a3MDXxZEB8qzPeQ%3D&sa=X&ved=2ahUKEwis9cSe2OeEAxXTQ6QEHaZ8BpUQ3PALegQIEhAE&biw=1440&bih=760&dpr=2" className='GoogleRate_Button'>

                    <div className="rateStars">
                        <img className='Logo_google' src={LogoGoogle} alt='Logo Google' />
                        <span className="ratingNumber">{validRating.toFixed(1)}
                            {starElements}
                        </span>
                    </div>
                    <div className="globalRate">Basé sur {globalRate} avis</div>
                </Link>

            </div>
        </>
    );
};

export default GoogleMobile;
