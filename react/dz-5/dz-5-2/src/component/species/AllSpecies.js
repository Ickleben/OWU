import React, {Component} from 'react';
import SpeciesService from "../../service/species/SpeciesService";
import Specie from "./Specie";
import {Route, Switch, withRouter} from "react-router-dom";
import ChoosenSpecies from "./ChoosenSpecies";

class AllSpecies extends Component {
    speciesService=new SpeciesService()
    state={species:[]}
   async componentDidMount() {
       await this.speciesService.getAllSpecies().then(value => this.setState({species:value.results}))
    }

    render() {
        let {species} = this.state;
        return (
            <div>
                {species.map(value => {
                    let idSpecie=value.url.split('/')
                    return (<Specie item={value} key={idSpecie[5]} id={idSpecie[5]}/>)})}
                    <hr/>
<Switch>
    <Route path={'/species/:id'} render={(props)=>{
        let {match:{params:{id}}}=props
        return(<ChoosenSpecies id={id} key={id}/>)}}/>
</Switch>
            </div>
        );
    }
}

export default withRouter(AllSpecies);