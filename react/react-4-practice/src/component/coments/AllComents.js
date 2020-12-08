import React, {Component} from 'react';
import {ComentService} from "../../service/comentservice/ComentService";
import Coments from "./Coments";

class AllComents extends Component {
    comentService = new ComentService()
    state = {comments: []}

    componentDidMount() {
        this.comentService.getAllComents().then(value => this.setState({comments: value}))
    }

    render() {
        let {comments} = this.state
        return (
            <div style={{background: 'white'}}>
                {comments.map(value => {
                    return <Coments item={value} key={value.id}/>
                })}
            </div>
        );
    }
}

export default AllComents;