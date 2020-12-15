import React, {Component} from 'react';
import AllUsers from "./component/user/AllUsers";
import AllPost from "./component/post/AllPost";
import './App.css'
import AllComments from "./component/comments/AllComments";
class App extends Component {
    render() {
        return (
            <div>
            <div className='users'> <AllUsers/></div>
              <div>  <AllPost/></div>
<div className='commnet'><AllComments/></div>
    </div>
        );
    }
}

export default App;