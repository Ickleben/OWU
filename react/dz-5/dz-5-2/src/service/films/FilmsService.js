export default class FilmsService{
    url='https://swapi.dev/api/films/'
    async getAllFilms(){
        return await fetch(this.url)
            .then(value => value.json())
    }
    async getChoosenFilm(id){
        return await fetch(`${this.url}${id}/`)
            .then(value => value.json())
    }
}