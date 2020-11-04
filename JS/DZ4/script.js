// - створити функцію яка виводить масив
// function goEat(one){
//     console.log(one);
// }
// goEat(['Max','Andrii','Yurii','Bohdan'])
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//
// let result=[]
//
//
// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;}
//
//     for (i=0;i<4;i++){
//
//  result.push(parseInt(getRandom(0, 100)))
//
//     }
//
// function res(one){
//     console.log(result);
// }
// res([])
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function num(x,y,z){
//     if (x<y&&x<z){
//         return x
//     }if (y<x&&y<z){
//         return y
//     }if (z<y&&z<x){
//         return z
//     }
//
// }
//
// console.log(num(3, 10, 5));
// створити функцію яка приймає три числа та виводить та повертає найбільше.
// function num(x,y,z){
//     if (x>y&&x>z){
//         return x
//     }if (y>x&&y>z){
//         return y
//     }if (z>y&&z>x){
//         return z
//     }
//
// }
//
// console.log(num(13, 10, 5));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// let number = [3, 2, 5, 1, 3];
// number.sort((a, b) => a - b);
//
// console.log(number.pop())
// number.push(number.shift())
// console.log(number);
// створити функцію яка виводить масив
// function goEat(one){
//     console.log(one);
// }
// goEat([3,7,6,9])
// - створити функцію яка повертає найбільше число з масиву
// function getMax(num) {
//     return Math.max.apply(null, num);
// }
//
// console.log(getMax([1, 2, 3, 20, 5, 10]));
// - створити функцію яка повертає найменьше число з масиву
// function getMin(num) {
//     return Math.min.apply(null, num);
// }
//
// console.log(getMin([1, 2, 3, 20, 5, 10]));
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sum(one){
// let sum=0
// for (i=0;i<one.length;i++){
//     sum += one[i]
//
// }
//     return sum
// }
//
// console.log(sum([1, 5,5,4]));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function sum(one){
//     let sum=0
//     for (i=0;i<one.length;i++){
//         sum += one[i]
//
//     }
//     let result =sum/one.length
//     return result
// }
//
// console.log(sum([5, 5,5,5]));
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function sum(one){
// let sum=0
// for (i=0;i<one.length;i++){
//     sum =+ [i]+1
//
// }
//     return sum
// }
//
// console.log(sum(['one', 5,true,4,5,true,'fff']));
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function sum(one){
// let con= one.join('')
//
// return con.length
//
// }
//
// console.log(sum(['one', 5, true, 4, 5, true, 'fff']));;\
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// function sum(one,two){
//     let result=[]
//     for (i=0;i<one.length;i++) {
//         result[i] = one[i] + two[i]
//         result.push()
//     }
//    return result;
// }
//
// console.log(sum([1, 2, 3, 4], [2, 3, 4, 5]));;
// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"

//
// function adDiv(){
//
//     let newDiv=document.createElement('div')
//     newDiv.innerText='hello owu'
//     document.body.appendChild(newDiv)
//         console.log(newDiv)
// }
// adDiv();
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function arg() {
//
//     let newDiv=document.createElement(arguments[1])
//     newDiv.innerText=arguments[0]
//     document.body.appendChild(newDiv)
//         console.log(newDiv)
//
// }
// arg('hahahha','div')
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//
// let div=document.getElementById('divka')
//
// function car(one){
//
//     div.innerText=one
//     document.body.appendChild(div)
//
// }
// car(['Volkswagen','BMW','Vaz','Kia','Audi'])
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//
// const car= [
//     {model:'Volkswagen',year:'1989',power:'90лс',color:'black'},
//     {model:'BMW',year:'1999',power:'190лс',color:'gray'},
//     {model:'Hyndai',year:'2001',power:'130лс',color:'red'},
//     {model:'Kia',year:'2007',power:'150лс',color:'white'},
//     {model:'Vaz',year:'1981',power:'53лс',color:'gold'},
//     {model:'Mercedes-Benz',year:'2017',power:'600лс',color:'purple'},
//     {model:'Audi',year:'2010',power:'300лс',color:'beige'},
//     {model:'Ford',year:'1960',power:'312лс',color:'blue'},
//     {model:'Zaz',year:'2007',power:'60лс',color:'yellow'},
//     {model:'Acura',year:'2005',power:'250лс',color:'green'},
//     ]
// function carsBlock(one){
//     let div=document.getElementById('divka')
//     for (let i=0;i<one.length;i++) {
//
//          let di=document.createElement('div')
//          di.innerText=car[i].model +'  '+ car[i].year +'  '+ car[i].power +'   '+ car[i].color
//         di.style.margin = '20px'
//         div.appendChild(di)
//     }
//
// }
// carsBlock( car)
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок
//
// const car= [
//     {model:'Volkswagen',year:'1989',power:'90лс',color:'black'},
//     {model:'BMW',year:'1999',power:'190лс',color:'gray'},
//     {model:'Hyndai',year:'2001',power:'130лс',color:'red'},
//     {model:'Kia',year:'2007',power:'150лс',color:'white'},
//     {model:'Vaz',year:'1981',power:'53лс',color:'gold'},
//     {model:'Mercedes-Benz',year:'2017',power:'600лс',color:'purple'},
//     {model:'Audi',year:'2010',power:'300лс',color:'beige'},
//     {model:'Ford',year:'1960',power:'312лс',color:'blue'},
//     {model:'Zaz',year:'2007',power:'60лс',color:'yellow'},
//     {model:'Acura',year:'2005',power:'250лс',color:'green'},
//     ]
// function carsBlock(one){
//     let div=document.getElementById('divka')
//     for (let i=0;i<one.length;i++) {
//          let auto=document.createElement('div')
//
//             let di1=document.createElement('div')
//             let di2=document.createElement('div')
//             let di3=document.createElement('div')
//             let di4=document.createElement('div')
//             di1.innerText= one[i].model
//             di2.innerText= one[i].year
//             di3.innerText= one[i].power
//             di4.innerText= one[i].color
//             auto.appendChild(di1)
//             auto.appendChild(di2)
//             auto.appendChild(di3)
//             auto.appendChild(di4)
//         auto.style.margin = '20px'
//         div.appendChild(auto)
//     }
//
// }
// carsBlock( car)
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// let arr=[1,0,6,0,3,0,5,1,0,2,0,0,0,0,2,1,3,4,5,0]
// function sort(one){
//     let result =[]
//     for (let i=(one.length-1);i>=0;i=i-1){
//
//         if (one[i]===0){
//             result.push(one[i])
//
//
//         }else {
//             result.unshift(one[i])
//         }
//
//     }
// return result
//
// }
//
// console.log(sort(arr));
// *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr=['1','2','3','4']
// function res(one,two){
//     for (i=0;i<4;i++){
//
//         `${one.splice(i+1, 1,i+2 )}` не вірно
//
//
//
//     }
//     return one
// }
//
// console.log(res(arr, 1));
