import React, {Component} from 'react';
import AllUsers from "./component/users/AllUsers";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllPosts from "./component/posts/AllPosts";
import AllComents from "./component/coments/AllComents";
import './App.css'
class App extends Component {
    render() {
        return (
            <Router>
            <div className={'divka'}>
                <Link to={'/users'} >
                    USERS
                </Link>{' '}

              <Link to={'/posts'}>
                  POSTS
              </Link>{' '}
                <Link to={'/coments'}>
                    COMENTS
                </Link>
              <Switch>
                  <Route path={'/users'} component={AllUsers}/>
                  <Route path={'/posts'} component={AllPosts}/>
                  <Route path={'/coments'} component={AllComents}/>

              </Switch>
            </div>
            </Router>
        );
    }
}

export default App;