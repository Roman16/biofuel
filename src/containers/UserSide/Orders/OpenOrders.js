import React from 'react';
import {Table} from 'antd';

const dataSource = [
    {
        type: 'Купівля',
        category: 'EnA2',
        price: '100 грн',
        amount: '12',
        total: '120',
        date: ' 18:30  12/03/2018',
        sum: '4000 грн',
        status: 'Прийнятий'
    }, {
        type: 'Купівля',
        category: 'EnA2',
        price: '100 грн',
        amount: '12',
        total: '120',
        date: ' 18:30  12/03/2018',
        sum: '4000 грн',
        status: 'Прийнятий'
    }, {
        type: 'Купівля',
        category: 'EnA2',
        price: '100 грн',
        amount: '12',
        total: '120',
        date: ' 18:30  12/03/2018',
        sum: '4000 грн',
        status: 'Прийнятий'
    },
];


const OpenOrders = ({data = dataSource}) => {
    const columns = [
        {
            title: 'Тип',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Категорія',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Ціна',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Обсяг',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Всього',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Дата відкриття',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Зарезервовані кошти',
            dataIndex: 'sum',
            key: 'sum',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: '',
            dataIndex: 'actions',
            key: 'actions',
            render: () => (
                <span className='actions'>
                     <button className='btn btn-red'>Скасувати</button>
                </span>
            )
        }
    ];

    return (
        <div className='open-orders'>
            <div className='user-table'>
                <div className='table-title'>
                    Відкриті замовлення
                </div>

                <Table
                    dataSource={data}
                    columns={columns}
                    pagination={false}
                />
            </div>
        </div>
    )
};

export default OpenOrders;