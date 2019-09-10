import React from 'react';
import {Table} from 'antd';

import star from '../../../assets/img/star.svg';

const dataSource = [
    {
        id: '13342',
        type: 'Купівля',
        category: 'EnA2',
        price: '100 грн',
        amount: '20т',
        total: '2000 грн',
        distance: '2500 км',
        date: ' 18:30  12/03/2018',
        funds: '4000 грн',
        status: 'Прийнятий'
    },
    {
        id: '65577',
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


const TradeHistory = ({data = dataSource}) => {
    const columns = [
        {
            title: 'ID угоди',
            dataIndex: 'id',
            key: 'id',
        },
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
            title: 'Вартість доставки',
            dataIndex: 'funds',
            key: 'funds',
        },
        {
            title: 'Дата виконання',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Оцінка якості',
            dataIndex: 'rating',
            key: 'rating',
            render: () => (
              <span className='rating'>
                  <img src={star} alt=""/>
                  4.84
              </span>
            )
        },
    ];


    return (
        <div className='trade-history'>
            <div className='user-table'>
                <div className='table-title'>
                    Історія торгів
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

export default TradeHistory;