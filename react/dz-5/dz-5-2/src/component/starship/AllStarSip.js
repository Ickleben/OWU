import React, {Component} from 'react';
import StarShipService from "../../service/starship/StarShipService";
import StartShip from "./StartShip";
import {Route} from "react-router-dom";
import ChoosenStarShip from "./ChoosenStarShip";

class AllStarSip extends Component {
    starShipService=new StarShipService()
    state={starship:[]}
    async componentDidMount() {
       await this.starShipService.getAllStarShip().then(value => this.setState({starship:value.results}))

    }

    render() {
        let {starship} = this.state;
        return (
            <div>
                {starship.map(value => {
                    let urlId=value.url.split('/')
                    return <StartShip item={value} key={urlId[5]} id={urlId[5]}/>})}
                <hr/>
                <Route path={'/starships/:id'} render={(props)=>{
                    let {match:{params:{id}}}=props
                    return(<ChoosenStarShip id={id} key={id} />)}}/>
            </div>
        );
    }
}

export default AllStarSip;