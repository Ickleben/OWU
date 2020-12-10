import React, {Component} from 'react';
import FilmsService from "../../service/films/FilmsService";

class ChoosenFilm extends Component {
    filmsService=new FilmsService()
    state={choosenFilm:null}
    componentDidMount() {
        let {id}=this.props
        this.filmsService.getChoosenFilm(id).then(value => this.setState({choosenFilm:value}))
    }

    render() {
        let {choosenFilm} = this.state;
        return (
            <div>
                {choosenFilm && <h3>{choosenFilm.title}---  {choosenFilm.episode_id}---  {choosenFilm.opening_crawl}---  {choosenFilm.director}---  {choosenFilm.producer}---  {choosenFilm.release_date}</h3>}

            </div>
        );
    }
}

export default ChoosenFilm;