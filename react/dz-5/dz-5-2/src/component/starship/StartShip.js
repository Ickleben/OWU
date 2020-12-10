import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";

class StartShip extends Component {
    render() {
        let {item,id,match:{url}} = this.props;
        return (
            <div>
                {item.name}==><Link to={`${url}/${id}`}>INFO</Link>
            </div>
        );
    }
}

export default withRouter(StartShip);