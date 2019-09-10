import React from 'react';
import {Icon} from 'antd';

import star from '../../../../assets/img/star.svg';


const ConfirmBuyOrder = () => {
    const params = [
        {
            title: 'Ціна:',
            value: '100 грн/м³'
        },
        {
            title: 'Обсяг:',
            value: '44 т'
        },
        {
            title: 'Товар:',
            value: 'Назва'
        },
        {
            title: 'Сировина:',
            value: 'сосна'
        },
        {
            title: 'Одиниця виміру:',
            value: 'т'
        },
        {
            title: 'Відстань:',
            value: '32 км'
        },
        {
            title: 'Орієнтовна вартість дотсавки:',
            value: '8888 грн'
        },
    ];

    return (
        <div className='confirm-buy-order'>
            <div className='window-title'>Пелета ENplus A1</div>

            <div className='description-order'>
                    <span className='position'>
                        <Icon type="environment"/>
                        Киевская область, г.Белая церковь, ул. Верхняя 28а
                    </span>

                <span className='rating'>
                        <img src={star} alt=""/>
                        4.84
                    </span>
            </div>

            <div className="order-information">
                {params.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="title">
                            {item.title}
                        </div>

                        <div className="value">
                            {item.value}
                        </div>
                    </div>
                ))}
            </div>

            <div className='price'>
                12400 грн
            </div>

            <button className='btn'>
                Продати <Icon type="arrow-right"/>
            </button>
        </div>
    )
}


export default ConfirmBuyOrder;