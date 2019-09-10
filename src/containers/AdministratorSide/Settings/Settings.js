import React, {Component} from 'react';
import axios from 'axios';

import './settings.scss';

import RegistrationSettings from './RegistrationSettings';
import EmailSettings from './EmailSettings';

class Settings extends Component {
    state = {
        registrationParams: {},
        currencyParams: {},
        emailParams: [],
    };

    // async componentDidMount() {
    //     const [registration, email] = await Promise.all([axios.get(REGISTRATION_SETTINGS), axios.get(EMAIL_SETTINGS),]);
    //
    //     registration.data.forEach(item => {
    //         if (item.name === 'registration') {
    //             this.setState({
    //                 registrationParams: item
    //             })
    //         } else if (item.name === 'demo_currencies') {
    //             this.setState({
    //                 currencyParams: item,
    //             })
    //         }
    //     });
    //
    //     this.setState({
    //         emailParams: email.data
    //     })
    // }
    //
    // handlerChangeRegistrationSettings = async (value, id) => {
    //     if (id === this.state.registrationParams.id) {
    //         const res = await axios.put(`${REGISTRATION_SETTINGS}/${id}`, {
    //             value,
    //             type: 'boolean'
    //         });
    //         this.setState({registrationParams: res.data})
    //     } else {
    //         const res = await axios.put(`${REGISTRATION_SETTINGS}/${id}`, {
    //             value,
    //             type: 'boolean'
    //         });
    //         this.setState({currencyParams: res.data})
    //     }
    // };
    //
    // handlerChangeEmailSettings = async (value, trigger) => {
    //     const res = await axios.put(`${EMAIL_SETTINGS}/${trigger}`, {
    //         isEnabled: value
    //     });
    //
    //     let newEmailParams = await this.state.emailParams.map(item => {
    //         if (item.trigger === trigger) {
    //             item.enabled = value
    //         }
    //
    //         return item
    //     });
    //
    //     this.setState({emailParams: newEmailParams})
    // };
    //
    // handleOpenEmail = (email) => {
    //     this.props.changeSubPage({title: email.subject});
    //     this.props.history.push(`/admin/settings/${email.trigger}`)
    // };

    render() {
        const {registrationParams, emailParams, currencyParams} = this.state;
        console.log(registrationParams);
        console.log(currencyParams);
        return (
            <div className="settings-page">
                <RegistrationSettings
                    params={registrationParams}
                    currencyParams={currencyParams}
                    // onChange={this.handlerChangeRegistrationSettings}
                />

                <EmailSettings
                    params={emailParams}
                    // onChange={this.handlerChangeEmailSettings}
                    // openEmail={this.handleOpenEmail}
                />
            </div>
        )
    }
}



export default Settings;