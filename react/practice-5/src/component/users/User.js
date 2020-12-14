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

                    <button  className="Button" onClick={() => selectPost(item.id)}>Details</button>
                <Link  className='link-post' to={`${url}/${item.id}`}>Post</Link>





            </div>
        );
    }
}

export default withRouter(User);