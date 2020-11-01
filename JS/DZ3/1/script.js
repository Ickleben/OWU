// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу


// const example = {
//     dog: {
//         name: 'Rex',
//         age: 9,
//         color: 'brown',
//         sex: 'boy',
//         children: null
//     },
//     man: {
//         name: 'max',
//         age: 20,
//         sex: 'boy',
//         children: 1,
//         relationShip: null
//     },
//     car: {
//         name: 'GiGi',
//         age: 30,
//         color: 'black',
//         mark: 'Volkswagen',
//         turboKit: undefined,
//     },
//     apartment: {
//         rooms: 3,
//         floor: 8,
//         price: '80,000$',
//         neighbours: 'Адекватні',
//         parkPlace: 1,
//     },
//     book: {
//         pages: 888,
//         author: 'Bohdan',
//         color: 'red',
//         genre: 'fantasy',
//         eBook: null,
//
//     }
//
// }
// console.log(example)
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// const dogs=['beagle','boxer','bulldog','mastiff','pug0']
// const man=['Andrii','Yurii','Max','Bohdan','Kyrylo']
// const cars=['Volkswagen','BMW','Vaz','Kia','Audi']
// console.log(dogs);
// console.log(man);
// console.log(cars);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
//
// let house = {
//     rooms: 3,
//     floor: 2,
//     price: '80,000$',
//     neighbours: {
//         first: 'Smith',
//         second: 'Ivanov'
//     },
//     garage: ['big', 'pit', 'instrumets']
// }
// console.log(house)
// let driver={
//     name:'Max',
//     age:35,
//     work:['bus','taxi','VW tester'],
//     cars:{
//         Volkswagen:'Golf2',
//         BMW:'5 series',
//         Kia:'Sportage'
//     },
//     expirience:'12years'
// }
// console.log(driver);
// let toy={
//     name:'Superman',
//     color:['red','blue','white','yellow'],
//     size:{
//         head:'5см',
//         chest:'10см',
//         leg:'2см'
//     },
//     childrenAge:'+3',
//     weight:'300g'
// }
// console.log(toy);
// let table={
//     name:'writing table',
//     size: {
//         width:'138,5см',
//         high:'74см',
//         depth:'63,5см'
//     },
//     material:['Вільха','Горіх','Дуб самоа'],
//     madeIn:'Ua',
//     compania:'Мебель-Сервис'
// }
// console.log(table);
// let bag={
//     color: ['red','green','black','brown'],
//     cost:{
//         xs:'5$',
//         s:'10$',
//         m:'15$',
//         l:'20',
//         xxl:'100$'
//     },
//     material: 'leather',
//     name:'Dragon leather',
//     compania: 'Stefano'
// }
// console.log(bag);
// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// // - статус Андрія
// console.log(users [7].status);
// - статус Максима
// console.log(users [10].status);
// - ім'я передостаннього об'єкту
// console.log(users [9].name);
// - ім'я третього об'єкта
// console.log(users [2].name);
// - вік Олега
// console.log(users [6].age);
// - вік Олі
// console.log(users [3].age);
// console.log(users [9].age);
// - вік + ім'я 5го об'єкта
// console.log(users [4].name);
// console.log(users [4].age);
// - вік + сатус Анни
// console.log(users [5].age);
// console.log(users [5].status);
//
