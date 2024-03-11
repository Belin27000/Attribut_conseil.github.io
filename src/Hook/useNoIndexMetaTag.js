import { useEffect } from 'react';

const useNoIndexMetaTag = () => {
    useEffect(() => {
        const metaTag = document.createElement('meta');
        metaTag.name = 'robots';
        metaTag.content = 'noindex';
        document.head.appendChild(metaTag);

        return () => {
            document.head.removeChild(metaTag);
        };
    }, []);
};

export default useNoIndexMetaTag;