import React from 'react';
import classname from 'classnames';

import './Arrow.scss';
import LeftArrow from 'assets/icons/back.svg';
import RightArrow from 'assets/icons/next.svg';

const Arrow = ({
    classNames,
    onClick,
    direction
}) => {
    return (
        <span className={classname('arrow', classNames)} onClick={onClick}>
            <img src={direction === 'left' ? LeftArrow : RightArrow} alt="Arrow"/>
        </span>
    );
};

export default Arrow;