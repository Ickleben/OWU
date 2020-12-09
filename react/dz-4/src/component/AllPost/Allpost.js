import React, {Component} from 'react';
import {PostService} from "../../service/PostService";
import Post from "../post/Post";

class Allpost extends Component {
    postService=new PostService()
    state={posts:[]}
   async componentDidMount() {
        await this.postService.getAllPosts().then(value => this.setState({posts:value}))
    }
// choosenPost(id){
//         this.postService.getPostsById(id).then(value => this.setState({choosen:value}))
// }
    render() {
        let {posts}=this.state
        return (
            <div>
                {posts.map(value => {
                    return <Post item={value} key={value.id} />
                })}
                <hr/>

            </div>
        );
    }
}

export default Allpost;