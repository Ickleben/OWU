// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let content=document.getElementById('content')
// console.log(content);
// - отримує текст з блоку з id "rules"
// let rules=document.getElementById('rules')
// console.log(rules);
// - замініть текст параграфа з id 'content' на будь-який інший
// let content=document.getElementById('content')
// content.innerText='Hello JS'
// - замініть текст параграфа з id 'rules' на будь-який інший
// let rules=document.getElementById('rules')
// rules.innerText='Вітаємо у світі боксу'
// - змініть кожному елементу колір фону на червоний
// let p = document.getElementById('content');
// p.style.backgroundColor = 'red';
// let div = document.getElementById('rules');
// div.style.backgroundColor = 'red';
//
// let abc = document.getElementsByClassName('fc_rules');
//
// for (let i = 0; i < abc.length; i++) {
//
//     abc[i].style.backgroundColor = 'red';
//
// }
// - змініть кожному елементу колір тексту на синій
// let p = document.getElementById('content');
// p.style.color = 'blue';
// let div = document.getElementById('rules');
// div.style.color = 'blue';
// let abc = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < abc.length; i++) {
//
//     abc[i].style.color = 'blue';
//
// }
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let rules=document.getElementById('rules');
// let classList= rules.classList;
// console.log(classList);
// - отримати всі елементи з класом fc_rules
// let elements = document.getElementsByClassName('fc_rules');
// console.log(elements);
// - поміняти колір тексту у всіх елементів fc_rules на червоний
// let elements = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < elements.length; i++) {
//
//     elements[i].style.color = 'red';}
