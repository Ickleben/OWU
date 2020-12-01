import React, {Component} from 'react';

class UsersComponent extends Component {

    render() {
        let {use}=this.props
        return (
            <div>
                <h4>{use.name} - {use.age} - {use.status.toString()}</h4>
            </div>
        );
    }
}

export default UsersComponent;