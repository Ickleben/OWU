import React, {Component} from 'react';
import {PostService} from "../../service/postservice/PostService";

import {Route, Switch, withRouter} from "react-router-dom";
import UserPost from "./UserPost";

import UserComent from "./UserComent";

class UsersPosts extends Component {
    postService = new PostService()
    state = {userPost: []}

    componentDidMount()
     {

        let {id} = this.props

            this.postService.getPostById(id).then(value => this.setState({userPost: value, prevProps: value}))



    }

    render() {


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
let {match:{params:{id}}}=props
                        return (<UserComent id={id} key={id}/>)
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