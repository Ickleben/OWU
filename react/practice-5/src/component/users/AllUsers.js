import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
    withRouter,
  Link
} from "react-router-dom";
import UserService from "../../service/users/UserService";
import User from "./User";
import ChoosenUsers from "./ChoosenUsers";
import './Css.css'
import Posts from "./Posts";
import PostService from "../../service/post/PostService";
class AllUsers extends Component {

    userService= new UserService();



    state={users:[],choosenPost:null}

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users:value}))
    }
    selectPost =(id)=>{
        let choosenPost=this.state.users.find(value => value.id===id)
        this.setState({choosenPost})
    }

    render() {
        let {users,choosenPost} = this.state;

let{match:{url}}=this.props
        return (
            <div >
                <div className={'center'}>
                <div className={'users'}>
                {users.map(value => {
                    return (<User item={value} key={value.id} selectPost={this.selectPost}/>)})}
                </div>
                    <div className={'choosen'}>
                        { choosenPost && <ChoosenUsers choosenUsers={choosenPost}/>}
                        </div>
                </div>
                        <Switch>

                            <div className={'post'}>

                            <Route path={`/users/:id`} render={(props)=>{
                                let {match:{params:{id}}}=props
                                return (<Posts id={id} key={id}/>)}}/>

                    </div>
{/*<div>*/}
{/*
{/*</div>*/}
                        </Switch>



                <div>


                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);
// getPosts(id){
//     let {users}=this.state
//
//     let choosenPost=users.find(value => value.id===id)
//     this.setState({choosenPost})
//     // console.log(id)
//     // this.postService.getAllPosts(id).then(value => this.setState({posts:value}))
// }