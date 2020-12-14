import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CommentService from "../../service/comments/CommentService";
import Commnet from "./Commnet";
class Commnets extends Component {
    commentService= new CommentService()
    state={comments:null}
    componentDidMount() {
        let {id} = this.props;
        console.log(id)
this.commentService.getAllComments(id).then(value => this.setState({comments:value}))
    }

    render() {
        let {comments} = this.state;
        return (
            <div>
                {comments &&comments.map(value=>{return (<Commnet item={value} key={value.id}/>)})}
            </div>
        );
    }
}

export default Commnets;