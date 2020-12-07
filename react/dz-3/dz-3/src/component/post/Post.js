import React, {Component} from 'react';

class Post extends Component {
    render() {
        const {item,choosenPost,showButton}=this.props
        console.log(item)
        return (
            <div>
                {item.id}-{item.title}-{item.body}  {!showButton &&<button onClick={()=>{choosenPost(item.id)}} type="button" class="btn btn-primary btn-lg btn-block" >choose №{item.id}</button>}
            </div>
        );
    }
}

export default Post