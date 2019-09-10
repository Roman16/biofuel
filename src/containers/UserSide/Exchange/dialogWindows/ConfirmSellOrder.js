import React from 'react';
import {Icon, Popover} from 'antd';

import star from '../../../../assets/img/star.svg';
import defaultImg from '../../../../assets/img/gran.jpg';


const ConfirmSellOrder = ({step, nextStep, close}) => {

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

    const content = (
        <div>
            Розрахуйте вартість за допомогою <span
            style={{color: '#53BE4F', textDecoration: 'underline'}}>калькулятора</span>
        </div>
    );

    if (step === 0) {
        return (
            <div className='confirm-buy-order confirm-sell-order'>
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
                    <div className='info'>
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
                    <div className='image-block'>
                        <img src={defaultImg} alt=""/>
                    </div>
                </div>

                <div className='price'>
                    12400 грн
                </div>

                <div className='footer-window'>
                    <div>
                        <Icon type="file-pdf"/>
                        Завантажити сертифікат
                    </div>

                    <button className='btn' onClick={() => nextStep(1)}>
                        Прийняти <Icon type="arrow-right"/>
                    </button>
                </div>

            </div>
        )
    } else if (step === 1) {
        return (
            <div className='confirm-sell-order two-step'>
                <div className='window-title'>Умови бронювання</div>

                <div className='description'>
                    З вашого рахунку Bioexchange буде списано % від вартості <br/> угоди, для того щоб забронювати
                    ваше
                    замовлення
                </div>

                <div className='order-card'>
                    <div className='order-info'>
                        <div className='img-block'>
                            <img src={defaultImg} alt=""/>
                        </div>

                        <div>
                            <div className='order-name'>Пелета ENplus A1</div>
                            <div>Ціна: 100 грн/м³</div>
                            <div>Кількість: 124м³</div>
                        </div>
                    </div>

                    <div className='order-price'>
                        <div className='sum'>
                            <div>Сума замовлення</div>
                            12400 грн
                        </div>

                        <div className='advance'>
                            <div>Аванс бронювання</div>
                            124 грн
                        </div>
                    </div>
                </div>

                <div className='buttons'>
                    <button className='btn cancel'>Скасувати</button>
                    <button className='btn' onClick={() => nextStep(2)}>Приймаю</button>
                </div>
            </div>
        )
    } else if (step === 2) {
        return (
            <div className='confirm-sell-order two-step third-step'>
                <div className='window-title'>Замовлення заброньовано</div>

                <div className='order-card'>
                    <div className='order-info'>
                        <div className='img-block'>
                            <img src={defaultImg} alt=""/>
                        </div>

                        <div>
                            <div className='order-name'>Пелета ENplus A1</div>
                            <div>Ціна: 100 грн/м³</div>
                            <div>Кількість: 124м³</div>
                        </div>
                    </div>

                    <div className='order-price'>
                        <div className='sum'>
                            <div>Сума замовлення</div>
                            12400 грн
                        </div>

                        <div className='advance'>
                            <div>Аванс бронювання</div>
                            124 грн
                        </div>
                    </div>
                </div>

                <div className='window-title'>Сформувати рахунок</div>

                <div className='confirm-form'>
                    <div className="form-item">
                        <label htmlFor="">Організація</label>
                        <input type="text"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">ЕДРПОУ</label>
                        <input type="text"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Назва банку</label>
                        <input type="text"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">МФО</label>
                        <input type="text"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Розрахунковий рахунок</label>
                        <input type="text"/>
                    </div>
                </div>

                <div className='calculator'>
                    <div className="form-item">
                        <label htmlFor="">
                            Введіть вартість доставки
                            <Popover content={content} title={null}>
                                <Icon type="question-circle" theme="filled"/>
                            </Popover>
                        </label>
                        <input type="text"/>
                    </div>
                    <button className='btn' onClick={close}>Сформувати рахунок</button>
                </div>
            </div>
        )
    }
};


export default ConfirmSellOrder;