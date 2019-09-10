import React from 'react';
import {Table} from 'antd';

const NewsList = () => {
    const columns = [
        {
            title: 'No',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Заголовоки',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Текст',
            dataIndex: 'description',
            key: 'description',
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
                <div className='actions'>
                    <button className='btn btn-white'>Редагувати</button>
                    <button className='btn btn-red'>Видалити</button>
                </div>
            )
        },
    ];

    const dataSource = [
        {
            number: '1',
            name: 'test',
            description: 'Текст новини',
            date: '15.02.2019',
        },
    ];

    return (
        <div className='admin-table section'>
            <Table
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    )
};

export default NewsList;

