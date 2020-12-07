import React, {Component} from 'react';

class ManComponent extends Component {

    render() {
        let {item}=this.props
        return (
            <div>

                Номер {item.id} Імя {item.name} Вік {item.age}
            </div>
        );
    }
}

export default ManComponent;