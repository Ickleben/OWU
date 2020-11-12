// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let divka=document.createElement('div')
// divka.setAttribute('id','text',)
// divka.style.backgroundColor='green'
// let button =document.createElement('button')
// button.innerText= 'remove'
// button.onclick=(ev => {
//     console.log(ev);
//
//     divka.style.display = 'none'
// })
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// divka.appendChild(button)
// document.body.appendChild(divka)
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button =document.createElement('button')
// button.innerText ='remove'
// document.body.appendChild(button)
// button.onclick=(ev)=>{
//     console.log(ev);
//     ev.target.style.display ='none'
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input =document.createElement('input')
// let button=document.createElement('button')
// button.innerText ='complete'
//
// document.body.appendChild(input)
// document.body.appendChild(button)
// button.onclick=(ev) =>{
//
//     if (input.value>=18){
//        alert('Welcome')
//     }else alert('Search girl')
// }
// - Создайте меню, которое раскрывается/сворачивается при клике

// let button =document.createElement('button')
// button.innerText='Menu'
// document.body.appendChild(button)
// let divka=document.getElementById('block')
// let xxx=false
//
//
// button.onclick=(ev) =>{
// if (xxx){
//     divka.style.display='block'
//     xxx=false
//
// }else {
//     divka.style.display='none'
//     xxx=true
// }
//
// }
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let a =[{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// {title : 'Good', body:'lorem ipsum dolo sit ameti lorem ipsum dolo sit ameti'},
// {title : 'Owu', body:'lorem ipsum dolo sit ameti lorem ipsum dolo sit ameti lorem ipsum dolo sit ameti'},
// {title : 'Owu', body:'lorem ipsum dolo sit ameti lorem ipsum dolo sit ameti lorem ipsum dolo sit ameti'}]
// let ul = document.getElementById('list')
//
// function liUl(){
// a.forEach(text=>
//     {
//         const li =document.createElement('li')
//          const li2=document.createElement('li')
//         ul.appendChild(li)
//         ul.appendChild(li2)
//         li.innerText=`title: ${text.title}`
//         li2.innerText=`body: ${text.body}`
//
//         const button = document.createElement('button')
//         li.appendChild(button)
//         button.innerText = 'remove'
//         let xxx = false
//
//         button.onclick = (ev) => {
//             if (xxx) {
//                 li2.style.display = 'block'
//                 xxx = false
//
//             } else {
//                 li2.style.display = 'none'
//                 xxx = true
//             }
//         }
//     })
//
// }
// liUl()
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let button =document.createElement('button')
// button.innerText='complete'
// document.body.appendChild(button)
// button.onclick=(ev) => {
//     let a =document.forms.myForm1.input11.value
//     let b =document.forms.myForm1.input12.value
//     let c =document.forms.myForm2.input21.value
//     let d =document.forms.myForm2.input22.value
//     console.log(a,b,c,d);
// }
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// let div = document.getElementById('divochka')
// let tableBody = document.createElement('table')
//
// function table(tr, td, c) {
//     for (let i = 0; i <= tr; i++) {
//         let trr = document.createElement('tr')
//         tableBody.appendChild(trr)
//         for (let x = 0; x <= td; x++) {
//             let tdd = document.createElement('td');
//             tdd.innerText = 'text ' + (x+1);
//             trr.appendChild(tdd)
//         }
//     }
//     c.appendChild(tableBody)
// }
//
// table(5, 4, div);
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
//
// let button=document.createElement('button')
// button.innerText='Complete'
// document.body.appendChild(button)
// button.onclick=(ev) => {
//     let a = document.forms.form.input1.value
//     let b = document.forms.form.input2.value
//     let c = document.forms.form.input3.value
//
//
//
//     let div = document.getElementById('divochka')
//     let tableBody = document.createElement('table')
//
//     function table(tr, td, c, text) {
//
//         for (let i = 0; i <= tr; i++) {
//             let trr = document.createElement('tr')
//             tableBody.appendChild(trr)
//             for (let x = 0; x <= td; x++) {
//                 let tdd = document.createElement('td');
//                 tdd.innerText = text;
//                 trr.appendChild(tdd)
//             }
//         }
//         c.appendChild(tableBody)
//     }
//
//     table(a, b, div, c);
// }
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let words=['xxx','yyy']
// let button=document.createElement('button')
//
// document.body.appendChild(button)
// button.innerText='Complete'
// button.onclick=ev => {
//     let a =document.forms.form.input1.value
//     for (let i=0;i<words.length;i++){
//         if (words[i]==a){
//             alert('А ну не матюкайся')
//         }
//     }
//
// }
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
// let words=['yyy','xxx']
// let button=document.createElement('button')
//
// document.body.appendChild(button)
// button.innerText='Complete'
// button.onclick=ev => {
//     let a =document.forms.form.input1.value
//
//     for (let i=0;i<words.length;i++){
//       let check= a.includes(words[i]);
//         if (check==true){
//             alert('А ну не матюкайся')
//         }
//     }
//
// }
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let h2 = document.getElementsByTagName('h2')
//
//
// let divBody = document.createElement('div')
//
// document.body.appendChild(divBody)
// divBody.classList.add('divBodyFixed')
// divBody.innerText = 'Menu'
//
// function divka(h2) {
//     for (let i = 0; i < h2.length; i++) {
//         const div = document.createElement('div')
//         let linkFolow = document.createElement('a')
//         h2[i].appendChild(linkFolow)
//         linkFolow.setAttribute('name', `${i}`)
//
//         let a = h2[i].innerText
//         divBody.appendChild(div)
//
//         let link = document.createElement('a')
//         link.setAttribute("href", `#${i}`)
//         link.innerText = a
//         div.appendChild(link)
//     }
//
//
// }
//
// divka(h2)

// -- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let div = document.createElement('div')
// let button = document.createElement('button')
//
// document.body.appendChild(div)
//
// div.appendChild(button)
// button.innerText = 'Complete'
//
// button.onclick = (ev) => {
//     let chbox1 = document.getElementById('chbox1')
//     let chbox2 = document.getElementById('chbox2')
//     let chbox3 = document.getElementById('chbox3')
//
//     function filt(arr, a, b, c) {
//
//         if (a.checked == true) {
//             arr = arr.filter(value => value.status == false)
//         }
//
//         if (b.checked == true) {
//             arr = arr.filter(value => value.age >= 29)
//         }
//         if (c.checked == true) {
//             arr = arr.filter(value => value.address.city == 'Kyiv')
//         }
//         return arr
//     }
//
//     let xxx = filt(usersWithAddress, chbox1, chbox2, chbox3)
//     let divDocument = document.createElement('div')
//     divDocument.style.backgroundColor = 'black'
//     divDocument.style.margin = '40px'
//     document.body.appendChild(divDocument)
//     for (const value of xxx) {
//         let di = document.createElement('div')
//         di.style.backgroundColor = 'red'
//         di.style.margin = '5px 0'
//         // di.innerText=`${value.name} `+ `${value.age} `+ `${value.status} `+ `${value.address.city} `+ `${value.address.street} `+ `${value.address.number} `
//         // _______________________________________aбо але json краще
//         di.innerText = JSON.stringify(value)
//         divDocument.appendChild(di)
//
//     }
// }
