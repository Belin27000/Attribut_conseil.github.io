import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTitleDes = ({ title = 'Attribut Conseils - Cabinet conseil en ressources humaines', description = 'Vous cherchez à réaliser un bilan de compétences en Seine et Marne ? Contactez-nous !' }) => {


    return (
        <Helmet>
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://elfsight.com" />
            <meta name='description' content={description} />
            {/* Balise Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* Balise openGraph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        </Helmet>
    );
};

export default MetaTitleDes;

