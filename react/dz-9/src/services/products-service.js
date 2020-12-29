export class ProductsService {
constructor(httpClient) {
    this.httpClient=httpClient
    this.baseUrl='https://fakestoreapi.com/products'
}
productsGet(){
    return this.httpClient.get(this.baseUrl)
}
}