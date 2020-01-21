import React from 'react';

import './Footer.scss';

//TODO: Create a normal footer
const Footer = () => (
    <footer>
        <div className='container'>
            <h1 className='footer__title'>
                Akea, blogger
            </h1>
            <span className='footer__address'>
                23 King Street, 5th Avenue, New York
            </span>
            <span className='footer__phone'>
                +1-2355-3345-5
            </span>
            <span className='footer__email'>
                call@akeablog.co
            </span>
        </div>
    </footer>
);

export default Footer;