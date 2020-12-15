import React, {Component} from 'react';
import CommentService from "../../service/CommentService";
import PostService from "../../service/PostService";
import JustPost from "../post/JustPost";
import ChoosenCommnet from "./ChoosenCommnet";

class Comment extends Component {
    commentService= new CommentService()
    state={choosenComent:''}

    componentDidMount(e) {
        let {id} = this.props;

        if (id !=='' && id <= 101 && id >0) {
            this.commentService.getComments(id).then(value => this.setState({choosenComent: value})
            )
        }
    }

    render() {

        let {choosenComent} = this.state;
        console.log(choosenComent)


        return (
            <div>

                {choosenComent && <div>{choosenComent.map(value =>{return(<ChoosenCommnet item={value} key={value.id}/>)})}</div>}


            </div>
        );
    }
}


export default Comment;