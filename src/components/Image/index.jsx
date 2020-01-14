import React from 'react';
import classname from 'classnames';

import './Image.scss';


const Image = ({
    image,
    styles,
    classes
}) => {
    const imageClasses = [classes].map(classname => `${classname}__img`);

    return (
        <div className={classname('image', classes)} style={styles}>
            <img className={classname('image__img', imageClasses)} src={image} alt='Article'/>
        </div>
    );
};

export default Image;