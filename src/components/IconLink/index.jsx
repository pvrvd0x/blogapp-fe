import React from 'react';
import classname from 'classnames';

import './IconLink.scss';

const IconLink = ({
    link,
    icon,
    classes
}) => {
    const requiredIcon = require(`../../assets/icons/${icon}.svg`);

    return (
        <a href={link} className={classname('icon-link', classes)}>
            <img src={requiredIcon} alt={`${icon} icon`}/>
        </a>
)};

export default IconLink;