import React from 'react';

import users from '../../../assets/img/icons/usersStatistics.svg'
import fee from '../../../assets/img/icons/fee.svg'

const SiteStatistics = () => {
    return (
        <div className="site-statistics section">
            <div className='block-title'>
                Статистика
            </div>

            <div className='all-info'>
                <div className='users'>
                    <img src={users} alt=""/>
                    <label htmlFor="">Кількість користувачів</label>
                    <span className='value'>6847</span>
                </div>

                <div className='commissions'>
                    <img src={fee} alt=""/>
                    <label htmlFor="">Комісія біржі</label>
                    <span className='value'>52 614 грн</span>
                </div>
            </div>
        </div>
    )
};

export default SiteStatistics;