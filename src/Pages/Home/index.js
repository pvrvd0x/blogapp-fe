import React from 'react';

import { SliderComponent } from 'components';

import './Home.scss';


const Home = () => {
    return (
        <div className="home">
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
        </div>
    );
};

export default Home;