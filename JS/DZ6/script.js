// - создать массив с 20 числами.
// let num = [1, 3, 98, 4, 5, 6, 7, 50, 9, 10, 23, 12, 13, 11, 15, 16, 120, 18, 130, 20,]
// -- при помощи метода sort и колбека  отсортировать массив.

// let sortNum =num.sort((a,b)=>{
// return a-b;})
// console.log(sortNum);
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sortNumMinus =num.sort((a,b)=>{
//     return b-a;})
// console.log(sortNumMinus);
// -- при помощи filter получить числа кратные 3

// let sortNumMin = num.filter(value => value % 3===0 );
//
// console.log(sortNumMin);

// -- при помощи filter получить числа кратные 10
// let sortNumMin = num.filter(value => value % 10===0 );
//
// console.log(sortNumMin);
// -- перебрать (проитерировать) массив при помощи foreach()
// let forEachNum = num.forEach((value, index)=>{
// console.log(value,index)
// })
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let numMap = num.map(value => {
// value= value *3
//     return value
// })
// console.log(numMap);
//     - создать массив со словами на 15-20 элементов.
// let str = ['name', 'GiGi', 'Anna', 'Solya', 'Brabus', 'AMG', 'OWU', 'Barbie', 'Brokol', 'Maria', 'Volkswagen', 'Bmw', 'Olena', 'Apple', 'Banana']
// -- отсортировать его по алфавиту в восходящем порядке.
// let sortNames = str.sort((a,b)=>{
// if (a>b){
//     return  1
// }else {
//     return -1
// }
//
// })
// console.log(sortNames);
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortNamesMinus = str.sort((a,b)=>{
//     if (a>b){
//         return  -1
//     }else {
//         return 1
//     }
//
// })
// console.log(sortNamesMinus);
// -- отфильтровать слова длиной менее 4х символов
// let strFour = str.filter(value => value.length <= 4);
//
// console.log(strFour);


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let strMap = str.map(value => {
// value= value + '!'
//     return value
// })
// console.log(strMap);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [{name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let usersSort = users.sort((a, b) => {
//   return a.age - b.age
// });
// console.log(usersSort);
// _______________________________
// let usersSort = users.sort((a, b) => {
//   return b.age-a.age
// });
// console.log(usersSort);
// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let usersSort = users.sort((a, b) => {
//   return a.name.length - b.name.length
// });
// console.log(usersSort);
// // _______________________________
// let usersSort = users.sort((a, b) => {
//     return b.name.length-a.name.length
// });
// console.log(usersSort);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let newArr=[]
// users.map((user,index) => {
//
//    newArr.push(users[index])
//     user.id = index;
//   // return user;
// });
// console.log(newArr);
// console.log(users)
// МУТАЦІЯ ВИПРАВИТИ!!!!!!!!

// -- наисать функцию калькулятора с 2мя числами и колбеком
// let a = +prompt('перше число')
// let b = +prompt('друге число')
// let s = prompt('додавання (+),віднімання(-),множення(*),ділення(/)')
// let arr=[a,b,s]
// let sum =arr.map((value) =>  {
//     if (value=='+'){
//         return a+b
//     }if (value=='-'){
//         return a-b
//     }if (value=='*'){
//         return a*b
//     }if (value=='/'){
//         return a/b
//     }
// })
// console.log(arr);
// console.log(sum);
// console.log(sum[2]);
// alert(sum[2]);
// -- наисать функцию калькулятора с 3мя числами и колбеком
// let a = +prompt('перше число')
// let b = +prompt('друге число')
// let c = +prompt('третє число')
// let s = prompt('додавання (+),віднімання(-),множення(*),ділення(/)')
// let arr=[a,b,c,s]
// let sum =arr.map((value) =>  {
//     if (value=='+'){
//         return a+b+c
//     }if (value=='-'){
//         return a-b-c
//     }if (value=='*'){
//         return a*b*c
//     }if (value=='/'){
//         return a/b/c
//     }
// })
// console.log(arr);
// console.log(sum);
// console.log(sum[3]);
// alert('Відповідь:'+sum[3]);
// let cars = [{
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400
// }, {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250
// }, {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300
// }, {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140
// }, {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200
// }, {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 4,
//     power: 165
// },
//     {producer: "bmw",
//         model: "115",
//         year: 2013,
//         color: "red",
//         type: "hachback",
//         engine: "f15",
//         volume: 1.5,
//         power: 120},
//     {producer: "bmw",
//         model: "315",
//         year: 2010,
//         color: "white",
//         type: "sedan",
//         engine: "f15",
//         volume: 1.5,
//         power: 120},
//     {producer: "bmw",
//         model: "650",
//         year: 2009,
//         color: "black",
//         type: "coupe",
//         engine: "f60",
//         volume: 6,
//         power: 350},
//     {producer: "bmw",
//         model: "320",
//         year: 2012,
//         color: "red",
//         type: "sedan",
//         engine: "f20",
//         volume: 2,
//         power: 180},
//     {
//         producer: "mercedes",
//         model: "e200",
//         year: 1990,
//         color: "silver",
//         type: "sedan",
//         engine: "eng200",
//         volume: 2,
//         power: 180
//     }, {
//         producer: "mercedes",
//         model: "e63",
//         year: 2017,
//         color: "yellow",
//         type: "sedan",
//         engine: "amg63",
//         volume: 3,
//         power: 400
//     }, {
//         producer: "mercedes",
//         model: "c250",
//         year: 2017,
//         color: "red",
//         type: "sedan",
//         engine: "eng25",
//         volume: 5,
//         power: 230
//     }];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let engineV = cars.filter(value => value.volume < 3
// )
// console.log(engineV);
// - двигун = 2л
// let engineVtwo = cars.filter(value => value.volume==2)
// console.log(engineVtwo);

// - виробник мерс
// let mers = cars.filter(value => value.producer=='mercedes')
// console.log(mers);
// - двигун більше 3х літрів + виробник мерседес
// let mersVThre = cars.filter(value =>value.producer=='mercedes' && value.volume>3 )
// console.log(mersVThre);
// - двигун більше 3х літрів + виробник субару
// let subaruVThree = cars.filter(value => value.producer=='subaru'&&value.volume>3)
// console.log(subaruVThree);
// - сили більше ніж 300
// let powerThre = cars.filter(value => value.power==300)
// console.log(powerThre);
// - сили більше ніж 300 + виробник субару
// let subaruThreePower=cars.filter(value => value.producer=='subaru'&&value.power>300)
// console.log(subaruThreePower);
// - мотор серіі ej
// let engineEj = cars.filter(value => value.engine.includes('ej'))
// console.log(engineEj);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let subaruEjThree = cars.filter(value => value.power>300&&value.producer=='subaru'&&value.engine.includes('ej'))
// console.log(subaruEjThree);
// - двигун меньше 3х літрів + виробник мерседес
// let mersTwo=cars.filter(value =>value.producer=='mercedes'&&value.volume<3 )
// console.log(mersTwo);
// - двигун більше 2л + сили більше 250
// let volumePower=cars.filter(value =>value.volume>2&&value.power>250 )
// console.log(volumePower);
// - сили більше 250  + виробник бмв
// let bmwPower =cars.filter(value => value.producer=='bmw'&&value.power>250)
// console.log(bmwPower);

// - взять слдующий массив
// let usersWithAddress = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', street: 'Shevchenko', number: 16}
// }, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'Lviv', street: 'Shevchenko', number: 1}
// },
//     {
//         id: 3,
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 121}
//     }, {
//         id: 4,
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 90}
//     },
//     {
//         id: 5,
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 115}
//     }, {
//         id: 6,
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 2}
//     },
//     {
//         id: 7,
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 22}
//     }, {
//         id: 8,
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 43}
//     },
//     {
//         id: 9,
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 12}
//     }, {
//         id: 10,
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', street: 'Shevchenko', number: 16}
//     },
//     {
//         id: 11,
//         name: 'max',
//         age: 31,
//         status: true,
//         address: {city: 'Lviv', street: 'Ambasador', number: 121}
//     }];
// -- отсортировать его по id пользователей
// let idSort =usersWithAddress.sort((a,b)=>a.id-b.id
// )
// console.log(idSort);
// -- отсортировать его по id пользователей в обратном опрядке
// let idSortLess=usersWithAddress.sort((a,b)=>b.id - a.id
// )
// console.log(idSortLess);
// -- отсортировать его по возрасту пользователей
// let ageMore =usersWithAddress.sort((a, b) => a.age - b.age
// )
// console.log(ageMore);
// -- отсортировать его по возрасту пользователей в обратном порядке
// let ageLess = usersWithAddress.sort((a, b) => b.age-a.age
// )
// console.log(ageLess);
// -- отсортировать его по имени пользователей
// let nameSort = usersWithAddress.sort((a, b) => {
//     if (a.name>b.name){
//         return 1
//     }
//     return -1
// })
// console.log(nameSort);
// -- отсортировать его по имени пользователей в обратном порядке
// let namesortLess=usersWithAddress.sort((a, b) => {
//     if (b.name>a.name){
//         return 1
//     }return -1
// })
// console.log(namesortLess);
// -- отсортировать его по названию улицы  в алфавитном порядке
// let adressSort =usersWithAddress.sort((a, b) => {
//     if (a.address.street>b.address.street){
//         return 1
//     }return-1
// })
// console.log(adressSort);
// -- отсортировать его по номеру дома по возрастанию
// let numberHouse =usersWithAddress.sort((a, b) => a.address.number-b.address.number
// )
// console.log(numberHouse);
// -- отфильтровать (оставить) тех кто младше 30
// let ageFilter=usersWithAddress.filter(value =>value.age<30 )
// console.log(ageFilter);
// -- отфильтровать (оставить) тех у кого отрицательный статус
// let statusFilter=usersWithAddress.filter(value => value.status==false)
// console.log(statusFilter);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let ageStatus=usersWithAddress.filter(value => value.status==false&&value.age<30)
// console.log(ageStatus);
// -- отфильтровать (оставить) тех у кого номер дома четный
// let numberHousetwo=usersWithAddress.filter(value => {
//     value=value.address.number % 2===0
//     return value
// } )
// console.log(numberHousetwo);
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
// let cars=[
//     {producer:'Volkswagen',power:90,owner:{name:'Yurii',age:20,expirience:2},price:2000,year:1989},
//     {producer:'Bmw',power:190,owner:{name:'Andrii',age:30,expirience:1},price:5000,year:2000},
//     {producer:'Mersedes',power:189,owner:{name:'Max',age:23,expirience:4},price:7000,year:2005},
//     {producer:'Audi',power:230,owner:{name:'Bohdan',age:35,expirience:3},price:3500,year:1980},
//     {producer:'Kia',power:110,owner:{name:'Anton',age:44,expirience:5},price:8500,year:2015},
//     {producer:'Ford',power:330,owner:{name:'Volodia',age:19,expirience:6},price:20000,year:2020},
//     {producer:'VAZ',power:50,owner:{name:'Mark',age:50,expirience:10},price:400,year:1970},
//     {producer:'ZAZ',power:60,owner:{name:'Den',age:24,expirience:9},price:500,year:2003},
//     {producer:'Subaru',power:230,owner:{name:'Obama',age:51,expirience:3},price:4500,year:2004},
//     {producer:'Nissan',power:600,owner:{name:'Donald',age:48,expirience:1},price:35000,year:1990},
// ]

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// for (i=4;i<cars.length;i++){
//     cars[i].power+=(cars[i].power/100 *10)
//     cars[i].owner.name='Vasya'
// }
//     for (i=0;i<cars.length;i=i+2){
//         cars[i].power+= (cars[i].power/100 *10)
//         cars[i].price+=(cars[i].price/100 *5)
//
//     }
//
//     cars.filter(value =>{
//         if (value.owner.expirience<5&&value.owner.age>25){
//            return  value.owner.expirience+=1
//
//         }
//     } )
//
// console.log(cars);
// ------------------------------
// let sum=0
// for (x=0;x<cars.length;x++){
//     sum+=cars[x].price
// }
// console.log(sum);
// ____________________або

// sum=cars.reduce((acc, value) => {
//
//     return acc + value.price
//
// },0)
// console.log(sum);
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let indexs = [];
let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
let number = +prompt('Ведіть число')
let idx = Arr.indexOf(number);
if (idx==-1){
    console.log(`Key ${number}`);
    console.log(`Maxindex = ${idx}`);
    console.log(`Minindex = ${idx}`);
}else {
    while (idx != -1) {
        indexs.push(idx);
        idx = Arr.indexOf(number, idx + 1);
    }
    console.log(`Key ${number}`);
    let max = indexs[0];
    let min = indexs[0];

    for (let i = 1; i < indexs.length; i++) {
        if (indexs[i] < min) {
            min = indexs[i]
        }

        if (indexs[i] > max) {
            max = indexs[i]
        }
    }
    console.log(`Maxindex = ${max}`);
    console.log(`Minindex = ${min}`);

}