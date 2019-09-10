import React from 'react';
import {NavLink} from 'react-router-dom';

import img from '../assets/img/illustr.png';

const HomePage = () => {
    return (
        <div className='home-page'>
            <div className='second-block'>
                <div>
                    <div className='title'>Біржа біопалива <br/> Bioexchange</div>
                    <div className='description-to-title'>
                        Створюємо конкурентне середовище на ринку енергоресурсів
                    </div>
                </div>

                <div className='image-block'>
                    <img src={img} alt=""/>
                </div>
            </div>

            <NavLink to='/registration' className="btn authentication-action-btn">
                Реєстрація
            </NavLink>

        </div>
    )
};

export default HomePage;