import React, {Component} from 'react';
import SpeciesService from "../../service/species/SpeciesService";

class ChoosenSpecies extends Component {
    speciesService=new SpeciesService()
    state={choosenSpecies:null}
componentDidMount() {
        let {id} = this.props;
    console.log(id)
        this.speciesService.getChoosenSpecies(id).then(value => this.setState({choosenSpecies:value}))
}

    render() {
        let {choosenSpecies} = this.state;
        return (
            <div>
                {choosenSpecies && <h3>{choosenSpecies.name}---{choosenSpecies.classification}---{choosenSpecies.skin_colors}---{choosenSpecies.average_lifespan}---{choosenSpecies.language}---{choosenSpecies.designation}</h3>}
            </div>
        );
    }
}

export default ChoosenSpecies;