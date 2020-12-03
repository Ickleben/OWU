import React, {Component} from 'react';

class PostComponent extends Component {

    render() {
        let  {item}=this.props
        return (
            <div>
                {item.id}-{item.body}<button onClick={}>choose</button>
            </div>
        );
    }
}

export default PostComponent;