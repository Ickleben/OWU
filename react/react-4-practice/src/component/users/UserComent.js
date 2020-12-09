import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {ComentService} from "../../service/comentservice/ComentService";
import ComentsUser from "./ComentsUser";

class UserComent extends Component {
    comentService = new ComentService()
    state = {postComent: []}

    componentDidMount()
     {

        let {id} = this.props

            this.comentService.getPostById(id).then(value => this.setState({
                postComent: value

            }))



    }

    render() {


        let {postComent} = this.state
        return (
            <div>
                <div style={{color: 'white'}}>COMMENTS</div>
                {postComent.map(value => {
                    return <ComentsUser item={value} key={value.id}/>
                })}

            </div>
        );
    }
}

export default withRouter(UserComent);