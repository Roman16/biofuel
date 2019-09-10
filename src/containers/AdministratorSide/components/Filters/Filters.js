import React from 'react';
import {Icon, Select, DatePicker} from 'antd'

import './filters.scss';

const Option = Select.Option,
    {RangePicker} = DatePicker;

const Filters = ({page}) => {
    if (page === 'users') {
        return (
            <div className="filters section">
                <div className="form-item search">
                    <input type="text"/>
                    <Icon type="search"/>
                    <label htmlFor="">IDконтрагента, Ім’я, Email</label>
                </div>

                <div className="form-item">
                    <label htmlFor="">Статус верифікації</label>
                    <Select>
                        <Option value='верифікований'>Верифікований</Option>
                    </Select>
                </div>

                <div className="form-item">
                    <label htmlFor="">Статус контрагента</label>
                    <Select>
                        <Option value='stastus'>Stastus</Option>
                    </Select>
                </div>

                <div className="form-item">
                    <label htmlFor="">Дата свторення</label>
                    <RangePicker
                        onChange={e => console.log(e)}
                        placeholder={false}
                    />
                </div>
            </div>
        )
    } else if (page === 'accounts') {
        return (
            <div className="filters section">
                <div className="form-item search">
                    <input type="text"/>
                    <Icon type="search"/>
                    <label htmlFor="">ID контрагента, ID угоди або номер рахунку</label>
                </div>

                <div className="form-item">
                    <label htmlFor="">Статус рахунку</label>
                    <Select>
                        <Option value='верифікований'>Верифікований</Option>
                    </Select>
                </div>

                <div className="form-item">
                    <label htmlFor="">Дата свторення</label>
                    <RangePicker
                        onChange={e => console.log(e)}
                        placeholder={false}
                    />
                </div>
            </div>
        )
    } else if (page === 'contracts') {
        return (
            <div className="filters section">
                <div className="form-item search">
                    <input type="text"/>
                    <Icon type="search"/>
                    <label htmlFor="">ID контрагента, ID угоди або номер рахунку</label>
                </div>

                <div className="form-item">
                    <label htmlFor="">Категорія</label>
                    <Select>
                        <Option value='верифікований'>Верифікований</Option>
                    </Select>
                </div>

                <div className="form-item">
                    <label htmlFor="">Всього</label>
                    <Select>
                        <Option value='stastus'>Stastus</Option>
                    </Select>
                </div>

                <div className="form-item">
                    <label htmlFor="">Статус рахунку</label>
                    <Select>
                        <Option value='stastus'>Stastus</Option>
                    </Select>
                </div>

                <div className="form-item">
                    <label htmlFor="">Дата виставлення</label>
                    <RangePicker
                        onChange={e => console.log(e)}
                        placeholder={false}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="">Відстань</label>
                    <Select>
                        <Option value='stastus'>Stastus</Option>
                    </Select>
                </div>

                <div className="form-item">
                    <label htmlFor="">Вартість доставки</label>
                    <Select>
                        <Option value='stastus'>Stastus</Option>
                    </Select>
                </div>
            </div>
        )
    } else if (page === 'commissions') {
        return (
            <div className="filters section">
                <div className="form-item search">
                    <input type="text"/>
                    <Icon type="search"/>
                    <label htmlFor="">ID контрагента, ID угоди</label>
                </div>

                <div className="form-item">
                    <label htmlFor="">Категорія</label>
                    <Select>
                        <Option value='верифікований'>Status</Option>
                    </Select>
                </div>

                <div className="form-item">
                    <label htmlFor="">Розмір комісії</label>
                    <Select>
                        <Option value='верифікований'>Status</Option>
                    </Select>
                </div>

                <div className="form-item">
                    <label htmlFor="">Дата свторення</label>
                    <RangePicker
                        onChange={e => console.log(e)}
                        placeholder={false}
                    />
                </div>
            </div>
        )
    }
};

export default Filters;