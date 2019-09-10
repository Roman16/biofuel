import React from 'react';
import {Table, Switch} from 'antd';

const EmailSettings = ({onChange, openEmail}) => {
    const columns = [
        {
            title: 'Trigger',
            dataIndex: 'subject',
            key: 'subject',
            width: 250,
        },
        {
            title: 'Заголовок',
            dataIndex: 'title',
            key: 'title',
            width: 150,
        },
        {
            title: 'Остання зміна',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            width: 150,
        },
        {
            title: '',
            dataIndex: 'enabled',
            key: 'enabled',
            width: 200,
            render: (enabled, item) => {
                return (<div>
                    <Switch
                        className='settings-switch'
                        // checked={enabled}
                        // onChange={(e) => onChange(e, item.trigger)}
                    />
                </div>)
            }
        },
        {
            title: '',
            dataIndex: 'edit',
            key: 'edit',
            width: 150,
            render: (e, item) => (
                <button
                    className='btn btn-white'
                    // onClick={() => openEmail(item)}
                >
                    Редагувати
                </button>
            )
        },
    ];

    const params = [
        {
            subject: 'Реєстрація',
            title: 'Дякуємо за…',
            updatedAt: '21/10/2018 10:13:23'
        }
    ];

    return (
        <div className='admin-table section'>
            <h1 style={{margin: '0 0 40px 0'}}>Email налаштування</h1>

            <Table
                pagination={false}
                columns={columns}
                dataSource={params}
                rowKey={record => record.id}
                className='admin-table'
            />
        </div>
    )
};

export default EmailSettings;