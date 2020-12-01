import React, {Component} from 'react';

class CarsTwoComponents extends Component {
    render() {
        let {caTwo}=this.props
        return (
            <div>
               <h3>{caTwo.model} -{caTwo.year} -{caTwo.horses} - {caTwo.color}</h3>
            </div>
        );
    }
}

export default CarsTwoComponents;