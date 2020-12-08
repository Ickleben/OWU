export class ComentService {
    url='https://jsonplaceholder.typicode.com/comments'
    getAllComents() {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => {
                return value;
            })
    }
}