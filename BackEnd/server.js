// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// require('dotenv').config();
// // const { google } = require('googleapis');

// const app = express();
// const PORT = process.env.PORT || 3001;
// const corsOptions = {
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     allowedHeaders: 'X-Requested-With,content-type',
//     credentials: true,
//     // origin: 'https://www.2023.attribut-conseils.com'
// };

// app.use(cors(corsOptions));
// app.get('/api/place/details', async (req, res) => {

//     const PLACE_ID = process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID;
//     const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
//     const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&key=${API_KEY}&language=fr`

//     // const ACCOUNT_ID = process.env.REACT_APP_GOOGLE_ACCOUNT_ID;
//     // const LOCATION_ID = process.env.REACT_APP_GOOGLE_LOCATION_ID;
//     // const reviewUrl = `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}/reviews`
//     try {
//         const response = await axios.get(url);
//         res.json(response.data);
//         // console.log(response.data);


//     } catch (error) {
//         res.status(500).json({ error: error.message })
//         console.error(error);
//     }
// })
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

