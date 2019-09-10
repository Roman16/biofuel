import React, {Component} from 'react';

import ContractsStatistics from "../components/ContractsStatistics/ContractsStatistics";
import Filters from "../components/Filters/Filters";
import ContractsList from './ContractsList'

class Contracts extends Component {
    state = {};

    render() {
        return(
            <div className='contracts-page'>
                <ContractsStatistics />

                <Filters page='contracts'/>

                <ContractsList />
            </div>
        )
    }
}

export default Contracts;