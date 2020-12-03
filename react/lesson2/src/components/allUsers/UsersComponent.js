import React, {Component} from 'react';
import './UsersComponent.css'
class UsersComponent extends Component {


    render() {

        let {item, selectPost, choosenPost} = this.props;


            let holding = 'one'
            if (choosenPost != null&&choosenPost.id == item.id) {
                holding ='two'
            }else {holding='one'}

            return (

                <div>

                   <span> {item.id}</span><span className={holding}>{item.body}</span>
                    <button onClick={() => selectPost(item.id)}>Hold</button>

                </div>

            );


        }

    }

export default UsersComponent;
