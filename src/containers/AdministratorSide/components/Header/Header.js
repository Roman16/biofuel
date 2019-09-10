import React from 'react';
import {Icon} from 'antd';

import logo from '../../../../assets/img/logo_head.svg';

import './header.scss';

const Header = () => {

    return (
        <div className='admin-header admin-size-container'>
            <div className='logo'>
                <img src={logo} alt=""/>
            </div>

            <div className='user-avatar'>
                <Icon type="user"/>
            </div>
        </div>
    )
};

export default Header;