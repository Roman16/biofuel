import React from 'react';
import {Table} from 'antd';

const dataSource = [
    {
        id: '2424',
        type: 'Купівля',
        number: '2245367897876',
        date: ' 18:30  12/03/2018',
        status: 'Несплачений',
        sum: '4000 грн',
    }, {
        id: '2424',
        type: 'Купівля',
        number: '2245367897876',
        date: ' 18:30  12/03/2018',
        status: 'Несплачений',
        sum: '4000 грн',
    }, {
        id: '2424',
        type: 'Купівля',
        number: '2245367897876',
        date: ' 18:30  12/03/2018',
        status: 'Сплачений',
        sum: '4000 грн',
    }, {
        id: '2424',
        type: 'Купівля',
        number: '2245367897876',
        date: ' 18:30  12/03/2018',
        status: 'Несплачений',
        sum: '4000 грн',
    }, {
        id: '2424',
        type: 'Купівля',
        number: '2245367897876',
        date: ' 18:30  12/03/2018',
        status: 'Несплачений',
        sum: '4000 грн',
    },
];


const HistoryAccounts = ({data = dataSource}) => {
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
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Сума рахунку',
            dataIndex: 'sum',
            key: 'sum',
        }
    ];


    return (
        <div className='history-accounts'>
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

export default HistoryAccounts;