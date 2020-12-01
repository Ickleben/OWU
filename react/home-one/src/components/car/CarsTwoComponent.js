import React, {Component} from 'react';
import '/Users/User/Desktop/Octum/react/home-one/src/App.css'
class CarsTwoComponent extends Component {
    render() {
        let {item}=this.props;
        return (
            <div className='divkaTwo'>
               <h3 className='headerTwo'> {item.producer}-{item.model}-{item.year}-{item.color}-{item.type}-{item.engine}-{item.volume}-{item.power}</h3>
            </div>
        );
    }
}

export default CarsTwoComponent;