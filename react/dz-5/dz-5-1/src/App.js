import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllComments from "./component/AllComments";
class App extends Component {
    render() {
        return (
            <Router>
            <div>
              <Link to={'/comments'}>COMMENTS</Link>
                <Switch>
                    <Route path={'/comments'} render={() => {

                        return (<AllComments/>)
                    }

                    }/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;