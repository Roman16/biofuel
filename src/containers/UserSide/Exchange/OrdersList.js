import React from 'react';
import {Table, Icon, Switch, Popover} from 'antd';

import star from '../../../assets/img/star.svg';

const OrdersList = ({list, type, onOpenCreateWindow}) => {
    const contentCertificate = (
            <div style={{border: '1px solid #53BE4F'}}>
                Є сертифікат
            </div>
        ),
        contentNotCertificate = (
            <div style={{border: '1px solid #C10119'}}>
                Сертифікат відсутній
            </div>
        );

    const columns = [
        {
            title: 'Найменування',
            dataIndex: 'name',
            key: 'name',
            width: 200,
            sorter: true,
            render: (name, item) => (
                <span className='certificated'>
                    {item.certificate ?
                        <Popover content={contentCertificate} title={null}>
                            <Icon type="safety-certificate" theme="filled"/>
                        </Popover>

                        :
                        <Popover content={contentNotCertificate} title={null}>
                            <Icon type="close-circle" theme="filled"/>
                        </Popover>
                    }
                    {name}
                 </span>
            )
        },
        {
            title: 'Ціна ',
            dataIndex: 'price',
            key: 'price',
            width: 200,
            sorter: true,
        },
        {
            title: 'Обсяг',
            dataIndex: 'amount',
            key: 'amount',
            width: 150,
            sorter: true,
        },
        {
            title: 'Відстань',
            dataIndex: 'distance',
            key: 'distance',
            width: 150,
            sorter: true,
        },
        {
            title: 'Всього',
            dataIndex: 'sum',
            key: 'sum',
            width: 100,
            sorter: true,
        },
        {
            title: 'Рейтинг',
            dataIndex: 'rating',
            key: 'rating',
            width: 100,
            sorter: true,
            render: (rating) => (
                <span className='rating-order'>
                    <img src={star} alt=""/>
                    {rating}
                </span>
            )
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            width: 20,
            render: () => (
                <span className='table-action-btn'>
                    <Icon type="right"/>
                    <Icon type="arrow-right"/>
                </span>
            )
        },

    ];

    const dataSource = [
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            distance: '999999км',
            sum: '12400 грн',
            rating: '4.84',
            certificate: true
        },
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            distance: '999999км',
            sum: '12400 грн',
            rating: '4.84',
            certificate: false
        },
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            distance: '999999км',
            sum: '12400 грн',
            rating: '4.84',
            certificate: true
        },
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            distance: '999999км',
            sum: '12400 грн',
            rating: '4.84',
            certificate: true
        },
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            distance: '999999км',
            sum: '12400 грн',
            rating: '4.84',
            certificate: true
        },
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            distance: '999999км',
            sum: '12400 грн',
            rating: '4.84',
            certificate: true
        },
    ];

    return (
        <div className="orders-list">
            <div className='user-table'>
                <div className='title-order-type table-title'>
                    <span>{type === 'buy' ? 'Купівля' : 'Продаж'}</span>

                    <div className='switch-block'>
                        <label htmlFor="">Краща пропозиція</label>
                        <Switch/>
                    </div>

                    <button className='btn' onClick={() => onOpenCreateWindow(type)}>
                        <Icon type="plus-circle"/>
                        Створити
                    </button>
                </div>

                <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: () => {
                                onOpenCreateWindow(`${type}-confirm`)
                            }
                        };
                    }}
                />
            </div>
        </div>
    )
};

export default OrdersList;