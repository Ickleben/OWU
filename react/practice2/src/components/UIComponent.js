import React, {Component} from 'react';
import WomensComponent from "./women/WomensComponent";
import MansComponent from "./man/MansComponent";
import MarriedCoupleComponent from "./pair/MarriedCoupleComponent";
import './UIComponent.css'

class UiComponent extends Component {
    state={ women:[{id:1,name: 'anya', age: 29, husband_id:5},
            {id:2,name: 'alina', age: 15, husband_id: 3},
            {id:3,name: 'ira', age: 31, husband_id: 2},
            {id:4,name: 'diana', age: 22, husband_id: 4},
            {id:5,name: 'yulia', age: 21, husband_id: 1}],man:[{id:1,name: 'andrey', age: 50, wife_id: 3},
            {id:2,name: 'viktor', age: 25, wife_id: 4},
            {id:3,name: 'nazar', age: 39, wife_id: 5},
            {id:4,name: 'sasha', age: 18, wife_id: 1},
            {id:5,name: 'yura', age: 41, wife_id: 2}],}

        render() {
        let {women,man}=this.state
        return (
            <div className='body'>
                <div className='one'>
                    Жінки
                <WomensComponent women={women}/>
                </div>

            <div className='two'>
                Чоловіки
                <MansComponent man={man}/>
            </div>

                <div className='three' >
                    Пари
                   <MarriedCoupleComponent women={women} man={man}/>

                </div>

            </div>
        );
    }
}

export default UiComponent;