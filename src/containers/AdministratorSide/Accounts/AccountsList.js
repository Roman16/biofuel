import React from 'react';
import {Table, Icon} from 'antd';

const AccountsList = () => {
    const columns = [
        {
            title: 'Номер рахунку',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'ID угоди',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Дата виставл',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Дійсний до',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Сума',
            dataIndex: 'sum',
            key: 'sum',
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
            number: '2424',
            id: '5',
            status: 'Верифікований',
            date: '15.02.2019',
            sum: '7585 грн'
        },{
            number: '2424',
            id: '5',
            status: 'Верифікований',
            date: '15.02.2019',
            sum: '7585 грн'
        },{
            number: '2424',
            id: '5',
            status: 'Верифікований',
            date: '15.02.2019',
            sum: '7585 грн'
        },{
            number: '2424',
            id: '5',
            status: 'Верифікований',
            date: '15.02.2019',
            sum: '7585 грн'
        },
    ];

   return(
       <div className='admin-table section'>
           <div className="title-table">Рахунки</div>
           <Table
               dataSource={dataSource}
               columns={columns}
           />
       </div>
   )
};

export default AccountsList;

