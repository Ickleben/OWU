import React, {Component} from 'react';
import PostComponent from "./Posts/PostComponent";

class UiComponent extends Component {
    state ={posts:[],choosen:null}
    componentDidMount() {fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(postsApi => { this.setState({posts:postsApi})})
    }

    render() {
        let {posts,choosen}=this.state
        return (
            <div>
                {posts.map((value,id)=>(<PostComponent item={value} key={id}/>))}

            </div>
        );
    }
}

export default UiComponent;