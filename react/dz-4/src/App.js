import React, {Component} from 'react';
import AllUsers from "./component/AllUsers/AllUsers";
import Allpost from "./component/AllPost/Allpost";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class App extends Component {
  render() {
    return (
        <Router>
        <div>
            <div>
<Link to={'/users'}>
      USERS  </Link>
            </div>
            <div>
            <Link to={'/posts'}>
                POSTS  </Link>
            </div>
            <Switch>
<Route path={'/users'} component={AllUsers}/>
<Route path={'/posts'} component={Allpost}/>

            </Switch>
        </div>
            </Router>
    );
  }
}

export default App;
