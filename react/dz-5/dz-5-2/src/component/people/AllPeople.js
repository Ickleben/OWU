import React, {Component} from 'react';
import People from "./People";
import PeopleService from "../../service/people/PeopleService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
import ChoosenPeople from "./ChoosenPeople";
class AllPeople extends Component {
    peopleService=new PeopleService()
    state={people:[]}
     async componentDidMount() {
      await this.peopleService.getAllPeople().then(value => this.setState({people:value.results}))
    }

    render() {
        let {people} = this.state;
        return (
            <div>
                {people.map(value => {
                    let idPeople=value.url.split('/')
                    return <People item={value} id={idPeople[5]} key={idPeople[5]}/>})}
                    <hr/>
                    <Switch>
                        <Route path={`/people/:id`} render={(props)=>{
                            let {match:{params:{id}}}=props
                            return(<ChoosenPeople id={id} key={id} />)}}/>
                    </Switch>
            </div>
        );
    }
}

export default withRouter(AllPeople);