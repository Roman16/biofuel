import React, {Component} from 'react';

import ActiveContracts from './ActiveContracts';
import TradeHistory from "./TradeHistory";

import './contracts.scss';

class Contracts extends Component {
    state = {};


    render() {
        return (
            <div className='contracts-page'>
                <div className="page-title">
                    Обсяг по активним угодам
                </div>

                <div className='total-block'>
                    <div className='total-buy'>
                        <span className="title">Купівля</span>
                        <span className="value">245000 грн</span>
                    </div>
                    <div className='total-sell'>
                        <span className="title">Продаж</span>
                        <span className="value">245000 грн</span>
                    </div>
                </div>

                <ActiveContracts/>

                <TradeHistory />
            </div>
        )
    }
}

export default Contracts;