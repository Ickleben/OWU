import React, {Component} from 'react';
import User from "./User";
import {UserService} from "../../service/userservice/UserService";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
import {PostService} from "../../service/postservice/PostService";
import UsersPosts from "./UsersPosts";
class AllUsers extends Component {

    userService= new UserService()

    state={users:[]}
    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users:value}))
    }
// getElementBYId(id){
//         this.postService.getPostById(id).then(value => this.setState({userPost:value}))
// }
    render() {
        let {users}=this.state

        return (
            <div>

                {users.map(value => {return <User item={value} key={value.id} />})}
<hr/>
                <Switch>
                    <Route path={'/users/:id'}render={()=> {return <UsersPosts/>}
                    }/>
                </Switch>
            </div>

        );
    }
}

export default withRouter(AllUsers);
// render={(props)=> {return <UsersPosts/>}
// }/>