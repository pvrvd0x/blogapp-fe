import React from 'react';

import './LikeButton.scss';
import Like from 'assets/icons/heart.svg'


const LikeButton = ({
    handleClick,
    numOfLikes
}) => {
    return (
        <button className='like' onClick={handleClick}>
            <img src={Like} className='like__icon' alt='like'/>
            <span className='like-counter'>
                {numOfLikes}
            </span>
        </button>
    );
};

export default LikeButton;