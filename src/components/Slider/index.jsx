import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';

import Slide from './Slide';
import Arrow from './Arrow';

import './Slider.scss';


const SliderComponent = ({
    slides
}) => {
    return (
        <div className='slider'>
            <Slider
                hasArrows
                ArrowComponent={Arrow}>
                {slides.map((slide, index) => console.log(slide) || <Slide key={index} slide={slide}/>)}
            </Slider>
        </div>
    );
};

export default SliderComponent;