import React, {Component} from 'react';
import './PostComponent.css'
class PostComponent extends Component {

    render() {
        let  {item,selectPost}=this.props
        return (
            <div className={'divka'}>
                {item.id}-{item.body}<button onClick={() => selectPost(item.id)}>Hold</button>
            </div>
        );
    }
}

export default PostComponent;