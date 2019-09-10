import React, {Component} from 'react';
import {Table} from 'antd';

import ugodi from '../../../../assets/img/icons/ugodi.svg';

import './contractsstatistics.scss';

class ContractsStatistics extends Component {
    state = {};

    render() {
        const columns = [
            {
                title: 'Не підтверджені',
                dataIndex: 'notConfirmed',
                key: 'notConfirmed',
            },
            {
                title: 'Підтверджені',
                dataIndex: 'confirmed',
                key: 'confirmed',
            },
            {
                title: 'Чекає оплати',
                dataIndex: 'waiting',
                key: 'waiting',
            },
            {
                title: 'Чекають відвантаження',
                dataIndex: 'waiting2',
                key: 'waiting2',
            },
            {
                title: 'Виконанні',
                dataIndex: 'done',
                key: 'done',
            },
            {
                title: 'Скасовані',
                dataIndex: 'canceled',
                key: 'canceled',
            },
        ];

        const dataSource = [
            {
                notConfirmed: '5',
                confirmed: '10',
                waiting: '88',
                waiting2: '35255',
                done: '32424',
                canceled: '2325325',
            }
        ];

        return (
            <div className="contracts-statistics section">
                <div className='block-title'>
                    <img src={ugodi} alt=""/>
                    Угоди
                </div>

                <div className='admin-table'>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                    />
                </div>
            </div>
        )
    }
}

export default ContractsStatistics;