import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
    withRouter,
  Link
} from "react-router-dom";
import PostService from "../../service/post/PostService";
import Posts from "./Posts";
class User extends Component {



    render() {
        let {item,match:{url},selectPost} = this.props;


        return (
            <div className={'AllUserbox'}>
                <div className={'AllUsers'}>
                {item.name}
                </div>

                    <button onClick={() => selectPost(item.id)}>Hold</button>
                <Link to={`${url}/${item.id}`}>About</Link>





            </div>
        );
    }
}

export default withRouter(User);