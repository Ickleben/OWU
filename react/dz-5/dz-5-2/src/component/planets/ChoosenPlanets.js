import React, {Component} from 'react';
import PlanetsService from "../../service/planets/PlanetsService";

class ChoosenPlanets extends Component {
planetsService=new PlanetsService()
    state={choosenPlanet:null}
    componentDidMount() {
    let {id} = this.props;
    this.planetsService.getChoosenPlanet(id).then(value => this.setState({choosenPlanet:value}))
    }

    render() {
        let {choosenPlanet} = this.state;
    return (
            <div>
                {choosenPlanet && <h3>{choosenPlanet.name}-{choosenPlanet.rotation_period}-{choosenPlanet.climate}-{choosenPlanet.gravity}-{choosenPlanet.terrain}-{choosenPlanet.population}</h3> }
            </div>
        );
    }
}

export default ChoosenPlanets;