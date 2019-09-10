import React, {Component} from 'react';

import './commissions.scss';

import Filters from '../components/Filters/Filters';
import CommissionsList from './CommissionsList';

class Commissions extends Component {
    state = {};

    render() {
        return (
            <div className='commissions-page'>
                <Filters page='commissions'/>

                <CommissionsList />
            </div>
        )
    }
}

export default Commissions;