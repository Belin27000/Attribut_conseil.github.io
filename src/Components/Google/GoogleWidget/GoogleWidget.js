import React from 'react';
import './googleWidget.scss';
const GoogleWidget = () => {
    // https://0c990aeb098d4046b4b4dda49e9146dc.elf.site

    const googleWidget = 'https://0c990aeb098d4046b4b4dda49e9146dc.elf.site';
    console.log(googleWidget);
    return (
        <div className='Review'>
            <iframe
                src="https://0c990aeb098d4046b4b4dda49e9146dc.elf.site"
                // width="100%"
                // height="100%"
                title="Google Widget" />
            <div className='widget-hide'></div>
        </div>
    );
};

export default GoogleWidget;