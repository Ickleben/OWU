import React, {Component} from 'react';
import {PostService} from "../../service/postservice/PostService";

import {Route, Switch, withRouter} from "react-router-dom";
import UserPost from "./UserPost";

import UserComent from "./UserComent";

class UsersPosts extends Component {
    postService = new PostService()
    state = {userPost: [], prevProps: [{userId: 0}]}

    upgrade() {
        let {prevProps} = this.state
        let {match: {params}} = this.props
        if (+params.id !== prevProps[0].userId) {
            this.postService.getPostById(params.id).then(value => this.setState({userPost: value, prevProps: value}))


        }
    }

    render() {

        this.upgrade()
        let {userPost} = this.state
        let {match: {url}} = this.props

        return (
            <div>
                <div style={{color: 'white'}}>POSTS</div>
                {userPost.map(value => {
                    return <UserPost item={value} key={value.id}/>
                })}
                <hr/>
                <Switch>
                    <Route path={`${url}/:id`} render={(props) => {

                        return (<UserComent/>)
                    }

                    }/>

                </Switch>
            </div>
        );
    }
}

export default withRouter(UsersPosts);
// postService= new PostService()
// state={userPost:[],prevProps:[]}
// upgrade() {
//     let {prevProps}=this.state
//     let {match: {params}} = this.props
//     console.log(prevProps.id)
//     console.log(params.id)
//     if (+params.id !== prevProps.id) {
//         this.postService.getPostById(params.id).then(value => this.setState({userPost: value,prevProps:value}))
//
//
//     }
// }