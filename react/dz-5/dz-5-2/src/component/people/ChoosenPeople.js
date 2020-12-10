import React, {Component} from 'react';
import PeopleService from "../../service/people/PeopleService";

class ChoosenPeople extends Component {
    peopleService=new PeopleService()
state={choosenPeople:null}
componentDidMount() {
        let {id} = this.props;
        this.peopleService.getChoosenPeople(id).then(value => this.setState({choosenPeople:value}))

}

    render() {
        let {choosenPeople} = this.state;

        return (
            <div>
                {choosenPeople && <h3>{choosenPeople.name}-{choosenPeople.hair_color}-{choosenPeople.height}-{choosenPeople.mass}-{choosenPeople.gender}</h3>}
            </div>
        );
    }
}

export default ChoosenPeople;