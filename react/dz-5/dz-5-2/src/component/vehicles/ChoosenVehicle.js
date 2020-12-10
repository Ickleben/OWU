import React, {Component} from 'react';
import VehiclesService from "../../service/vehicles/VehiclesService";

class ChoosenVehicle extends Component {
    vehiclesService=new VehiclesService()
    state={choosenVehicle:null}
   async componentDidMount() {
        let {id} = this.props;
        await this.vehiclesService.getChoosenVehicle(id).then(value => this.setState({choosenVehicle:value}))
    }

    render() {
        let {choosenVehicle} = this.state;
        return (
            <div>
                {choosenVehicle && <h4>{choosenVehicle.name}---{choosenVehicle.model}---{choosenVehicle.manufacturer}----{choosenVehicle.cost_in_credits}</h4>}
            </div>
        );
    }
}

export default ChoosenVehicle;