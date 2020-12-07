import React, {Component} from 'react';

class WomenComponent extends Component {
    render() {
        let {arr}=this.props
        return (
            <div>

               Номер {arr.id} Імя {arr.name} Вік {arr.age}
            </div>
        );
    }
}

export default WomenComponent;