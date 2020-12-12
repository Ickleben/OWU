import React, {Component} from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllUsers from "./component/users/AllUsers";
class App extends Component {
    render() {
        return (
            <Router>
            <div className={'App-header'}>
                <div className={'logo'}><img src=" https://turbologo.ru/blog/wp-content/uploads/2020/02/clan-logo-cover-1280x720.png" alt="" height={'55px'}/></div>
                <Link className={'App-link'} to={'/users'}>Users </Link>
                <Link className={'App-link'} to={'/'}>Home </Link>

            </div>
                <Switch>
                    <Route path={'/users'} render={()=>{return(<AllUsers/>)}}/>

                </Switch>
            </Router>

        );
    }
}

export default App;