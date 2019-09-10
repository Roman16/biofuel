import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Tabs} from 'antd';

import './user.scss';
import UserShortInformation from "./UserShortInformation";
import Balance from "./Balance";
import Accounts from "./Accounts";
import KYC from "./KYC";

const TabPane = Tabs.TabPane;

class User extends Component {
    state = {};

    render() {
        return (
            <div className='user-page'>
                <div className='back-link'>
                    <Link to='/admin/users'>Користувачі</Link>
                    <span> > User14515</span>
                </div>


                <UserShortInformation/>

                <Balance/>

                <Accounts/>

                <div className='tabs-block'>
                    <Tabs defaultActiveKey="1" animated={false}>
                        <TabPane tab="KYC" key="1">
                            <KYC />
                        </TabPane>

                        <TabPane tab="Замовлення" key="2">
                            Content of Tab Pane 2
                        </TabPane>

                        <TabPane tab="Угоди" key="3">
                            Content of Tab Pane 3
                        </TabPane>

                        <TabPane tab="Рахунки" key="4">
                            Content of Tab Pane 3
                        </TabPane>

                        <TabPane tab="Скани документів" key="5">
                            Content of Tab Pane 3
                        </TabPane>

                        <TabPane tab="Баланс" key="6">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default User;