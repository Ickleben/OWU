import React, {Component} from 'react';
import StarShipService from "../../service/starship/StarShipService";

class ChoosenStarShip extends Component {
    starShipService=new StarShipService()
    state={choosenStarShip:null}
    componentDidMount() {
        let {id} = this.props

            this.starShipService.getChoosenStarShip(id).then(value => this.setState({choosenStarShip: value}))

    }

    render() {

        let {choosenStarShip} = this.state;

        return (
            <div>
                {choosenStarShip && <h3>{choosenStarShip.name}---{choosenStarShip.model}---{choosenStarShip.manufacturer}</h3>}
            </div>
        );
    }
}

export default ChoosenStarShip;