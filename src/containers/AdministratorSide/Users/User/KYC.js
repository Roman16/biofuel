import React from 'react';

const KYC = () => {
    return (
        <div className="kyc-block">
            <div>
                <div className='block-title'>
                    Персональна <br/>
                    інформація
                </div>

                <div className='item'>
                    <label htmlFor="">Ім'я</label>
                    <div className="value">Роман</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Прізвище</label>
                    <div className="value">Кукшин</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Email</label>
                    <div className="value">roman@gmail.com</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Телефон</label>
                    <div className="value">+38066893891</div>
                </div>
                <div className='item'>
                    <label htmlFor="">ІНН</label>
                    <div className="value">+12355</div>
                </div>
            </div>

            <div>
                <div className='block-title'>
                    Юридичні данні
                </div>

                <div className='item'>
                    <label htmlFor="">Організаційно-правова форма</label>
                    <div className="value">Роман</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Організація</label>
                    <div className="value">ТОВ “СУПЕЕНЕРГО”</div>
                </div>
                <div className='item'>
                    <label htmlFor="">ЕДРПОУ</label>
                    <div className="value">141414</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Посвідчення платника ПДВ</label>
                    <div className="value">141414</div>
                </div>
                <div className='item'>
                    <label htmlFor="">ПІБ керуючого</label>
                    <div className="value">Петренко ПП</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Посада керівника</label>
                    <div className="value">Директор</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Місто, область, країна</label>
                    <div className="value">Київ, Київська область, Україна</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Вулиця</label>
                    <div className="value">Саксаганського 83</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Район</label>
                    <div className="value">Шевченківський</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Індекс</label>
                    <div className="value">12345</div>
                </div>
            </div>

            <div>
                <div className='block-title'>
                    Локація складу
                </div>

                <div className='item'>
                    <label htmlFor="">Місто</label>
                    <div className="value">Київ</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Область</label>
                    <div className="value">Київська</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Країна</label>
                    <div className="value">Україна</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Вулиця</label>
                    <div className="value">Сагайлачного</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Номер дома</label>
                    <div className="value">87</div>
                </div>
            </div>

            <div>
                <div className='block-title'>
                    Платіжна <br/> інформація
                </div>

                <div className='item'>
                    <label htmlFor="">Назва банку</label>
                    <div className="value">АТ "РАЙФАЙЗН"</div>
                </div>
                <div className='item'>
                    <label htmlFor="">МФО</label>
                    <div className="value">12314252</div>
                </div>
                <div className='item'>
                    <label htmlFor="">Розрахунковий рахунок</label>
                    <div className="value">14141441</div>
                </div>
            </div>
        </div>
    )
};

export default KYC;