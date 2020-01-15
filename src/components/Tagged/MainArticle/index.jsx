import React from 'react';

import { Image, LikeButton, IconLink } from 'components';

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
            <a href={`/article/${article.title}`} className='tagged-article__title'>
                {article.title}
            </a>
            <div className='tagged-article__details'>
                <img src={article.author.avatar}
                     alt={article.author.avatar}
                     className='tagged-article__author-avatar'/>
                <a href={`/author/${article.author.name}`}
                   className='tagged-article__author'>
                    {article.author.name}
                </a>
                <span className='tagged-article__date'>
                    {article.pubdate}
                </span>
                <span className='tagged-article__tag'>
                    {article.tags[0]}
                </span>
            </div>
            <p className='tagged-article__content'>
                {article.text}
            </p>
            <div className='tagged-article__socials'>
                {article.socials.map(
                    (social, key) =>
                        <IconLink key={key} icon={social.name} link={social.link}/>)}
            </div>
        </div>
)};

export default MainArticle;