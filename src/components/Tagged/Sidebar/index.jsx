import React from 'react';

import Article from './Article';

import './Sidebar.scss';

const Sidebar = ({
    articles
}) => (
    <aside className='tagged-sidebar'>
        {articles.map(
            (article, key) =>
                <Article key={key} article={article}/>
        )}
    </aside>
);

export default Sidebar;