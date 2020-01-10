import React from 'react';

import './Slide.scss';

const Slide = ({
    slide
}) => {
    return (
        <div className='slide' style={{
            backgroundImage: `url(${slide.image})`
        }}>
            <div className="slide__dimmer"/>
            <div className="slide__content">
                <h1 className="slide__title">{slide.title}</h1>
                <div className="slide__content-info">
                    <div className="slide__pub-date">{slide.date}</div>
                    <div className="slide__author">{slide.author}</div>
                </div>
            </div>
        </div>
    );
};

export default Slide;