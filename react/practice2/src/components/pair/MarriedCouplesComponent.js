import React, {Component} from 'react';

class MarriedCouplesComponent extends Component {
    render() {
        let {pairArr}=this.props
        return (
            <div>
                Номер {pairArr.id} ,Імя {pairArr.name} ,вік {pairArr.age},АЙДІ жінки {pairArr.wife_id}, Дружина -Номер{pairArr.wifeee.id} ,Імя {pairArr.wifeee.name} Вік {pairArr.wifeee.age} АЙДІ чоловіка{pairArr.wifeee.husband_id}
            </div>
        );
    }
}

export default MarriedCouplesComponent;