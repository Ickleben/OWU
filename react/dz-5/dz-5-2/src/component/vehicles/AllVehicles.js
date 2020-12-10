import React, {Component} from 'react';
import VehiclesService from "../../service/vehicles/VehiclesService";
import Vehicle from "./Vehicle";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
import ChoosenVehicle from "./ChoosenVehicle";
class AllVehicles extends Component {
    vehiclesService=new VehiclesService()
    state={vehicles:[]}
       async componentDidMount(){
       await this.vehiclesService.getAllVehicles().then(value => this.setState({vehicles:value.results}))
    }

    render() {
        let {vehicles} = this.state;
        console.log(vehicles)
        return (
            <div>
                {vehicles.map(value => {
                    let idVehicle=value.url.split('/')
                    console.log(idVehicle[5])
                    return <Vehicle item={value} key={idVehicle[5]} id={idVehicle[5]}/>})}
<Switch>
    <div style={{border: 'solid'}}>


                       <Route path={'/vehicles/:id'} render={(props)=>{
                            let {match:{params:{id}}}=props
                            return <ChoosenVehicle id={id} key={id}/>}}/>
    </div>
</Switch>
            </div>
        );
    }
}

export default withRouter(AllVehicles);