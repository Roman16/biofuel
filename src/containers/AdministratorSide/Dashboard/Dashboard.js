import React, {Component} from 'react';

import './dashboard.scss';

import SiteStatistics from "./SiteStatistics";
import AccountsStatistics from "./AccountsStatistics";
import ContractsStatistics from "../components/ContractsStatistics/ContractsStatistics";

class Dashboard extends Component {
    state = {};

    render() {
        return (
            <div className='dashboard-page'>
                <SiteStatistics />

                <AccountsStatistics />

                <ContractsStatistics />
            </div>
        )
    }
}

export default Dashboard;