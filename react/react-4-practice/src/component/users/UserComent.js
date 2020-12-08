import React, {Component} from 'react';
import {Route, Switch,withRouter} from "react-router-dom";
import {ComentService} from "../../service/comentservice/ComentService";
import ComentsUser from "./ComentsUser";

class UserComent extends Component {
    comentService= new ComentService()
    state={postComent:[],prevProps:[{postId:0}]}
    upgrade() {
        let {prevProps}=this.state
        let {match: {params}} = this.props
        if (+params.id !== prevProps[0].postId) {
            this.comentService.getPostById(params.id).then(value => this.setState({postComent: value,prevProps:value}))


        }
    }
    render() {

        this.upgrade()
        let {postComent}=this.state
        return (
            <div>
                {postComent.map(value => {return <ComentsUser item={value} key={value.id}  />})}

            </div>
        );
    }
}

export default withRouter(UserComent);