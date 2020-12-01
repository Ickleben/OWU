import React, {Component} from 'react';

class CarsComponents extends Component {

    render() {
        let {item}=this.props
        console.log(item)
        return (
            <div>
                <h3>{item.model} - {item.color} - {item.year} - {item.power} </h3>

            </div>
        );
    }
}

export default CarsComponents;
