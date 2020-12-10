import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";

class Film extends Component {

    render() {
        let {item,id,match:{url}} = this.props;
        return (
            <div>
                {item.title}==><Link to={`${url}/${id}`}>INFO</Link>
            </div>
        );
    }
}

export default withRouter(Film);