import React from 'react';

import {
    Image,
    LikeButton,
    IconLink
} from '..';

import './Article.scss';


const Article = ({
    article
}) => {
    return (
        <div className='article'>
            <div className='article-preview'>
                <Image image={article.previewImage}/>
                <LikeButton numOfLikes={12}/>
            </div>
            <div className='article-description'>
                <div className='article__tags'>
                    {article.tags.map((tag, index) => <a key={index} href={window.location.href + `/tag/${tag}`} className='article__tag'>{tag}</a>)}
                </div>
                <a href={article.link} className='article__title'>
                    {article.title}
                </a>
                <p className='article__text article__text--cropped'>
                    {article.text}
                </p>
                <div className='article__info'>
                    <span className='article__author'>{article.author}</span>
                    <div className='dash'/>
                    <span className='article__pubdate'>{article.pubdate}</span>
                </div>
                <div className='article__socials'>
                    {article.socials.map(
                        (social, index) =>
                            <IconLink key={index} icon={social.name} link={social.link}/>)}
                </div>
            </div>
        </div>
    );
};

export default Article;