import React from 'react';
import './transitionX.scss';
const TransitionX = ({ children, translateX, transitionDuration, transitionDelay }) => {

    const style = {
        transform: `translateX(${translateX}px)`,
        transition: `transform ${transitionDuration}s  ease-in-out ${transitionDelay}s`
    }
    return (
        <div className='"transition-x' style={style}>
            {children}
        </div>
    );
};

export default TransitionX;