import React from 'react';
import Masonry from 'react-masonry-component';

import {
    SliderComponent,
    Article,
    Tagged,
    TaggedList,
    Footer,
    Header,
} from 'components';
import { LoadMoreButton } from 'containers';

import './Home.scss';


// TODO: Remove on Back End integration
import Articles from '../../articles';

const articles = Articles.articles;

const Home = () => {
    return (
        <div className='home'>
            <Header/>
            <SliderComponent slides={[{
                image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&w=1000&q=80',
                title: '10 Most Awesome Breathtaking Places',
                date: 'Oct 31, 2020',
                author: 'Jaden Smith'
            }, {
                image: 'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
                title: '10 Most Awesome Breathtaking Places',
                date: 'Oct 31, 2020',
                author: 'Jaden Smith'
            }, {
                image: 'https://cnet4.cbsistatic.com/img/8OQnCkn6L4qBDrBQzWxHtmGODTk=/2019/11/01/45b3b242-b28b-4b10-ba62-f441c18de3f5/20190620-145842.jpg',
                title: '10 Most Awesome Breathtaking Places',
                date: 'Oct 31, 2020',
                author: 'Jaden Smith'
            }, {
                image: 'https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg',
                title: '10 Most Awesome Breathtaking Places',
                date: 'Oct 31, 2020',
                author: 'Jaden Smith'
            }]}/>
            <section className='home-content container' style={{paddingBottom: 50}}>
                <section className='home-heading'>
                    <h1 className='home-heading__title'>Recent Articles</h1>
                    <span className='home-heading__subtitle'>Most Recent Posts</span>
                </section>
                <section className='home-grid'>
                    <Masonry className='home-grid-masonry'>
                        {articles.map(
                            (article, key) =>
                                <Article article={article} key={key}/>
                        )}
                    </Masonry>
                </section>
                <LoadMoreButton/>
            </section>
            <Tagged articles={articles.slice(0, 5)}/>
            <TaggedList articles={articles.slice(0, 5)}/>
            <Footer/>
        </div>
    );
};

export default Home;