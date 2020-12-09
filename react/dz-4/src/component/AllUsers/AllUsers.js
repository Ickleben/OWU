import React, {Component} from 'react';
import {UserService} from "../../service/UserService";
import User from "../user/User";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class AllUsers extends Component {

    userService=new UserService()
    state={users:[]}
    async componentDidMount() {
       await this.userService.getAllUsers().then(value => this.setState({users:value})
        )

    }

    render() {
        let {users}=this.state
        return (
            <div>
                {users.map(value =>
                {return <User item={value} key={value.id}/>})}

            </div>

        );
    }
}

export default AllUsers