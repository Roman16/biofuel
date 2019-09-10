import React from 'react';
import {Table} from 'antd';

const OpenOrders = ({list, type}) => {
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
            dataIndex: 'funds',
            key: 'funds',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <button className='btn btn-red'>
                    Скасувати
                </button>
            )
        },

    ];

    const dataSource = [
        {
            type: 'Купівля',
            category: 'EnA2',
            price: '100 грн',
            amount: '20т',
            total: '2000 грн',
            date: ' 18:30  12/03/2018',
            funds: '4000 грн',
            status: 'Прийнятий'
        }
    ];

    return (
        <div className="open-orders">
            <div className='user-table'>
                <div className='title-order-type table-title'>
                    Відкриті замовлення
                </div>

                <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                />
            </div>
        </div>
    )
};

export default OpenOrders;