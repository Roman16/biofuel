import React from 'react';

const Balance = ({user}) => {
    return (
        <div className='balance section'>
            <div className="title">Баланс</div>

            <div className='balance-action'>
                <span>56778 грн</span>
                <button className='btn'>Поповнити</button>
            </div>
        </div>
    )
};

export default Balance;