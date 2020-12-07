import React, {Component} from 'react';
import Post from "./post/Post";
import {PostService} from "../services/PostService";
import './AllPosts.css'
class AllPosts extends Component {
    postService=new PostService()
    state = {posts:[],choosen:null}
componentDidMount() {
this.postService.getAllPost().then(value => this.setState({posts:value})
)

}
    choosenPost=(id)=>{
this.postService.getPostId(id).then(value =>this.setState({choosen:value}) )
    }
    render() {
        const {posts,choosen}=this.state
        return (
            <div className='posts-box'>
                {posts.map(value=>{
                    return <Post item={value} key={value.id} choosenPost={this.choosenPost} />
                })}


             <div className='choosen-box'>  {choosen&&<Post item={choosen} showButton={true}/> }</div>
            </div>
        );
    }
}

export default AllPosts;