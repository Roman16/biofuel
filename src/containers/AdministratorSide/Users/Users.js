import React, {Component} from 'react';

import './users.scss';
import Filters from "../components/Filters/Filters";
import UsersList from './UsersList';

class Users extends Component {
    state = {};

    openUser = () => {
        this.props.history.push('/admin/users/1')
    }

    render() {
        return (
            <div className='users-page'>
                <Filters
                    page='users'
                />

                <UsersList
                    openUser={this.openUser}
                />
            </div>
        )
    }
}

export default Users;