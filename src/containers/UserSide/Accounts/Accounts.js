import React, {Component} from 'react';

import UnpaidAccounts from './UnpaidAccounts';
import HistoryAccounts from './HistoryAccounts';

import './accounts.scss';

class Accounts extends Component {
    state = {};


    render() {
        return (
            <div className='accounts-page'>
                <div className="page-title">
                    Рахунки
                </div>

                <div className='total-block'>
                    <div className='unpaid-accounts'>
                        <span className="title">Несплачені рахунки</span>
                        <span className="value">245000 грн</span>
                    </div>
                    <div className='overdue-accounts'>
                        <span className="title">Прострочені рахунки </span>
                        <span className="value">245000 грн</span>
                    </div>
                </div>

                <UnpaidAccounts />

                <HistoryAccounts />
            </div>
        )
    }
}

export default Accounts;