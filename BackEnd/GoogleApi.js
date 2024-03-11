// const { google } = require('googleapis');
// require('dotenv').config();

// const YOUR_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
// const YOUR_CLIENT_SECRET = process.env.REACT_APP_GOOGLE_CLIENT_SECRET
// const YOUR_REDIRECT_URL = process.env.REACT_APP_GOOGLE_REDIRECT_URI
// // Configurez votre client OAuth2 avec les identifiants appropriés
// const oauth2Client = new google.auth.OAuth2(
//     YOUR_CLIENT_ID,
//     YOUR_CLIENT_SECRET,
//     YOUR_REDIRECT_URL
// );

// // Définissez votre jeton d'accès obtenu via OAuth2
// oauth2Client.setCredentials({
//     access_token: YOUR_ACCESS_TOKEN,
//     // Si vous avez un jeton de rafraîchissement, vous pouvez l'ajouter ici
//     // refresh_token: 'YOUR_REFRESH_TOKEN'
// });

// // Obtenez une instance authentifiée de Google My Business
// const mybusiness = google.mybusiness({
//     version: 'v4',
//     auth: oauth2Client
// });

// // Remplacez 'ACCOUNT_ID' et 'LOCATION_ID' par vos identifiants réels
// const accountId = process.env.REACT_APP_GOOGLE_ACCOUNT_ID;
// const locationId = process.env.REACT_APP_GOOGLE_LOCATION_ID;

// // Construisez l'identifiant de l'établissement
// const parent = `accounts/${accountId}/locations/${locationId}`;

// // Définissez les paramètres de la requête
// const params = {
//     parent: parent,
//     pageSize: 10, // Nombre d'avis à récupérer par page (max 50)
//     orderBy: 'updateTime desc' // Tri par date de mise à jour, par ordre décroissant
// };

// // Faites la requête pour obtenir les avis
// mybusiness.accounts.locations.reviews.list(params, (err, res) => {
//     if (err) {
//         console.error('La requête a échoué:', err);
//         return;
//     }
//     console.log('Avis récupérés:', res.data);
// });
