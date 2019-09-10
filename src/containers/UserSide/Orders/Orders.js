import React, {Component} from 'react';
import OpenOrders from "./OpenOrders";
import HistoryOrders from "./HistoryOrders";

import './orders.scss';

class Orders extends Component {
    state = {};

    render() {
        return (
            <div className='orders-page'>
                <div className="page-title">
                    Замовлення
                </div>

                <OpenOrders />

                <HistoryOrders />
            </div>
        )
    }
}

export default Orders;