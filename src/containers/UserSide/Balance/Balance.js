import React, {Component} from 'react';

import DepositHistory from "./DepositHistory";
import CostsHistory from "./CostsHistory";

import './balance.scss';

class Balance extends Component {
    state = {};


    render() {
        return (
            <div className='balance-page'>
                <div className="page-title">
                    Баланс
                </div>

                <div className='total-balance'>
                    <span className="title">Баланс на рахунку</span>
                    <span className="value">245000 грн</span>
                    <button className='btn'>Поповнити </button>
                </div>

                <DepositHistory />

                <CostsHistory />
            </div>
        )
    }
}

export default Balance;