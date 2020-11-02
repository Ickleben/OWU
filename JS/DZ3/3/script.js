// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let Bmw={
//     name:'BMW',
//     model:['3series','5series','7series'],
//     color:{
//         popular:'black'
//     }
// }
// let girl={
//     name: 'Alina',
//     relationShip:['Max','Andrii','Oleg'],
//     skills:{
//         cooking:'Chicken',
//         work:'Admin'
//     }
// }
// let computer={
//     name:'Prometey',
//     OS:['Windows 10','Linux','Wondows 7'],
//     company:{
//         madeYear:'2000',
//         companyName:'GiGi'
//
//     }
// }
// let master={
//     name:30,
//     services:['test audio','test video','test game'],
//     expirience:{
//         company1:'Brawl',
//         company2:'Gameloft'
//     }
// }
// let garage= {
//     place: '2 cars',
//     instrument: ['wrenches', 'welding'],
//     adress: {
//         city: 'Lviv',
//         street: 'lybinska 2'
//     }
// }

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const value in person) {
//     console.log(value);
// }
// for (const value in dog) {
//     console.log(value);
// }
// for (const value in car) {
//     console.log(value);
// }
// for (const value in phone) {
//     console.log(value);
// }
// for (const value in friend) {
//     console.log(value);}
// for (const value in Bmw) {
//     console.log(value);
// }
// for (const value in girl) {
//     console.log(value);
// }
// for (const value in computer) {
//     console.log(value);
// }
// for (const value in master) {
//     console.log(value);
// }
// for (const value in garage) {
//     console.log(value);
// }
//     - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(person));
// console.log(Object.keys(dog));
// console.log(Object.keys(car));
// console.log(Object.keys(phone));
// console.log(Object.keys(friend));
// console.log(Object.keys(Bmw));
// console.log(Object.keys(girl));
// console.log(Object.keys(computer));
// console.log(Object.keys(master));
// console.log(Object.keys(garage));
//     - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// const car= [
//     {model:'Volkswagen',year:'1989',power:'90',color:'black'},
//     {model:'BMW',year:'1999',power:'190',color:'gray'},
//     {model:'Hyndai',year:'2001',power:'130',color:'red'},
//     {model:'Kia',year:'2007',power:'150',color:'white'},
//     {model:'Vaz',year:'1981',power:'53',color:'gold'},
//     {model:'Mercedes-Benz',year:'2017',power:'600',color:'purple'},
//     {model:'Audi',year:'2010',power:'300',color:'beige'},
//     {model:'Ford',year:'1960',power:'312',color:'blue'},
//     {model:'Zaz',year:'2007',power:'60',color:'yellow'},
//     {model:'Acura',year:'2005',power:'250',color:'green'},
//
//     ]
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// const cities=[{name:'Lviv',population:'721000',country:'Ukraine',region:'West'},
//     {name:'Stambul',population:'3221000',country:'Turkey',region:'Center'},
//     {name:'Cleavlend',population:'15821000',country:'U.S.A',region:'Center'},
//     {name:'Berlin',population:'55721000',country:'Germany',region:'West'},]
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// const carAndDriver = [
//     {
//         model: 'Shkoda',
//         year: '2005',
//         power: '190',
//         color: 'black',
//         driver: {name: 'Andrii', age: 40, sex: 'boy', expirience: '20years'}
//     },
//     {
//         model: 'Golf',
//         year: '1989',
//         power: '130',
//         color: 'white',
//         driver: {name: 'Max', age: 20, sex: 'boy', expirience: '2years'}
//     },
//     {
//         model: 'Mitsubisi',
//         year: '2003',
//         power: '110',
//         color: 'gray',
//         driver: {name: 'Olena', age: 19, sex: 'girl', expirience: '1years'}
//     },
// ]

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i=0
// while (i< car.length){
//     console.log(car[i])
//       i++
// }
// let i=0
// while (i< cities.length){
//
//     console.log(cities[i])
//     i++
// }
// let i=0
// while (i< carAndDriver.length){
//
//     console.log(carAndDriver[i])
//     i++
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < car.length; i++) {
//     console.log( car[i] );
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log( cities[i] );
// }
// for (let i = 0; i < carAndDriver.length; i++) {
//     console.log( carAndDriver[i] );
// }
//     - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const value of car){
//     console.log(value)
// }
// for (const value of cities){
//     console.log(value)
// }
// for (const value of carAndDriver){
//     console.log(value)
// }
//     - взять объекты из задания 1 и превратить каждый в json.
// let per =JSON.stringify(person);
// let dogJson =JSON.stringify(dog);
// let carJson =JSON.stringify(car);
// let phoneJson =JSON.stringify(phone);
// let friendJson =JSON.stringify(friend);
//     // - взять json из задания 11 и превратить их обратно в объекты.
// let clonedPerson = JSON.parse(per);
// let clonedDog = JSON.parse(dogJson);
// let clonedCar = JSON.parse(carJson);
// let clonedPhone = JSON.parse(phoneJson);
// let clonedFriend = JSON.parse(friendJson);
//     - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (const value of car) {
//     let b =JSON.stringify(car)
//     console.log(b)
// }
//     - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (const value of cities) {
//     let c =JSON.stringify(cities)
//     console.log(c)
// }
//     - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let cloned=[]
// for (const value of carAndDriver) {
//     let d =JSON.stringify(carAndDriver)
//     cloned.push([value])
// }
// console.log(cloned)
//     - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// let users=['Andrii','20Years'   ['skills','JS','HTML']]


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     skills: ['java', 'js']},
//     {
//     name: 'petya',
//     age: 30,
//     status: true,
//     skills: ['java', 'js', 'html']
// }, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     skills: ['java', 'js']
// }, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
// for (const value in users) {
//     console.log(users[value]);
//     console.log(users[value].skills);
//
// }
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// let adr=[]
// for (const value in users) {
//     adr.push(users[value].address)
//
//
// }
// console.log(adr);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (let i = 0; i < users.length; i++) {
//     const name = users[i].name;
//     const age=users[i].age
//     const status=users[i].status
//     const adres=users[i].address
//     const namediv = document.createElement('div');
//     namediv.innerText=name + ' '+age+' '+status+' '+adres
//     console.log(namediv);

// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// const bodeDiv=
// for (let i = 0; i < users.length; i++) {
//
//     const name = users[i].name;
//     const namediv = document.createElement('div');
//     namediv.innerText = name
//     const age = users[i].age
//     const agediv = document.createElement('div');
//     agediv.innerText = age
//     const status = users[i].status
//     const statusdiv = document.createElement('div');
//     statusdiv.innerText = status
//     const adres = users[i].address
//     const adresdiv = document.createElement('div');
//     adresdiv.innerText = adres
//     console.log(namediv);
//     console.log(agediv);
//     console.log(statusdiv);
//     console.log(adresdiv);
// }
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
// }, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// }, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .

