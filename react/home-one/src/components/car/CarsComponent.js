import React, {Component} from 'react';
import '/Users/User/Desktop/Octum/react/home-one/src/App.css'
class CarsComponent extends Component {
    render() {
        let {car}=this.props;
        return (
            <div className='divka'>
               <h3 className='header'> {car.model}-{car.year}-{car.color}-{car.power}</h3>
            </div>
        );
    }
}

export default CarsComponent;