import React, {Component, Fragment} from 'react';

import Header from '../../components/Header';
import Footer from "../../components/Footer";

class UserSide extends Component {
    render() {
        return (
            <Fragment>
                <Header/>

                <div className='size-container content'>
                    {this.props.children}
                </div>

                <Footer />
            </Fragment>
        );
    }
}

export default UserSide;
