import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import ShortInformation from './ShortInformation';
import TwoFactorAuthentication from './TwoFactorAuthentication';
import UserInformation from './UserInformation';
import Documents from './Documents';

import icon from '../../../assets/img/padlock.svg';
import './Profile.scss'

class Profile extends Component {
    state = {
        documents: [],
        user: {
            name: 'tt'
        }
    };

    handleDropImage = (images) => {
        this.setState({
            documents: [
                ...this.state.documents,
                ...images
            ]
        })
    };

    logout = () => {
        sessionStorage.removeItem('token');
        this.props.history.push('/')
    };

    render() {
        const {user, documents} = this.state;

        return (
            <div className="profile-page">
                <ShortInformation
                    user={user}
                    onLogout={this.logout}
                />

                <TwoFactorAuthentication/>

                <div className='change-password-page section'>
                    <img src={icon} alt=""/>
                    <span>Змінити пароль</span>
                    <button className='btn'>
                        <NavLink to='/change_password'>
                            Змінити пароль
                        </NavLink>
                    </button>
                </div>

                <UserInformation
                    user={user}
                />

                <Documents
                    documents={documents}
                    onDrop={this.handleDropImage}
                />
            </div>
        )
    }
}

export default Profile;