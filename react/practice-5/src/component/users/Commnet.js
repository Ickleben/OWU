import React, {Component} from 'react';

class Commnet extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className='All-comments'>
              <div className='comments-num'>{item.id}</div> <div className='comments-name'>{item.name}</div> <div>{item.email}</div>
            </div>
        );
    }
}

export default Commnet;