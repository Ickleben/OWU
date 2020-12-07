import React, {Component} from 'react';
import ManComponent from "./ManComponent";
import MarriedCoupleComponent from "../pair/MarriedCoupleComponent";
import App from "../../App";

class MansComponent extends Component {


    // example(man){
    //     {man.map(((value, index) => {
    //
    //         return <MarriedCoupleComponent item={value} key={index}/>
    //     }))}
    // }
    render() {
      let {man}=this.props
        return (
            <div>
                {man.map(((value, index) => {

                    return <ManComponent item={value} key={index}/>
                }))}

            </div>
        );
    }
}

export default MansComponent;