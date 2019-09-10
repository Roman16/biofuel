import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../assets/img/logo_footer.svg';

import '../styles/footer.scss';

const Footer = () => {
    const nav = [
        {
            title: 'Про нас',
            href: 'support'
        },
        {
            title: 'Умови використання',
            href: 'news'
        },
        {
            title: 'Політика конфіденційності',
            href: 'support'
        },
        {
            title: 'Контакти',
            href: 'news'
        }
    ];
    return (
        <footer>
            <div className='size-container footer'>
                <img src={logo} alt=""/>

                <nav>
                    {nav.map((item, index) => (
                        <NavLink key={index} to={item.href}>
                            {item.title}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </footer>
    )
};

export default Footer;