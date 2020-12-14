import React, {Component} from 'react';
import UserService from "../../service/users/UserService";

class ChoosenUsers extends Component {

    render() {
let {choosenUsers} = this.props;
        return (
            <div>
                {choosenUsers && <div><div className='head-choosen'>ABOUT USER</div> <h3>Name: {choosenUsers.name}</h3> <h3>Email: {choosenUsers.email}</h3><h3>Phone: {choosenUsers.phone}</h3><h3>User Name :{choosenUsers.username}</h3><h3>City: {choosenUsers.address.city}</h3><h3>Street: {choosenUsers.address.street}</h3> </div>}
            </div>
        );
    }
}

export default ChoosenUsers;