import React from 'react';

import avatar from '../../../assets/img/avatar.svg';
import star from '../../../assets/img/star.svg';

const ShortInformation = ({onLogout}) => {
    return (
        <div className="short-information-block section">
            <div className='user-info'>
                <div className="user-avatar">
                    <img src={avatar} alt=""/>
                    <span className='rating'>
                        <img src={star} alt=""/>
                        4.84
                    </span>
                </div>

                <div>
                    <div className='user-status'>
                        <span className='user-name'>Name</span>

                        <span className='logout' onClick={onLogout}>Вийти</span>

                        <div className='verification-status'>
                            Верифицирован
                        </div>
                    </div>

                    <div className='last-login'>
                        Остання авторизація: 2018-12-06 15:57:06 &emsp; IP: 178.214.198.9
                    </div>
                </div>
            </div>

            <div className='login-history'>
                <div className='block-title'>Останні авторизації</div>
            </div>
        </div>
    )
};

export default ShortInformation;