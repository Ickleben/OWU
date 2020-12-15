import React, {Component} from 'react';
import PostService from "../../service/PostService";
import JustPost from "./JustPost";
import './Post.css'
class Post extends Component {
    postService= new PostService()
    state={choosenPost:''}
    a=''
    componentDidMount(e) {
        let {number} = this.props;

        if (number !=='' && number <= 10 && number >0) {
            this.postService.getPost(number).then(value => this.setState({choosenPost: value})
            )

        }





    }

    render() {

        let {choosenPost} = this.state;



        return (
            <div>

                {choosenPost && <div>{choosenPost.map(value =>{return(<JustPost item={value} key={value.id}/>)})}</div>}


            </div>
        );
    }
}

export default Post;