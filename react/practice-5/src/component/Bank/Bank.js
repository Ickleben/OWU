import React, {Component} from 'react';
import './img'
class Bank extends Component {
    render() {
        let {item} = this.props;

        console.log(item)
        return (
            <div className='exchange-box'>
               <div>{item.ccy}</div><div>{item.base_ccy}</div>
            </div>
        );
    }
}

export default Bank;