import React from 'react';
import {Table} from "antd";

const ActiveOrders = () => {
    const columns = [
        {
            title: 'Тип',
            dataIndex: 'type',
            key: 'type',
            width: 100,

        },
        {
            title: 'Категорія',
            dataIndex: 'category',
            key: 'category',
            width: 150,

        },
        {
            title: 'Ціна ',
            dataIndex: 'price',
            key: 'price',
            width: 100,

        },
        {
            title: 'Обсяг ',
            dataIndex: 'amount',
            key: 'amount',
            width: 100,

        },
        {
            title: 'Всього ',
            dataIndex: 'all',
            key: 'all',
            width: 150,

        },
        {
            title: 'Відстань ',
            dataIndex: 'distance',
            key: 'distance',
            width: 150,

        },
        {
            title: 'Доставка ',
            dataIndex: 'delivery',
            key: 'delivery',
            width: 150,

        },
        {
            title: 'Орієнт. доставка ',
            dataIndex: 'sum',
            key: 'sum',
            width: 200,

        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            width: 150,

            render: () => (
                <span className='table-action-btn'>
                  <button className='btn btn-blue'>Виконати</button>
                  <button className='btn btn-red'>Скасувати</button>
                </span>
            )
        }
    ];

    const dataSource = [
        {
            type: 'Купівля',
            category: 'EnA2',
            price: '100 грн',
            amount: '20т',
            all: '2000 грн',
            distance: '467 км  ',
            delivery: '42424 грн  ',
            sum: '12/03/2018  '
        }
    ];


    return (
        <div className='active-orders user-table'>
            <div className='table-title'>
                Активні угоди
            </div>

            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
            />
        </div>
    )
};

export default ActiveOrders;