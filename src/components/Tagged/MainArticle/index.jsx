import React from 'react';

import { Image, LikeButton } from 'components';

import './MainArticle.scss';


const MainArticle = ({
    article
}) => {
    const [isLiked, setIsLiked] = React.useState(false);

    const handleLike = () => setIsLiked(!isLiked);

    return (
        <div className='tagged-article'>
            <Image classes='tagged-article-image' image={article.previewImage}/>
            <LikeButton numOfLikes={34} classes={`tagged-article__like ${isLiked ? 'like--liked' : ''}`} handleClick={handleLike}/>
        </div>
)};

export default MainArticle;