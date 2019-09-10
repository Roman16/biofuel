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
        dateEnd: ' 18:30  12/03/2018',
        sum: '4000 грн',
        status: 'Прийнятий'
    }, {
        type: 'Купівля',
        category: 'EnA2',
        price: '100 грн',
        amount: '12',
        total: '120',
        date: ' 18:30  12/03/2018',
        dateEnd: ' 18:30  12/03/2018',
        sum: '4000 грн',
        status: 'Прийнятий'
    }, {
        type: 'Купівля',
        category: 'EnA2',
        price: '100 грн',
        amount: '12',
        total: '120',
        date: ' 18:30  12/03/2018',
        dateEnd: ' 18:30  12/03/2018',
        sum: '4000 грн',
        status: 'Прийнятий'
    }, {
        type: 'Купівля',
        category: 'EnA2',
        price: '100 грн',
        amount: '12',
        total: '120',
        date: ' 18:30  12/03/2018',
        dateEnd: ' 18:30  12/03/2018',
        sum: '4000 грн',
        status: 'Прийнятий'
    }, {
        type: 'Купівля',
        category: 'EnA2',
        price: '100 грн',
        amount: '12',
        total: '120',
        date: ' 18:30  12/03/2018',
        dateEnd: ' 18:30  12/03/2018',
        sum: '4000 грн',
        status: 'Прийнятий'
    }, {
        type: 'Купівля',
        category: 'EnA2',
        price: '100 грн',
        amount: '12',
        total: '120',
        date: ' 18:30  12/03/2018',
        dateEnd: ' 18:30  12/03/2018',
        sum: '4000 грн',
        status: 'Прийнятий'
    },
];


const HistoryOrders = ({data = dataSource}) => {
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
            title: 'Дата відкриття',
            dataIndex: 'date',
            key: 'dateEnd',
        },
        {
            title: 'Відстань',
            dataIndex: 'sum',
            key: 'sum',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        }
    ];

    return (
        <div className='orders-history'>
            <div className='user-table'>
                <div className='table-title'>
                    Історія замовленнь
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

export default HistoryOrders;