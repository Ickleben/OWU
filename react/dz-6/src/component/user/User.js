import React, {Component} from 'react';
import UserService from "../../service/UserService";
import './User.css'
class User extends Component {
    userService=new UserService()
    state={choosenUser:[]}
    componentDidMount() {
        let {id} = this.props;

        if (id !=='' && id <= 10 && id >0){
            this.userService.getUser(id).then(value => this.setState({choosenUser:value}))

        }else {this.setState({choosenUser:{name:'Виберіть користувача,або номер користувача введено не вірно'}})}

    }
    render() {
        let {id}=this.props

        let {choosenUser} = this.state;

        return (
            <div className='number'>
                {id}

                 <div> <div className='user-name'>{choosenUser.name}</div> {choosenUser.username} {choosenUser.email} </div>
            </div>
        );
    }
}

export default User;