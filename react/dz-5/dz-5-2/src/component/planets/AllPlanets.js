import React, {Component} from 'react';
import PlanetsService from "../../service/planets/PlanetsService";
import Planets from "./Planets";
import {Route, withRouter} from "react-router-dom";
import ChoosenPlanets from "./ChoosenPlanets";

class AllPlanets extends Component {
planetsService=new PlanetsService()
    state={planets:[]}
   async componentDidMount() {
await this.planetsService.getAllPlanets().then(value => this.setState({planets:value.results}))
    }

    render() {
    let {planets} = this.state;
        console.log(planets)
        return (
            <div>
                {planets.map( (value,index)=> {return (<Planets item={value} key={index} id={index+1}  />)})}
<hr/>
<Route path={'/planets/:id'} render={(props)=>{
    let {match:{params:{id}}}=props
    return(<ChoosenPlanets id={id} key={id}/>)}}/>
            </div>
        );
    }
}

export default withRouter(AllPlanets);