import React, {Component} from 'react';
import CommentsService from "../service/CommentsService";

class ChoosenCommnet extends Component {
    commentsService=new CommentsService()
    state={choosenComments:null}
    componentDidMount() {
        let {id} = this.props;
        this.commentsService.getChoosenComments(id).then(value => this.setState({choosenComments:value}))
    }

    render() {
        let {choosenComments} = this.state;
        return (
            <div>
                {choosenComments &&<h4>{choosenComments.id}-{choosenComments.name}-{choosenComments.body}-{choosenComments.email}</h4>}
            </div>
        );
    }
}

export default ChoosenCommnet;