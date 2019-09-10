import React from 'react';
import {Switch} from 'antd';


const RegistrationSettings = ({params, onChange, currencyParams}) => {

    return (
        <div className='registration-settings section'>
            <h1>Реєстрація</h1>

            <label>Вимкнута</label>
            <Switch
                className='settings-switch'
                // checked={params.value}
                // onChange={(e) => onChange(e, params.id)}
            />

            <label>Увімкнена</label>
        </div>
    )
};

export default RegistrationSettings;