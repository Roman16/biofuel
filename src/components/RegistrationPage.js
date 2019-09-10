import React, {Component} from 'react';
import {Icon, Select, Switch} from 'antd';
import Recaptcha from 'react-recaptcha';
import {NavLink} from 'react-router-dom';

import logo from '../assets/img/logo_head.svg';

import {RegistrRequest, GetCountries, LoginRequest} from '../actions/UserActions';

const Option = Select.Option;

class RegistrationPage extends Component {
    state = {
        showTwoFactor: false,
        showTwoFactorQr: false,
        qr: '',
        countries: [],
        totpCode: '',
        user: {
            username: '',
            countryId: 13,
            email: '',
            password: '',
            repeatPassword: ''
        }
    };

    handleRegistration = async (e) => {
        e.preventDefault();

        if (this.state.user.password === this.state.user.repeatPassword) {
            const res = await RegistrRequest(this.state.user);

            this.setState({
                qr: res.qr,
                showTwoFactor: true,
            })
        }
    };

    handleLogin = async (e) => {
        e.preventDefault();
        const {totpCode, user: {email, password}} = this.state;

        await LoginRequest({
            email,
            password,
            totpCode
        });

        this.props.history.push('/exchange');
    };

    handleChangeInput = (e) => {
        const name = e.target.name,
            value = e.target.value;

        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    };

    handleChangeSwitch = (value) => {
        console.log(value);

        this.setState({
            showTwoFactorQr: value
        })
    };

    async componentDidMount() {
        const countries = await GetCountries();
        this.setState({
            countries
        })
    }

    render() {
        const {showTwoFactor, showTwoFactorQr, countries, qr, totpCode, username, email, password, repeatPassword} = this.state;

        if (!showTwoFactor) {
            return (
                <div className="registration-page separate-form">
                    <div className='go-back-btn' onClick={() => window.history.back()}>
                        <Icon type="left"/>
                        Назад
                    </div>

                    <div className='logo'>
                        <img src={logo} alt=""/>
                    </div>

                    <div className='form-title'>
                        <hr/>
                        <span>Реєстрація</span>
                        <hr/>
                    </div>

                    <form onSubmit={this.handleRegistration}>
                        <div className='form-item'>
                            <label htmlFor="">Ваше ім'я</label>
                            <input
                                type="text"
                                placeholder='Дмитрий'
                                value={username}
                                name='username'
                                onChange={this.handleChangeInput}
                            />
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Країна</label>
                            <Select
                                showSearch
                                placeholder="Украина"
                                optionFilterProp="children"
                                onChange={e => this.setState({countryId: +e})}
                            >
                                {countries.map(country => (
                                    <Option key={country.id} value={country.id}>{country.name}</Option>
                                ))}
                            </Select>
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                placeholder='exemple@gmail.com'
                                name='email'
                                value={email}
                                onChange={this.handleChangeInput}
                            />
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Пароль</label>
                            <input
                                type="password"
                                placeholder='*********'
                                name='password'
                                value={password}
                                onChange={this.handleChangeInput}
                            />
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Повторіть пароль</label>
                            <input
                                type="password"
                                placeholder='*********'
                                name='repeatPassword'
                                value={repeatPassword}
                                onChange={this.handleChangeInput}
                            />
                        </div>

                        <div className='confirm'>
                            <div className='form-item checkbox'>
                                <input id='checkbox' type="checkbox" required/>
                                <label htmlFor="checkbox">Приймаю умови</label>
                            </div>

                            <Recaptcha
                                sitekey="6LdXEH0UAAAAANNTQtS9e4ZwdASHuZ5zWM7psA2S"
                                render="explicit"
                                verifyCallback={e => console.log(e)}
                            />
                        </div>

                        <button className='btn authentication-action-btn'>
                            Зареєструватися
                        </button>

                        <div className='go-to-login'>
                            <NavLink to='/login'>
                                Я вже зареєстрований
                            </NavLink>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="two-factor separate-form">
                    <div className='go-back-btn'
                         onClick={() => this.setState({showTwoFactor: false, showTwoFactorQr: false})}>
                        <Icon type="left"/>
                        Назад
                    </div>

                    <div className='logo'>
                        <img src={logo} alt=""/>
                    </div>

                    <div className='form-title'>
                        <span>Дякуємо за реєстрацію!</span>
                        <hr/>
                    </div>

                    <form action="">
                        <div className="description">
                            Щоб убезпечити свій профіль, ми пропонуємо вам використовувати двухфакторную аутентифікацію
                        </div>

                        <div className='switch-block'>
                            <label htmlFor="">Увімкнути двухфакторную аутентифікацію</label>

                            <Switch
                                className='switch'
                                onChange={this.handleChangeSwitch}
                            />
                        </div>

                        {showTwoFactorQr ?
                            <div className='qr-code-block'>
                                <hr/>

                                <div className="description">
                                    Будь ласка відскануйте код за допомогою додатка Google authenticator на вашому смартфоні
                                </div>

                                <div className='qrCode'>
                                    <img src={qr} alt=""/>
                                </div>

                                <hr/>

                                <div className='enter-code'>
                                    Введіть отриманий код із додатка
                                    Google authenticator
                                </div>

                                <form onSubmit={this.handleLogin}>
                                    <div className='form-item'>
                                        <label htmlFor="">Шестизначний код</label>
                                        <input
                                            type="text"
                                            value={totpCode}
                                            onChange={e => this.setState({totpCode: e.target.value})}
                                        />
                                    </div>

                                    <button className='btn authentication-action-btn'>
                                        Увійти
                                    </button>
                                </form>
                            </div>
                            : ''}


                        <div className="or">Або</div>

                        <button className='btn authentication-action-btn' onClick={this.handleLogin}>
                            Перейти до біржі
                        </button>
                    </form>
                </div>

            )
        }
    }
}

export default RegistrationPage;