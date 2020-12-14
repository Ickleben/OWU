import React, {Component} from 'react';
import './Css.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
    withRouter,
  Link
} from "react-router-dom";
import Commnets from "./Commnets";
class Post extends Component {
    render() {
        let {item,match:{url}} = this.props;
        console.log(url)
        return (
            <div className={'AllPostes'}>

                <div className='Post'>
                    <div className='Post-number'>{item.id}.</div> <div className='post-title'>{item.title}</div><div>{item.body}</div>

                <br/>
                </div>
                <div>
                <Link className='link-comments' to={`${url}/${item.id}`}>Comments</Link>
                </div>
                <Switch>
                <Route path={`${url}/${item.id}`} render={(props)=>{

                    return(<Commnets id={item.id} key={item.id}/>)}}/>
            </Switch>
            </div>
        );
    }
}

export default withRouter(Post);