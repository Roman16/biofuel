import React from 'react';
import {Table} from 'antd';

const TradeHistory = () => {
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
            title: 'Дата виконання',
            dataIndex: 'date',
            key: 'date',
        }
    ];

    const dataSource = [
        {
            type: 'Купівля',
            category: 'EnA2',
            price: '100 грн',
            amount: '20т',
            total: '2000 грн',
            date: ' 18:30  12/03/2018',
            distance: '500 км',
        }
    ];

    return(
        <div className='trade-history'>
            <div className='user-table'>
                <div className='title-order-type table-title'>
                    Історія торгів
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

export default TradeHistory;