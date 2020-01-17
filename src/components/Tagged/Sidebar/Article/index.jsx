import React from 'react';

import { Image } from 'components';

import './Article.scss';

const Article = ({
    article
}) => (
    <div className='tagged-sidebar-article'>
        <Image image={article.previewImage} classes='tagged-sidebar-article__image'/>
        <div className='tagged-sidebar-article__info'>
            <div className='tagged-sidebar-article__tags'>
                {article.tags.map(
                    (tag, key) =>
                        <span key={key} className='tagged-sidebar-article__tag'>{tag}</span>
                )}
            </div>
            <h1 className='tagged-sidebar-article__title'>
                {article.title}
            </h1>
            <span className='tagged-sidebar-article__date'>
                {article.pubdate}
            </span>
        </div>
    </div>
);

export default Article;