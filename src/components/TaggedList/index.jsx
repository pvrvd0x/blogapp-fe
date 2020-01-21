import React from 'react';

import { Title, Article } from 'components';

import './TaggedList.scss';


const TaggedList = ({
    articles
}) => (
    <section className='tagged--list container'>
        <Title tag={articles[0].tags[1]}/>
        <div className='tagged--list__articles'>
            {articles.map(
                (article, index) =>
                    <Article article={article} key={index} classes='tagged--list__article'/>
            )}
        </div>
    </section>
);

export default TaggedList;