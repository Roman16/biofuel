import React, {Component} from 'react';

import './accounts.scss';
import Filters from "../components/Filters/Filters";
import Statistics from "./Statistics";
import AccountsList from "./AccountsList";

class Accounts extends Component {
    state = {};

    render() {

        return (
            <div className='accounts-page'>
                <Statistics/>

                <Filters
                    page='accounts'
                />

                <AccountsList/>
            </div>
        )
    }
}

export default Accounts;