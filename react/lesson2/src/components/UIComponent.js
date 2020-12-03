import React, {Component} from 'react';
import UsersComponent from "./allUsers/UsersComponent";

class UiComponent extends Component {
    state={posts:[],choosenPost:null};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(postsApi => {
                this.setState({posts:postsApi})

            })
    }


    selectPost =(id)=>{
        let choosenPost=this.state.posts.find(value => value.id===id)
        this.setState({choosenPost})

    }

    render() {
        let {posts,choosenPost,holding}=this.state
        return (
            <div>
                <h2 >Posts</h2>
                {posts.map((value => ( <UsersComponent item={value} key={value.id} selectPost={this.selectPost} holding={holding} choosenPost={choosenPost}/>)
                ))}
<hr/>

            </div>
        );
    }
}

export default UiComponent;