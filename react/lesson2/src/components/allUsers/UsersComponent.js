import React, {Component} from 'react';
import './UsersComponent.css'
class UsersComponent extends Component {

hold(){
    let {key}=this.props
    console.log(key)
}


    render() {

        let {item,selectPost,holding} = this.props;


            return (

                <div>

                    {item.id}<span className={holding}>--------------</span>
                    <button onClick={() => selectPost(item.id)}>Hold</button>
                </div>

            );


    }

}

export default UsersComponent;
