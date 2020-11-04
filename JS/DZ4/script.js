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
