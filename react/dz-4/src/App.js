import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllPosts from "./component/AllPosts";
class App extends Component {
    render() {
        return (
            <Router>
            <div>
              <Link to={'/posts'}>POSTS</Link>
                <Switch>
                    <Route path={'/posts'} render={()=>{
                        return <AllPosts/>
                    }}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;