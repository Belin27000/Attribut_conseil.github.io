// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';

// const Review = () => {
//     const [placeDetails, setPlaceDetails] = useState(null)
//     const PLACE_ID = process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID
//     const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

//     // const route = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&key=${API_KEY}`
//     // console.log(route);
//     useEffect(() => {
//         const fetchPlaceDetails = async () => {
//             try {
//                 const response = await Axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&key=${API_KEY}`)
//                 console.log(response.body);
//                 setPlaceDetails(response.body)
//             } catch (error) {
//                 console.error(error)
//             }

//         }
//         fetchPlaceDetails()
//     }, [PLACE_ID, API_KEY])

//     console.log(placeDetails);
//     return (
//         <div>
//             <p>Placeid: {PLACE_ID}</p>
//             <p>API_KEY: {process.env.REACT_APP_GOOGLE_API_KEY}</p>
//             <p>{placeDetails}</p>
//         </div>
//     );
// };

// export default Review;
// import { useEffect, useState } from 'react';
// import Axios from 'axios';

// const Review = () => {
//     const [placeDetails, setPlaceDetails] = useState(null);
//     const url = process.env.REACT_APP_API_URL

//     useEffect(() => {
//         const fetchPlaceDetails = async () => {
//             try {
//                 const response = await Axios.get(`${url}/place/details`);
//                 setPlaceDetails(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchPlaceDetails();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     return placeDetails;
// };

// export default Review;