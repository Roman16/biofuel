import React from 'react';
import {Table, Icon} from 'antd';

const ContractsList = () => {
    const columns = [
        {
            title: 'ID угоди',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Категорія',
            dataIndex: 'cat',
            key: 'cat',
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
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Рахунок-фактура',
            dataIndex: 'rah',
            key: 'rah',
        },
        {
            title: 'Дата   створення',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '',
            dataIndex: 'actions',
            key: 'actions',
            render: () => (
                <Icon type="right"/>
            )
        },
    ];

    const dataSource = [
        {
            id: '5',
            status: 'Підтвердж',
            cat: 'Пелета',
            total: '80000грн',
            distance: '70 км',
            price: '567 грн',
            date: '15.02.2019',
            rah: 'AR84939'
        },
    ];

    return(
        <div className='admin-table section'>
            <div className="title-table">Список угод</div>
            <Table
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    )
};

export default ContractsList;

