import React, {Component} from 'react';

class Coments extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                {item.id}-{item.name}
            </div>
        );
    }
}

export default Coments;