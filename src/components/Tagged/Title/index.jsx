import React from 'react';

import './Title.scss';


const Title = ({
    tag
}) => (
    <div className='tagged-title'>
        <h1 className='tagged-title__heading'>
            {tag}
        </h1>
        <span className='tagged-title__subheading'>
            All you need to know in {tag}
        </span>
        <a href='/' className='tagged-title__link'>
            More in {tag}
        </a>
    </div>
);

export default Title;