import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";

class Posts extends Component {
    render() {
        let {item,match:{url}} = this.props;
        return (
            <div>
                {item.id}-{item.body} <Link to={`${url}/${item.id}`}>INFO</Link>
            </div>
        );
    }
}

export default withRouter(Posts);