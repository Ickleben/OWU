import React, {Component} from 'react';

class JustPost extends Component {state={post:[]}



    render() {

        let {item} = this.props;

        return (
            <div>
               <div className='post-num-title'> {item.id}.{item.title}</div><div>{item.body}</div>
            </div>
        );
    }
}

export default JustPost;