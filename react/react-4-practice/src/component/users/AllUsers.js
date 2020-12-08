import React, {Component} from 'react';
import User from "./User";
import {UserService} from "../../service/userservice/UserService";

import {Route, Switch, withRouter} from "react-router-dom";

import UsersPosts from "./UsersPosts";

class AllUsers extends Component {

    userService = new UserService()

    state = {users: []}

    async componentDidMount() {
        await this.userService.getAllUsers().then(value => this.setState({users: value}))
    }

    render() {
        let {users} = this.state

        return (
            <div>
                <div style={{color: 'white'}}>USERS</div>
                {users.map(value => {
                    return <User item={value} key={value.id}/>
                })}
                <hr/>
                <Switch>
                    <Route path={'/users/:id'} render={(props) => {

                        return (<UsersPosts/>)
                    }

                    }/>

                </Switch>
            </div>

        );
    }
}

export default withRouter(AllUsers);
// render={(props)=> {return <UsersPosts/>}
// }/>