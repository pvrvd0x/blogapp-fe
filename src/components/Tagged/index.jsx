import React from 'react';

import Title from './Title';
import MainArticle from './MainArticle';


const Tagged = ({
    article,
}) => (
    <section className='tagged container'>
        <Title tag={article.tags[0]}/>
        <MainArticle article={article}/>
    </section>
);

export default Tagged;