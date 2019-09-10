import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import UserSide from './containers/UserSide/UserSide';
import AdministratorSide from './containers/AdministratorSide/AdministratorSide';

import HomePage from "./components/HomePage";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import ChangePasswordPage from "./components/ChangePasswordPage";
import Exchange from "./containers/UserSide/Exchange/Exchange";
import Profile from "./containers/UserSide/Profile/Profile";
import Contracts from "./containers/UserSide/Contracts/Contracts";
import Balance from "./containers/UserSide/Balance/Balance";
import Orders from "./containers/UserSide/Orders/Orders";
import Accounts from "./containers/UserSide/Accounts/Accounts";

import Users from "./containers/AdministratorSide/Users/Users";
import Dashboard from "./containers/AdministratorSide/Dashboard/Dashboard";
import AdminAccounts from "./containers/AdministratorSide/Accounts/Accounts";
import AdminContracts from "./containers/AdministratorSide/Contracts/Contracts";
import Commissions from "./containers/AdministratorSide/Commissions/Commissions";
import News from "./containers/AdministratorSide/News/News";
import Settings from "./containers/AdministratorSide/Settings/Settings";
import Admins from "./containers/AdministratorSide/Admins/Admins";
import LegalData from "./containers/AdministratorSide/LegalData/LegalData";
import User from "./containers/AdministratorSide/Users/User/User";

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                {/*ADMIN SIDE*/}
                <Route path='/admin' render={() => (
                    <AdministratorSide>
                        <Route path='/admin/dashboard' component={Dashboard}/>
                        <Route exact path='/admin/users' component={Users}/>
                        <Route exact path='/admin/users/:id' component={User}/>
                        <Route path='/admin/accounts' component={AdminAccounts}/>
                        <Route path='/admin/contracts' component={AdminContracts}/>
                        <Route path='/admin/commissions' component={Commissions}/>
                        <Route path='/admin/news' component={News}/>
                        <Route path='/admin/settings' component={Settings}/>
                        <Route path='/admin/access_rights' component={Admins}/>
                        <Route path='/admin/legal_data' component={LegalData}/>
                    </AdministratorSide>
                )}>
                </Route>

                {/*USER SIDE*/}
                <Route path='' render={() => (
                    <UserSide>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/registration' component={RegistrationPage}/>
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/reset_password' component={ResetPasswordPage}/>
                        <Route path='/change_password' component={ChangePasswordPage}/>

                        <Route path='/exchange' component={Exchange}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/contracts' component={Contracts}/>
                        <Route path='/balance' component={Balance}/>
                        <Route path='/orders' component={Orders}/>
                        <Route path='/accounts' component={Accounts}/>
                    </UserSide>
                )}>
                </Route>
            </Switch>
        </Fragment>
    )
}

export default Routes;