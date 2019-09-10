import React, {Fragment} from 'react';
import {Icon} from 'antd';
import {NavLink} from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu'

import logo from '../assets/img/logo_head.svg';

import '../styles/header.scss';

const Header = () => {

    const renderMenu = () => {
        const isLoggedIn = sessionStorage.getItem('token') ? true : false;

        if (isLoggedIn) {
            return (
                <Fragment>
                    <NavLink to='/exchange' className='exchange-link'>
                        Перейти до біржі
                    </NavLink>

                    <nav>
                        <NavLink activeClassName='active-link' to='/contracts'>
                            Угоди
                        </NavLink>
                        <NavLink activeClassName='active-link' to='/balance'>
                            Баланс
                        </NavLink>
                        <NavLink activeClassName='active-link' to='/orders'>
                            Замовлення
                        </NavLink>
                        <NavLink activeClassName='active-link' to='/accounts'>
                            Рахунки
                        </NavLink>
                        <NavLink className='profile-link' activeClassName='active-link' to='/profile'>
                            <Icon type="user" />
                            Профіль
                        </NavLink>
                    </nav>
                </Fragment>
            )
        } else {
            return (<nav>
                    <NavLink activeClassName='active-link' to='/support'>
                        Підтримка
                    </NavLink>
                    <NavLink activeClassName='active-link' to='/news'>
                        Новини
                    </NavLink>

                    <div className='authentication-link'>
                        <NavLink to='/registration' className='registration-link'>
                            Реєстрація
                        </NavLink>

                        <NavLink to='/login' className='btn'>
                            Увійти
                        </NavLink>
                    </div>
                </nav>
            )
        }
    };

    return (
        <header>
            <div className='size-container header'>
                <NavLink to='/' className='logo'>
                    <img src={logo} alt=""/>
                </NavLink>

                <div className='mobile-menu'>
                    <Menu
                        isOpen={false}
                        right
                    >
                        {renderMenu()}
                    </Menu>
                </div>
                <div className="desktop-menu">
                    {renderMenu()}
                </div>
            </div>
        </header>
    )
};

export default Header;