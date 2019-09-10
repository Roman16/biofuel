import React from 'react';
import {Table, Icon} from 'antd';

const UsersList = ({openUser}) => {
    const columns = [
        {
            title: 'ID "Контрагента"',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Ім’я',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Статус верифікації',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Статус контрагента',
            dataIndex: 'status2',
            key: 'status2',
        },
        {
            title: 'Дата створення',
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
            name: 'Ngô Hải Giang',
            email: 'name@gmail.com',
            status: 'Верифікований',
            status2: 'Активний',
            date: '15.02.2019',
        },{
            id: '5',
            name: 'Ngô Hải Giang',
            email: 'name@gmail.com',
            status: 'Верифікований',
            status2: 'Активний',
            date: '15.02.2019',
        },{
            id: '5',
            name: 'Ngô Hải Giang',
            email: 'name@gmail.com',
            status: 'Верифікований',
            status2: 'Активний',
            date: '15.02.2019',
        },
    ];

    return(
        <div className='admin-table section'>
            <div className="title-table">Користувачі</div>
            <Table
                dataSource={dataSource}
                columns={columns}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: openUser,       // click row
                    };
                }}
            />
        </div>
    )
};

export default UsersList;