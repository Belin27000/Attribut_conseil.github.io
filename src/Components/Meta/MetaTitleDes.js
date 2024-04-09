import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTitleDes = ({ title = 'Attribut Conseils - Cabinet conseil en ressources humaines', description = 'Vous cherchez à réaliser un bilan de compétences en Seine et Marne ? Contactez-nous !' }) => {


    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            {/* Balise Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* Balise openGraph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
        </Helmet>
    );
};

export default MetaTitleDes;

