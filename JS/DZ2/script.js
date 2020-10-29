// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// const number = [1,2,3,4,5]
// console.log(number)

// - з 5 стічкових значень
// const str = ['1','2','3','4','5']
// console.log(str)

// - з 5 значень стрічкового, числового та булевого типу
// const strNumBul =[1,2,'3','4',true]
// console.log(strNumBul)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// const str =[]
// str[0] = 'First'
// str[1] = 'Second'
// str[2] = 'Third'
// str[3] = 'Fourth'
// console.log(str)
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let div = '<div>Hello</div>'
// for (let i = 0;i < 10; i++){
//     document.write(div)
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let div = '<div>World</div>'
// for (let i = 0;i < 10; i++){
//     document.write(div,i)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let h1 = '<h1>Test</h1>'
// let i = 0
// while (i<20){
//     document.write(h1);
//     i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let h1 = '<h1>Test</h1>'
// let i = 0
// while (i<20){
//     document.write(h1,i);
//     i++
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// const num =[1,2,3,4,5,6,7,8,9,10]
//
// for (i = 0;i<num.length;i++){
//     console.log(num[i])
// }
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const num =['str','str2','str3','str4','str5','str6','str7','str8','str9','str10']
//
// for (i = 0;i<num.length;i++){
//     console.log(num[i])
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// const num =[1,2,'3','4','5',true,false,true,false,true]
//
// for (i = 0;i<num.length;i++){
//     console.log(num[i])
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// const   str =[1,'2',true,4,'5',false,7,'8',true,10]
//
// for (let i = 0;i<str.length;i++)
//     if (typeof str[i] ==='boolean'){
//         console.log(str[i])}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// const   str =[1,'2',true,4,'5',false,7,'8',true,10]
//
// for (let i = 0;i<str.length;i++)
//     if (typeof str[i] ==='number'){
//         console.log(str[i])}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// const   str =[1,'2',true,4,'5',false,7,'8',true,10]
//
// for (let i = 0;i<str.length;i++)
//     if (typeof str[i] ==='string'){
//         console.log(str[i])}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// const str=[]
// str[0] = 'GO'
// str[1]='home'
// str[2]=1
// str[3]=2
// str[4]=3
// str[5]=4
// str[6]=5
// str[7]=false
// str[8]=true
// str[9]=false
//
// for (let i=0;i<str.length;i++){
//     console.log(str[i])
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// document.write(i)}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i=i+2) {
//     console.log(i);
//     document.write(i);}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i=i+2) {
//     console.log(i);
//     document.write(i);}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i=i+2) {
//     console.log(i);
//     document.write(i);}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// let m=0
// let s=0
// while (s<59) {
//     s++
//     console.log(s)
//     if (s == 59) {
//         m = m + 1
//         console.log(m,'',0)   неправильний варіант але відраховує 2 хв
//         s=0
//         while (s < 59) {
//             s++
//             console.log(m,'',s)
//             if (s == 59) {
//                 m = m + 1
//                 console.log(m,'',0)
//             }
//
//         }
//     }
// }


// ----------------------------------------------------
// let m = 0
// let s = 0
// while (s<60){
//     s++
//     console.log(s)
// }
// while (m<2){
//     m++
//     console.log(m)
// }
//

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let h = 0
// let m = 0
// let s = 0
// while (s<60){
//     s++
//     console.log(s);
// }
// while (m<20){
//     m++
//     console.log(m);
// }
// while (h<2){
//     h++
//     console.log(h)
// }
// ------------------------------------------------------------------------------------------
