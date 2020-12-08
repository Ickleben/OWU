import React, {Component} from 'react';
import {PostService} from "../../service/postservice/PostService";
import Post from "./Post";

class AllPosts extends Component {
    postService=new PostService()
    state={posts:[]}
    componentDidMount() {
        this.postService.getAllPost().then(value => this.setState({posts:value}))
    }

    render() {
        let {posts}=this.state
        return (
            <div style={{background:'white'}}>
                {posts.map(value => {return <Post item={value} key={value.id}/>})}
            </div>
        );
    }
}

export default AllPosts;