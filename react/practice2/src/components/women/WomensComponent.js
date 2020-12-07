import React, {Component} from 'react';
import WomenComponent from "./WomenComponent";


class WomensComponent extends Component {



    render() {
       let {women}=this.props

        return (
            <div>
                {women.map(((value, index) => {

                    return <WomenComponent arr={value} key={index}/>
                }))}

            </div>
        );
    }
}

export default WomensComponent;