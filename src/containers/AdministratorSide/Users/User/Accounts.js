import React from 'react';

import stop from '../../../../assets/img/icons/stop.svg';
import paid from '../../../../assets/img/icons/paid.svg';
import overdue from '../../../../assets/img/icons/overdue.svg';

const Accounts = ({user}) => {
    return (
        <div className='accounts section'>
            <div className="title">Рахунки</div>

            <div className='params-item'>
                <img src={stop} alt=""/>
                <label htmlFor="">Неcплачені рахунки</label>
                <span className='value red'>242</span>
            </div>
            <div className='params-item'>
                <img src={overdue} alt=""/>
                <label htmlFor="">Прострочені рахунки</label>
                <span className='value orange'>2445</span>
            </div>
            <div className='params-item'>
                <img src={paid} alt=""/>
                <label htmlFor="">Сплачені рахунки</label>
                <span className='value green'>56778</span>
            </div>
        </div>
    )
};

export default Accounts;