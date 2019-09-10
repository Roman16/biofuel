import React from 'react';
import {Table, Icon} from 'antd';

const CommissionsList = () => {
    const columns = [
        {
            title: 'ID контаргента',
            dataIndex: 'id2',
            key: 'id2',
        },
        {
            title: 'ID угоди',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Категорія',
            dataIndex: 'kat',
            key: 'kat',
        },
        {
            title: 'Дата транзакції',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Всього',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Розмір комісії',
            dataIndex: 'fee',
            key: 'fee',
        },
    ];

    const dataSource = [
        {
            id2: '2424',
            id: '523',
            kat: 'Пелети',
            date: '15.02.2019',
            total: '8696 грн',
            fee: '88 грн'
        }, {
            id2: '2424',
            id: '523',
            kat: 'Пелети',
            date: '15.02.2019',
            total: '8696 грн',
            fee: '88 грн'
        }, {
            id2: '2424',
            id: '523',
            kat: 'Пелети',
            date: '15.02.2019',
            total: '8696 грн',
            fee: '88 грн'
        },
    ];

    return (
        <div className='admin-table section'>
            <div className="title-table">Транзакції комісій
                <button className='btn'>Налаштувати</button>
            </div>
            <Table
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    )
};

export default CommissionsList;

