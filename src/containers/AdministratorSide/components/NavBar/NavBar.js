import React from 'react';
import {NavLink} from 'react-router-dom';

import dashboard from '../../../../assets/img/icons/dashboard.svg';
import dashboardActive from '../../../../assets/img/icons/dashboard_active.svg';

import users from '../../../../assets/img/icons/users.svg';
import usersActive from '../../../../assets/img/icons/users_active.svg';

import accounts from '../../../../assets/img/icons/accounts.svg';
import accountsActive from '../../../../assets/img/icons/accounts_active.svg';

import agreements from '../../../../assets/img/icons/agreements.svg';
import agreementsActive from '../../../../assets/img/icons/agreements_active.svg';

import commissions from '../../../../assets/img/icons/commissions.svg';
import commissionsActive from '../../../../assets/img/icons/commissions_active.svg';

import news from '../../../../assets/img/icons/news.svg';
import newsActive from '../../../../assets/img/icons/news_active.svg';

import settings from '../../../../assets/img/icons/settings.svg';
import settingsActive from '../../../../assets/img/icons/settings_active.svg';

import accessRights from '../../../../assets/img/icons/access_rights.svg';
import accessRightsActive from '../../../../assets/img/icons/access_rights_active.svg';

import legalData from '../../../../assets/img/icons/legal_data.svg';
import legalDataActive from '../../../../assets/img/icons/legal_data_active.svg';

import './navigationbar.scss';

const NavBar = () => {
    const menu = [
        {
            title: 'Інформаційна панель',
            href: 'dashboard',
            icon: dashboard,
            activeIcon: dashboardActive
        },
        {
            title: 'Користувачі',
            href: 'users',
            icon: users,
            activeIcon: usersActive
        },
        {
            title: 'Рахунки',
            href: 'accounts',
            icon: accounts,
            activeIcon: accountsActive
        },
        {
            title: 'Угоди',
            href: 'contracts',
            icon: agreements,
            activeIcon: agreementsActive
        },
        {
            title: 'Комісія',
            href: 'commissions',
            icon: commissions,
            activeIcon: commissionsActive
        },
        {
            title: 'Новини',
            href: 'news',
            icon: news,
            activeIcon: newsActive
        },
        {
            title: 'Налаштування',
            href: 'settings',
            icon: settings,
            activeIcon: settingsActive
        },
        {
            title: 'Права доступу',
            href: 'access_rights',
            icon: accessRights,
            activeIcon: accessRightsActive
        },
        {
            title: 'Юридичні дані',
            href: 'legal_data',
            icon: legalData,
            activeIcon: legalDataActive
        },
    ];

    return (
        <div className='navigation-bar'>
            {menu.map((item) => (
                <NavLink
                    className='menu-item'
                    key={item.href}
                    to={`/admin/${item.href}`}>
                    <img src={item.icon} alt="" className='icon'/>
                    <img src={item.activeIcon} alt="" className='active-icon'/>

                    {item.title}
                </NavLink>
            ))}
        </div>
    )
};

export default NavBar;