import React, {Component} from 'react';
import PostComponent from "./Posts/PostComponent";

class UiComponent extends Component {
    state ={posts:[],choosenPost:null}
    componentDidMount() {fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(postsApi => { this.setState({posts:postsApi})})
    }

    selectPost =(id)=>{
        let choosenPost=this.state.posts.find(value => value.id===id)
        this.setState({choosenPost})
    }
    render() {
        let {posts,choosenPost}=this.state
        return (
            <div>
                {posts.map((value,id)=>(<PostComponent item={value} key={id} selectPost={this.selectPost}/> ))}
                <hr/>

                { choosenPost && <PostComponent item={choosenPost}/>}
            </div>
        );
    }
}

export default UiComponent;