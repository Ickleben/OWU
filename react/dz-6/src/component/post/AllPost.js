import React, {Component} from 'react';
import Post from "./Post";

class AllPost extends Component {
    formPost= new React.createRef
    state={number:''}
    render() {
        let {number} = this.state;

        return (
            <div>
                <form ref={this.formPost}>
                    Виберіть до якого Юзера вам необхідні пости <input type='number' onInput={this.numPost} value={this.state.number} min={0} max={10}/>
                </form>
                <Post number={number} key={number}/>
            </div>
        );
    }
    numPost=(e)=>{

        this.setState({number:e.target.value})
    }
}

export default AllPost;