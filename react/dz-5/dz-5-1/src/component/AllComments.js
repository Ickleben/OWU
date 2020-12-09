import React, {Component} from 'react';
import CommentsService from "../service/CommentsService";
import Comment from "./Comment";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
import ChoosenCommnet from "./ChoosenCommnet";
class AllComments extends Component {
    commentsService = new CommentsService()
    state={comments:[]}
    componentDidMount() {
        this.commentsService.getAllComments().then(value => this.setState({comments:value}))
    }

    render() {
        let {comments} = this.state;
        return (
            <div>
                {comments.map(value => {return <Comment item={value} key={value.id}/>})}
                <hr/>
<Route path={'/comments/:id'} render={(props)=>{
    let {match:{params:{id}}}=props
    return (<ChoosenCommnet id={id} key={id}/>)}}/>
            </div>
        );
    }
}

export default withRouter(AllComments);