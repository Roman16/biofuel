import React from 'react';
import {Table} from 'antd';

const dataSource = [
    {
        id: '2424',
        type: 'Купівля',
        number: '2245367897876',
        date: ' 18:30  12/03/2018',
        sum: '4000 грн',
    },{
        id: '2424',
        type: 'Купівля',
        number: '2245367897876',
        date: ' 18:30  12/03/2018',
        sum: '4000 грн',
    },{
        id: '2424',
        type: 'Купівля',
        number: '2245367897876',
        date: ' 18:30  12/03/2018',
        sum: '4000 грн',
    },{
        id: '2424',
        type: 'Купівля',
        number: '2245367897876',
        date: ' 18:30  12/03/2018',
        sum: '4000 грн',
    },
];


const UnpaidAccounts = ({data = dataSource}) => {
    const columns = [
        {
            title: 'Номер рахунку',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'ID угоди',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Дата виставлення',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Дійсній до',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Сума рахунку',
            dataIndex: 'sum',
            key: 'sum',
        },
        {
            title: '',
            dataIndex: 'actions',
            key: 'actions',
            render: () => (
                <button className='btn btn-blue'>Переглянти</button>
            )
        }
    ];


    return (
        <div className='unpaid-accounts'>
            <div className='user-table'>
                <div className='table-title'>
                    Несплачені рахунки
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

export default UnpaidAccounts;