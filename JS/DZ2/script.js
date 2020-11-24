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
//     console.log(m,'',s)
//     if (s == 59) {
//
//         while (m<2){
//
//             m++
//             s=0
//             console.log(m,'',s)
//             break
//
//         }
//
//     }
//     if (m==2){
//         break
//     }
// }
//
// --------------------------------------------------


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// let h=0
// let m=0
// let s=0
// while (s<59) {
//     s++
//     console.log(h, '', m, '', s)
//     if (s == 59) {
//
//         while (m < 59) {
//
//             m++
//             s = 0
//             console.log(h, '', m, '', s)
//
//             if (m ==59 ){
//
//                 while (h < 3) {
//
//                     h++
//                     m = 0
//                     s = 0
//                     console.log(h, '', m, '', s)
//                     break
//
//                 }
//             }
//             break
//         }
//
//     }
//     if ((h == 2) && (m == 20)) {
//         break
//     }
// }
// let h=0
// let m=0
// let s=0
// while (s<59) {
//     s++
//     console.log(h,'',m,'',s)
//     if (s == 59) {
//
//         while (m<59){
//
//             m++
//             s=0
//             console.log(h,'',m,'',s)
//
//             if ((m ===59)&&(s===59)){
//                 while (h<3){
//                     h++
//                     m=0
//                     console.log(h,'',m,'',s)
//
//                     break
//                 }
//             }
//             break
//         }
//
//     }
//     if ((h==2)&&(m==20)){
//         break
//     }
// }

// while (m < 24) {
//     while (s < 60) {
//         let clock = m + ':' + s;
//         if (m === 2) {
//             break;
//         }
//         console.log(clock);
//         s++;
//     }
//     s = 0;
//     if (m === 2) {
//         break;
//     }
//     m++;
// }

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// let str=['a','b','c']
// for (i=1;i<4;i++){
//     str.push([i])
//
// }
// console.log(str)
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let str = [1,2,3]
// let del = []
// for (i=0;i<3;i++){
//     let deleteUser = str.pop([i])
//     del.push(deleteUser)
// }
// console.log(str)
// console.log(del)
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6
// let str=[1,2,3]
// for (i=4;i<7;i++){
//     str.push(i)
//
// }
// console.log(str)
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let str=[1,2,3]
// for (i=6;i>3;i=i-1){
//     str.unshift(i)
//
// }
// console.log(str)
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//
// let str =['js', 'css', 'jq']
// let deleteUser= str.shift()
// alert(deleteUser)
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let str =['js', 'css', 'jq']
// let deleteUser= str.pop()
// alert(deleteUser)
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let str =[1, 2, 3, 4, 5]
// console.log(str.slice(2));
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let str =[1, 2, 3, 4, 5]
// console.log(str.slice( 0,2 ));
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let str =[1, 2, 3, 4, 5];
//  str.splice(1, 2);
// console.log(str);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let str =[1, 2, 3, 4, 5];
// str.splice(2, 0, 'a', 'b', 'c');
// console.log(str);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let str =[1, 2, 3, 4, 5];
// str.splice(1, 0, 'a', 'b');
// str.splice(6, 0, 'c');
// str.splice(8, 0, 'e');
// console.log(str);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let num=[1,2,3,4,5,6,7,8,9,10]
// for (i=1;i<10;i=i+2){
// }
//     console.log(num[i])
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let num=[1,2,3,4,5,6,7,8,9,10]
// let del=[]
// for (i=1;i<11;i++){
//
//     del.push(i)
// }
// console.log(del)
// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c']
// let str=''
// for (i=0;i<arr.length;i++){
//     str+=arr[i]
//
// }
// console.log(str);
// let arr=[ 'a', 'b', 'c']
// // let str=''
// // let i=0
// // while (i<arr.length){
// //     str+=arr[i]
// //     i++
// //
// //
// // }
// // console.log(str);
// let arr=[ 'a', 'b', 'c']
// let str=''
// for (let string of arr) {
//
//     str+=string
// }
// console.log(str);
