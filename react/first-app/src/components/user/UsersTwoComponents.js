import React, {Component} from 'react';

class UsersTwoComponents extends Component {
    render() {
        let {users}=this.props
        return (
            <div>
                {users.id}-{users.name}-{users.age}-{users.status.toString()}-{users.address.city}-{users.address.street}-{users.address.number}
            </div>
        );
    }
}

export default UsersTwoComponents;