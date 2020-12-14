import React, {Component} from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllUsers from "./component/users/AllUsers";
import Allbank from "./component/Bank/Allbank";
class App extends Component {
    render() {
        return (
            <Router>
            <div className={'header'}>
                <div className={'logo'}><img  src=" https://turbologo.ru/blog/wp-content/uploads/2020/02/clan-logo-cover-1280x720.png" alt="" height={'55px'}/></div>
                <Link className={'link'} to={'/'}>Home </Link>
                <Link className={'link'} to={'/users'}>Users </Link>
                <Link className={'link'} to={'/exchange'}>
                    Exchange </Link>

            </div>
                <Switch>
                    <Route path={'/users'} render={()=>{return(<AllUsers/>)}}/>
                    <Route path={'/exchange'} render={()=>{return(<Allbank/>)}}/>

                </Switch>
            </Router>

        );
    }
}

export default App;