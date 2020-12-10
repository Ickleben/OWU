export default class PlanetsService{
    url='https://swapi.dev/api/planets'
 async getAllPlanets(){
        return await fetch(`${this.url}/`)
            .then(value => value.json())

  }
    async getChoosenPlanet(id){
        return await fetch(`${this.url}/${id}/`)
            .then(value => value.json())

    }
}