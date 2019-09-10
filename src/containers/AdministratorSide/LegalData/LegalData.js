import React, {Component} from 'react';
import {Table} from 'antd';

import './legaldata.scss';

class LegalData extends Component {
    state = {};

    render() {
        const columns = [
            {
                title: 'Назва форми розрахунку',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Організаційно правова форма',
                dataIndex: 'form',
                key: 'form',
            },
            {
                title: 'Організація',
                dataIndex: 'organ',
                key: 'organ',
            },
            {
                title: 'Назва банку',
                dataIndex: 'bank',
                key: 'bank',
            },
            {
                title: 'Розрахукновий рахунок',
                dataIndex: 'rah',
                key: 'rah',
            },
            {
                title: '',
                dataIndex: 'actions',
                key: 'actions',
                render: () => (
                    <button className='btn btn-white'>Редагувати</button>
                )
            },
        ];

        const dataSource = [
            {
                name: 'НАЗВА',
                form: 'TOB',
                organ: 'СУПЕРЕНЕРГ',
                bank: 'АТ “РайАЙЗЕН”',
                rah: '239808278905798'
            },
        ];

        return (
            <div className='legal-data-page'>
                <div className='admin-table section'>
                    <div className="title-table">Юридичні дані
                    <button className='btn'>Додати</button>
                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                    />
                </div>

            </div>
        )
    }
}

export default LegalData;