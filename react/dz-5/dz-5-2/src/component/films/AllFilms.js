import React, {Component} from 'react';
import FilmsService from "../../service/films/FilmsService";
import Film from "./Film";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
import ChoosenFilm from "./ChoosenFilm";
class AllFilms extends Component {
    filmsService=new FilmsService()
    state={films:[]}
   async componentDidMount() {
        await this.filmsService.getAllFilms().then(value => this.setState({films:value.results}))
    }

    render() {
        let {films} = this.state;
        return (
            <div>
                {films.map(value => {
                    let idFilm=value.url.split('/')
                    return (<Film item={value} key={idFilm[5]} id={idFilm[5]}/>)})}
                    <hr/>
                    <Switch>

                        <Route path={'/films/:id'} render={(props)=>{
                            let {match:{params:{id}}}=props
                            return (<ChoosenFilm id={id} key={id}/>)
                        }}/>
                    </Switch>
            </div>
        );
    }
}

export default withRouter(AllFilms);