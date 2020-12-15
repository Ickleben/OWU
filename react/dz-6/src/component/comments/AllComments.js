import React, {Component} from 'react';
import Post from "../post/Post";
import Comment from "./Comment";

class AllComments extends Component {
    formComment= new React.createRef
    state={number:''}
    render() {
        let {number} = this.state;

        return (
            <div>
                <form ref={this.formComment}>
                    Виберіть до якого Поста вам необхідні коменти <input type='number' onInput={this.numCom} value={this.state.number} min={0} max={100}/>
                </form>
                <Comment id={number} key={number}/>
            </div>
        );
    }
    numCom=(e)=>{

        this.setState({number:e.target.value})
    }
}

export default AllComments;