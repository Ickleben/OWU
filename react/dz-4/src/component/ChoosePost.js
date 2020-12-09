import React, {Component} from 'react';
import PostService from "../service/PostService";

class ChoosePost extends Component {
    postService =new PostService()
    state={choosenPost:null}
    componentDidMount() {
        let {id} = this.props;
        console.log(id)
        this.postService.getElementById(id).then(value => this.setState({choosenPost:value}) )

    }

    render() {
        let {choosenPost} = this.state;

        return (
            <div>
                 {choosenPost && <h3>{choosenPost.id}-{choosenPost.body}-{choosenPost.title}</h3>}
            </div>
        );
    }
}

export default ChoosePost;