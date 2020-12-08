export class ComentService {
    url='https://jsonplaceholder.typicode.com/comments'
    getAllComents() {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => {
                return value;
            })
    }
    getPostById(id) {
        return fetch(`${this.url}?postId=${id}`)
            .then(value => value.json())
            .then(value => {
                return value;
            })
    }
}