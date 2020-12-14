export default class BankService{
    url='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    async getAllExchange(){
        return await fetch(this.url)
            .then(value => value.json())
    }
}