import React, {Component} from 'react';
import PostService from "../service/PostService";
import Posts from "./Posts";
import ChoosePost from "./ChoosePost";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
class AllPosts extends Component {
    postService = new PostService()
    state={posts:[]}
    componentDidMount() {
        this.postService.getAllPost().then(value => this.setState({posts:value}))
    }

    render() {
        let {posts} = this.state;
        return (
            <div>

                {posts.map(value => {return <Posts item={value} key={value.id}/>})}
<hr/>
<Route path={'/posts/:id'} render={(props)=>{
    let {match:{params:{id}}}=props
    return <ChoosePost id={id} key={id} />
}}/>
<hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);