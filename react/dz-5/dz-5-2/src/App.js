import React, {Component} from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPlanets from "./component/planets/AllPlanets";
import AllStarSip from "./component/starship/AllStarSip";
import AllVehicles from "./component/vehicles/AllVehicles";
import AllPeople from "./component/people/AllPeople";
import AllFilms from "./component/films/AllFilms";
import AllSpecies from "./component/species/AllSpecies";
class App extends Component {
    render() {
        return (
            <Router>
            <div >
                <h1 className={'body'}>STAR WARS</h1>
                <div className={'header'}>
              <Link className={'Links'} to={'/planets'}>PLANETS </Link>
              <Link className={'Links'} to={'/starships'}>STARSHIPS </Link>
              <Link className={'Links'} to={'/vehicles'}>VEHICLES </Link>
              <Link className={'Links'} to={'/people'}>PEOPLE </Link>
              <Link className={'Links'} to={'/films'}>FILMS </Link>
              <Link className={'Links'} to={'/species'}>SPECIES </Link>

                </div>
                <div className={'center'}>
              <Switch>
                <Route path={'/planets'} render={()=>{return(<AllPlanets/>)}}/>
                <Route path={'/starships'} render={()=>{return(<AllStarSip/>)}}/>
                <Route path={'/vehicles'} render={()=>{return(<AllVehicles/>)}}/>
                <Route path={'/people'} render={()=>{return(<AllPeople/>)}}/>
                <Route path={'/films'} render={()=>{return(<AllFilms/>)}}/>
                <Route path={'/species'} render={()=>{return(<AllSpecies/>)}}/>

              </Switch>
                </div>

            </div>
            </Router>
        );
    }
}

export default App;