export default class ChoosenVehicle{
    url='https://swapi.dev/api/vehicles/'
    async getAllVehicles() {
        return await fetch(this.url)
            .then(value => value.json())
    }
    async getChoosenVehicle(id) {
        return await fetch(`${this.url}${id}/`)
            .then(value => value.json())
    }
}