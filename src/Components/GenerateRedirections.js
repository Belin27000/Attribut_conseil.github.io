import React, { useEffect } from 'react';
import redirectionsData from '@/Assets/data/redirectionsData.json';

const GenerateRedirections = () => {
    useEffect(() => {
        // Générer les redirections à partir des données JSON
        redirectionsData.organic_results.forEach(result => {
            const { position, link } = result;
            // Effectuer les actions nécessaires pour créer la redirection
            console.log(`Rediriger la position ${position} vers ${link}`);
            // Vous pouvez également utiliser des méthodes de routage ici si vous utilisez un framework comme React Router
        });
    }, []);

    return <div>Redirections générées à partir du fichier JSON</div>;
};

export default GenerateRedirections;