import React from 'react';

import Title from '../Title';
import MainArticle from './MainArticle';
import Sidebar from './Sidebar';

import './Tagged.scss';

const Tagged = ({
    articles,
}) => (
    <section className='tagged container'>
        <Title tag={articles[0].tags[0]}/>
        <div className='tagged__articles'>
            <MainArticle article={articles[0]}/>
            <Sidebar articles={articles.slice(1)}/>
        </div>
    </section>
);

export default Tagged;