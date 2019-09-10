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


const DepositHistory = ({data = dataSource}) => {
    const columns = [
        {
            title: 'ID транзакції',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Тип',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Номер рахунку',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Дата поповнення',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Сума поповнення',
            dataIndex: 'sum',
            key: 'sum',
        }
    ];


    return (
        <div className='deposit-history'>
            <div className='user-table'>
                <div className='table-title'>
                    Історія моїх поповнень
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

export default DepositHistory;