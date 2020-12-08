import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                {item.id}-{item.body}
            </div>
        );
    }
}

export default Post;