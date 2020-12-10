export default class StarShipService{
    url='https://swapi.dev/api/starships'

    async getAllStarShip(){
        return await fetch(`${this.url}/`)
            .then(value => value.json())

    }
    async getChoosenStarShip(id){
        return await fetch(`${this.url}/${id}/`)
            .then(value => value.json())

    }
}
