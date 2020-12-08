import React, {Component} from 'react';
import {PostService} from "../../service/postservice/PostService";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
class UsersPosts extends Component {
    postService= new PostService()
    state={userPost:[]}
    componentDidMount() {
        let {match:{params}}=this.props

        this.postService.getPostById(params.id).then(value => this.setState({userPost:value}))
    }

    render() {


        let {userPost}=this.state

        return (
            <div>
                {userPost.id}-{userPost.body}
            </div>
        );
    }
}

export default withRouter(UsersPosts);