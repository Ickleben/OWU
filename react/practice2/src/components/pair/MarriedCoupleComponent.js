import React, {Component} from 'react';
import MarriedCouplesComponent from "./MarriedCouplesComponent";
import WomenComponent from "../women/WomenComponent";

class MarriedCoupleComponent extends Component {

    selectPost (blabla) {

        let {man,women}=this.props



        man.forEach(element =>
            women.forEach(value =>
                {
                    if (element.wife_id === value.husband_id) {
                        element.wifeee=value
                        blabla.push(element )
                        console.log(element)
                    }

                }
            )
        )
        return blabla
    }

    render() {
        let blabla=[]
this.selectPost(blabla)
        return (
            <div>
                {blabla.map(((value, index) => {

                    return <MarriedCouplesComponent pairArr={value} key={index}/>
                }))}
            </div>
        );
    }
}

export default MarriedCoupleComponent;