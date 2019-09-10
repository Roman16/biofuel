import React, {useState} from 'react';
import {Cascader, Select} from 'antd';

import regions from '../../../assets/regions';

const Option = Select.Option,
    Group = Select.OptGroup;

const Filters = () => {
    const [raw, setRaw] = useState([]);


    const options = [
        {
            value: 'Брикет',
            label: 'Брикет',
            children: [
                {
                    value: 'Дуб',
                    label: 'Дуб',
                    children: [
                        {
                            value: 'Руф',
                            label: 'Руф',
                        }
                    ]
                },
                {
                    value: 'Сосна',
                    label: 'Сосна',
                    children: [
                        {
                            value: 'Нестро',
                            label: 'Нестро',
                        }
                    ]
                },
                {
                    value: 'ІТП',
                    label: 'ІТП',
                    children: [
                        {
                            value: 'Пини кей',
                            label: 'Пини кей',
                        }
                    ]
                },
            ]
        },
        {
            value: 'Пелета',
            label: 'Пелета',
            children: [
                {
                    value: 'Дуб',
                    label: 'Дуб',
                    children: [
                        {
                            value: 'EnA1',
                            label: 'EnA1',
                        }
                    ]
                },
                {
                    value: 'Сосна',
                    label: 'Сосна',
                    children: [
                        {
                            value: 'EnA2',
                            label: 'EnA2',
                        }
                    ]
                },
                {
                    value: 'ІТП',
                    label: 'ІТП',
                    children: [
                        {
                            value: 'EnB',
                            label: 'EnB',
                        }
                    ]
                },
            ],
        },
        {
            value: 'Щепа',
            label: 'Щепа',
            children: [
                {
                    value: 'Дуб',
                    label: 'Дуб',
                    children: [
                        {
                            value: 'Вологiсть 20-45%',
                            label: 'Вологiсть 20-45%',
                        }
                    ]
                },
                {
                    value: 'Сосна',
                    label: 'Сосна',
                    children: [
                        {
                            value: 'Вологiсть 35-55%',
                            label: 'Вологiсть 35-55%',
                        }
                    ]
                },
                {
                    value: 'ІТП',
                    label: 'ІТП',
                    children: [
                        {
                            value: 'Вологiсть 35-55%',
                            label: 'Вологiсть 35-55%',
                        },
                        {
                            value: 'Вологiсть 35-60%',
                            label: 'Вологiсть 35-60%',
                        }
                    ]
                },
            ]
        }
    ];

    const optionsFromSelect = () => {
        if (raw[2] === 'Руф' || raw[2] === 'Нестро' || raw[2] === 'Пини кей') {
            return (
                <Option value='1'>Поддон (980кг НЕТТО)</Option>
            )
        } else if (raw[2] === 'EnA1') {
            return (
                <Option value='2'>Биг бег (1т)</Option>
            )
        } else if (raw[2] === 'EnA2' || raw[2] === 'EnB') {
            return (
                <Option value='3'>Фассован</Option>
            )
        } else if (raw[0] === 'Щепа') {
            return (
                <Group>
                    <Option value='4'>Насипний куб</Option>
                    <Option value='5'>Щiльний куб</Option>
                    <Option value='6'>Тонна</Option>
                </Group>
            )
        }
    };

    return (
        <div className='exchange-filters-block'>
            <div className='size-container'>
                <div className="form-item">
                    <label htmlFor="">Сировина</label>
                    <Cascader
                        options={options}
                        onChange={e => setRaw(e)}
                        placeholder="обрати"
                        displayRender={label => label.join(', ')}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="">Локація</label>

                    <Select placeholder="обрати">
                        {regions.map(region => (
                            <Option key={region.id} value={region.id}>{region.name}</Option>
                        ))}
                    </Select>
                </div>

                <div className="form-item">
                    <label htmlFor="">Одиниця виміру</label>

                    <Select disabled={raw.length < 1} placeholder="обрати">
                        {optionsFromSelect()}
                    </Select>
                </div>

                {/*<div className="form-item">*/}
                {/*<label htmlFor="">Форма розрахунку</label>*/}
                {/*<Cascader*/}
                {/*options={options}*/}
                {/*onChange={e => console.log(e)}*/}
                {/*placeholder="обрати"*/}
                {/*displayRender={label => label.join(', ')}*/}
                {/*/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
};

export default Filters;
