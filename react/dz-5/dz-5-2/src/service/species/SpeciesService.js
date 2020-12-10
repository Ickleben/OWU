export default class SpeciesService{
    url='https://swapi.dev/api/species/'
   async getAllSpecies(){
        return await fetch(this.url)
            .then(value => value.json())
    }
    async getChoosenSpecies(id){
        return await fetch(`${this.url}${id}/`)
            .then(value => value.json())
    }
}