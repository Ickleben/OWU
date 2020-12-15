import React, {Component} from 'react';
import UserService from "../../service/UserService";
import User from "./User";

class AllUsers extends Component {


    Form=new React.createRef()
    state={choosenNum:''}

    render() {
let {choosenNum}=this.state
        console.log(choosenNum)
        return (
            <div>
                <form ref={this.Form}>Виберіть Юзера
                    <input type='number' onInput={this.num} value={this.state.choosenNum} min='0' max='15'/>

                </form>
                <User id={choosenNum} key={choosenNum}/>

            </div>
        );
    }
    num =(e)=>{

        this.setState({choosenNum:e.target.value})
    }
}

export default AllUsers;