import React from 'react';
import Masonry from 'react-masonry-component';

import { SliderComponent, Article, Tagged } from 'components';
import { LoadMoreButton } from 'containers';

import './Home.scss';


const Home = () => {
    return (
        <div className='home'>
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
                        <Article article={{
                        previewImage: 'https://source.unsplash.com/random',
                        tags: ['Trending'],
                        title: 'Check Out The Most Awesome VR Headset in 2020',
                        text: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,...',
                        author: {
                            name: 'Jane Smith',
                            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                        },
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
                        <Article article={{
                        previewImage: 'https://upload.wikimedia.org/wikipedia/commons/5/57/ECurtis.jpg',
                        tags: ['Trending'],
                        title: 'Check Out The Most Awesome VR Headset in 2020',
                        text: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,...',
                        author: {
                            name: 'Jane Smith',
                            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
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
                        <Article article={{
                        previewImage: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                        tags: ['Trending'],
                        title: 'Check Out The Most Awesome VR Headset in 2020',
                        text: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,...',
                        author: {
                            name: 'Jane Smith',
                            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                        },
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
                        <Article article={{
                        previewImage: 'https://images.unsplash.com/photo-1525629179084-f7a7c04f50f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                        tags: ['Trending'],
                        title: 'Check Out The Most Awesome VR Headset in 2020',
                        text: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,...',
                        author: {
                            name: 'Jane Smith',
                            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                        },
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
                        <Article article={{
                        previewImage: 'https://icdn2.digitaltrends.com/image/digitaltrends/google-pixel-xl-issues.jpg',
                        tags: ['Trending'],
                        title: 'Check Out The Most Awesome VR Headset in 2020',
                        text: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,...',
                        author: {
                            name: 'Jane Smith',
                            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                        },
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
                        <Article article={{
                        previewImage: 'https://source.unsplash.com/random',
                        tags: ['Trending'],
                        title: 'Check Out The Most Awesome VR Headset in 2020',
                        text: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,...',
                        author: {
                            name: 'Jane Smith',
                            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                        },
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
                        <Article article={{
                        previewImage: 'https://source.unsplash.com/random',
                        tags: ['Trending'],
                        title: 'Check Out The Most Awesome VR Headset in 2020',
                        text: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,...',
                        author: {
                            name: 'Jane Smith',
                            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                        },
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
                    </Masonry>
                </section>
                <LoadMoreButton/>
            </section>
            <Tagged article={{
                previewImage: 'https://source.unsplash.com/random',
                tags: ['Technology'],
                title: 'Check Out The Most Awesome VR Headset in 2020',
                text: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,...',
                author: {
                    name: 'Jane Smith',
                    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                },
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
        </div>
    );
};

export default Home;