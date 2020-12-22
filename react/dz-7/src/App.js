import React, {Component} from 'react';
import Users from "./component/Users";
import Post from "./component/post/Post";
import Menu from "./component/menu/Menu";

class App extends Component {
    render() {
        return (
            <div>
              <Users/>
              <Post/>
              <Menu/>
            </div>
        );
    }
}

export default App;