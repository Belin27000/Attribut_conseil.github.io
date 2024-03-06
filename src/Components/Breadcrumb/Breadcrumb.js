import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className="breadcrumb">
            <Link to="/">Acceuil</Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                    <span key={name}>
                        <span> / </span>
                        {isLast ? (
                            <span>{name}</span>
                        ) : (
                            <Link to={routeTo}>{name}</Link>
                        )}
                    </span>
                );
            })}
        </div>
    );
};
export default Breadcrumb;