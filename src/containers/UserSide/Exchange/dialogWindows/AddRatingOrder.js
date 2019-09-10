import React from 'react';
import {Rate, Icon} from 'antd';


const AddRatingOrder = () => {

    return (
        <div className='rating-order'>
            <div className='window-title'>Поставте оцінку вашої останньої операції</div>

            <div className='description-order'>
                <div className="name-order">
                    <span className='name'>Пелета ENplus A1</span>
                    <span className='date'>24.04.2019</span>
                </div>

                <div style={{display: 'flex'}}>
                    <div className='description'>
                        <div className='price'>
                            <label className='title'>Ціна:</label>
                            <span className='value'>100 грн/м³</span>
                        </div>
                        <div className='count'>
                            <label className='title'>Кількість:</label>
                            <span className='value'>124м³</span>
                        </div>
                    </div>

                    <div className='total'>
                        <label className='title'>Сума замовлення</label>
                        <div className='value'>12400 грн</div>
                    </div>
                </div>
            </div>

            <div className='rate-block'>
                <span className='label'>Погано</span>
                <Rate character={<Icon type="star"/>}/>
                <span className='label'>Відмінно</span>
            </div>


            <button className='btn'>
                Оцінити
            </button>
        </div>
    )
};


export default AddRatingOrder;