import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import './Users.css'

class User extends Component {
    colore() {
        let r = Math.floor(Math.random() * (256))
        let g = Math.floor(Math.random() * (256))
        let b = Math.floor(Math.random() * (256))
        let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        return color
    }

    render() {
        let {item, match: {url}} = this.props

        return (
            <div style={{background: `${this.colore()}`}} className={'divka'}>
                {item.id}={item.name} <Link to={`${url}/${item.id} `}>Posts</Link>
            </div>
        );
    }
}

export default withRouter(User);