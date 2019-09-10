import React from 'react';
import {Icon, Select} from 'antd';

const Option = Select.Option;

const UserShortInformation = ({user}) => {
    return (
        <div className='short-info section'>
            <div className='user-id'>
                <span>id 161891</span>
                <span>10.10.2018    13:33:31</span>
            </div>

            <div className='user-name'>
                <span className="name">Роман Кукшин</span>
                <span className="verification-status">
                    <Icon type="check" /> Верифікований
                </span>

                <span className="verification-action">Скасувати</span>
            </div>

            <div className="user-email">
                <span>kukshin@gmail.com</span>
                <span>
                    <Icon type="check" />
                    2-факторна аутентифікація
                </span>
            </div>

            <div className='calculation-select'>
                <div className="form-item">
                    <label htmlFor="">Форма розрахунку</label>
                    <Select placeholder='Оберіть'>
                        <Option value='Оберіть'>Оберіть</Option>
                    </Select>
                </div>
            </div>

            <div className="blocked-block">
                <div className="status">
                    <label htmlFor="">Статус</label>
                    <span>Активний</span>
                </div>

                <div className="form-item">
                    <input type="text" placeholder='Причина'/>
                    <button className='btn btn-red'>Заблокувати</button>
                </div>
            </div>
        </div>
    )
};

export default UserShortInformation;