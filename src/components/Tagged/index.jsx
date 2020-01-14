import React from 'react';

import Title from './Title';
import MainArticle from './MainArticle';


const Tagged = ({
    tag
}) => (
    <section className='tagged container'>
        <Title tag='Technology'/>
        <MainArticle article={{
            previewImage: 'https://source.unsplash.com/random',
            tags: ['Trending'],
            title: 'Check Out The Most Awesome VR Headset in 2020',
            text: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,...',
            author: 'Jane Smith',
            pubdate: 'November 7, 2019',
            socials: [{
                name: 'twitter',
                link: 'https://twitter.com',
            }, {
                name: 'facebook',
                link: 'https://facebook.com',
            }, {
                name: 'dribble',
                link: 'https://dribble.com',
            }, {
                name: 'pinterest',
                link: 'https://pinterest.com'
            }]
        }}/>
    </section>
);

export default Tagged;