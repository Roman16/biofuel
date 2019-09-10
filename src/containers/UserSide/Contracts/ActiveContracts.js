import React from 'react';
import {Table} from 'antd';

const dataSource = [
    {
        type: 'Купівля',
        category: 'EnA2',
        price: '100 грн',
        amount: '20т',
        total: '2000 грн',
        distance: '500 км',
        date: ' 18:30  12/03/2018',
        funds: '4000 грн',
        status: 'Прийнятий'
    },
    {
        type: 'Купівля',
        category: 'EnA2',
        price: '100 грн',
        amount: '20т',
        total: '2000 грн',
        distance: '500 км',
        date: ' 18:30  12/03/2018',
        funds: '4000 грн',
        status: 'Прийнятий'
    },
];


const ActiveContracts = ({data = dataSource}) => {
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
            title: 'Відстань',
            dataIndex: 'distance',
            key: 'distance',
        },
        {
            title: 'Доставка',
            dataIndex: 'funds',
            key: 'funds',
        },
        {
            title: 'Орієнт. доставка',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Рахунок фактура',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <span className='actions'>
                 <button className='btn btn-blue'>
                    Виконати
                </button>
                     <button className='btn btn-red'>
                    Скасувати
                </button>
                </span>
            )
        },
    ];


    return (
        <div className='active-contracts'>
            <div className='user-table'>
                <div className='table-title'>
                    Активні угоди
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

export default ActiveContracts;