import React, {Component} from 'react';
import {Modal} from 'antd';

import Filters from './Filters';
import OrdersList from "./OrdersList";
import ActiveOrders from "./ActiveOrders";
import OpenOrders from "./OpenOrders";
import TradeHistory from "./TradeHistory";

import CreateOrder from "./dialogWindows/CreateOrder";
import ConfirmBuyOrder from "./dialogWindows/ConfirmBuyOrder";
import ConfirmSellOrder from "./dialogWindows/ConfirmSellOrder";
import AddRatingOrder from "./dialogWindows/AddRatingOrder";

import './exchange.scss';

class Exchange extends Component {
    state = {
        visible: false,
        modalType: '',
        confirmStep: 0
    };

    showModal = (modalType) => {
        this.setState({
            visible: true,
            modalType
        });
    };

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        this.setState({
                visible: false,
            }, () => {
                this.setState({
                    confirmStep: 0,
                });
            }
        )
    };


    render() {
        const {modalType, confirmStep} = this.state;

        const renderDialogWindow = () => {
            if (modalType === 'buy' || modalType === 'sell') {
                return (
                    <CreateOrder
                        onCreateOrder={this.handleOk}
                        type={modalType}
                    />
                )
            } else if (modalType === 'buy-confirm') {
                return (<ConfirmBuyOrder/>)


            } else if (modalType === 'sell-confirm') {
                return (<ConfirmSellOrder
                    step={confirmStep}
                    nextStep={step => this.setState({confirmStep: step})}
                    close={this.handleCancel}
                />)
            } else if (modalType === 'rating') {
                return (<AddRatingOrder/>)
            }
        };

        return (
            <div className='exchange-page'>
                <Filters/>

                <ActiveOrders/>

                <div className='order-block'>
                    <OrdersList
                        type='buy'
                        onOpenCreateWindow={this.showModal}
                    />

                    <OrdersList
                        type='sell'
                        onOpenCreateWindow={this.showModal}
                    />
                </div>

                <OpenOrders/>

                <TradeHistory/>

                <Modal
                    footer={null}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {renderDialogWindow()}
                </Modal>
            </div>
        )
    }
}

export default Exchange;