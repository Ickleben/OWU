import React, {Component} from 'react';
import './Bank.css'
import BankService from "../../service/bank/BankService";
import Bank from "./Bank";
class Allbank extends Component {
    bankService=new BankService()
    state={bank:[]}
    componentDidMount() {
        this.bankService.getAllExchange().then(value => this.setState({bank:value}))
    }

    render() {
        let {bank} = this.state;
        return (
            <div className='exchange'>
                {bank.map((value,index) => {return (<Bank item={value} key={index}/>)})}
            </div>
        );
    }
}

export default Allbank;