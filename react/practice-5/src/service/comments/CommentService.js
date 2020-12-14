export default class CommentService{
    url='https://jsonplaceholder.typicode.com/comments?postId='
    async getAllComments(id){
return await fetch(`${this.url}${id}`)
    .then(value => value.json())
    }
}