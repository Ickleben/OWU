import React, {Component} from 'react';
import './Users.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
class UserPost extends Component {
    colore(){
        let r = Math.floor(Math.random() * (256))
        let    g = Math.floor(Math.random() * (256))
        let   b = Math.floor(Math.random() * (256))
        let  color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        return color
    }
    render() {
        let {item,match:{url}} = this.props;

        return (
            <div style={{background: `${this.colore()}`}} className={'divka2'}>
                {item.userId}.{item.id}-{item.body}<Link to={`${url}/${item.id} `}  >Comments</Link>
            </div>
        );
    }
}

export default withRouter(UserPost);