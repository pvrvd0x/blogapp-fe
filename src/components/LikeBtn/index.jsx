import React from 'react';
import classname from 'classnames';

import './LikeButton.scss';
import Like from 'assets/icons/heart.svg'


const LikeButton = ({
    handleClick,
    numOfLikes,
    classes
}) => {
    return (
        <button className={classname('like', classes)} onClick={handleClick}>
            <img src={Like} className='like__icon' alt='like'/>
            <span className='like-counter'>
                {numOfLikes}
            </span>
        </button>
    );
};

export default LikeButton;