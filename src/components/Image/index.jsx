import React from 'react';
import classname from 'classnames';

import './Image.scss';


const Image = ({
    image,
    styles,
    classes
}) => {
    return (
        <div className={classname('image', classes)} style={styles}>
            <img className={classname('image__img', classes)} src={image} alt='Article'/>
        </div>
    );
};

export default Image;