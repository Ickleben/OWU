import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
    withRouter,
  Link
} from "react-router-dom";
import PostService from "../../service/post/PostService";
import Post from "./Post";
class Posts extends Component {
    postService= new PostService()
    state={choosenPosts:null}
    componentDidMount() {
        let {id}=this.props

        this.postService.getAllPosts(id).then(value => this.setState({choosenPosts:value}))
    }
    render() {
let {choosenPosts} = this.state;


        return (
            <div className={'Allposts'}>
                {choosenPosts && choosenPosts.map((value,index)=>{return (<Post item={value} key={index}/>)})}
            </div>
        );
    }
}

export default withRouter(Posts)