// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
// Вывести каждую при помощи console.log , alert, document.write
// let name= 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let numberOne = 1;
// let number2 = 10;
// let number3 = -999;
// let number4 = 123;
// let number5 = 3.14;
// let number6 = 2.7;
// let number7 = 16;
// let noTrue = false;
// let noFalse = true;

// alert(name);
// alert(owu);
// alert(com);
// alert(ua);

// document.write(noFalse,noTrue);

// console.log(numberOne);
// console.log(number2);
// console.log(number3);
// console.log(number4);
// console.log(number5);
// console.log(number6);
// console.log(number7);

// - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
// name= 'HI';
// owu = 'OC';
// com = 'TUM';
// ua = 'WEB';
// numberOne = 2;
// number2 = 40;
// number3 = 333;
// number4 = 321;
// number5 = -3.24;
// number6 = 7.3;
// number7 = 17;
// noTrue = true;
// noFalse = false;
//
// alert(name);
// alert(owu);
// alert(com);
// alert(ua)
//
// console.log(numberOne);
// console.log(number2);
// console.log(number3);
// console.log(number4);
// console.log(number5);
// console.log(number6);
// console.log(number7);
//
// document.write(noFalse,noTrue);
// Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// const first = 1;
// const second = 2;
// const third = 3;
// const name = 'Hello';
// const nameTwo = 'World';
// const nameThird = 'JavaScript';
//
// alert(third);
// alert(nameThird);
//
// document.write(first);
// document.write(name);
//
// console.log(second);
// console.log(nameTwo);
// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

// let firstName = prompt('Name');
// let secondName = prompt('Secondname');
// let fatherName = prompt('Father name');


// console.log( firstName);
// alert(secondName);
// document.write(fatherName);

// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// let person = secondName + firstName + fatherName;
// document.write(person)

// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// let firstName = prompt('Name');
// let secondName = prompt('Secondname');
// let fatherName = prompt('Father name');
// let motherName = prompt('Mother name');
// let motherFatherName = prompt('Mother father name');
// let fatherFatherName = prompt('Father Father name');
// let sisOrBroName = prompt('Sister or brother name');
//
//
// let person = secondName + firstName + fatherName;
// let personTwo = secondName + motherName + motherFatherName;
// let personThird = secondName + fatherName +fatherFatherName;
// let personSisOrBro = secondName + sisOrBroName + fatherName;
//
// document.write(person);
// document.write(personTwo);
// document.write(personThird);
// document.write(personSisOrBro);

// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let first = +prompt('Перше число');
// let second = +prompt(' Друге число');
// let third = +prompt('Третє число');

// console.log( first );
// console.log( second );
// console.log( third);

// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let first = parseInt(prompt('Перше число'));
// let second = parseInt(prompt(' Друге число'));
// let third = parseInt(prompt('Третє число'));
// let fourth = parseInt(prompt('Четверте число'));
//
// let result = first + second + third + fourth;
// console.log(result)

// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let first = parseFloat(prompt('Перше число'));
// let second = parseFloat(prompt(' Друге число'));
// let third = parseFloat(prompt('Третє число'));
//
// let result = first + second + third ;
// console.log(result)

// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

// let first = Math.round(parseFloat(prompt('Перше число')));
// let second = Math.round(parseFloat(prompt(' Друге число')));
// let third = Math.round(parseFloat(prompt('Третє число')));
//
// let result = first + second + third ;
// console.log(result)

// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.

// let first = +prompt('число');
// let second = +prompt(' степінь');
//
// console.log(Math.pow(first,second));

// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
// let first = 5<6;
// let second = 5>6;
// let third = (5==6);
// let fourth = 5>=6;
// let first2 = 10==10;
// let second2= 10>=10;
// let third2 = 10>10;
// let fourth2 = 10<10;
// let fifth = 10!=10;
// let first3 = 123==='123';
// let second3=123==123;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);
// console.log(first2);
// console.log(second2);
// console.log(third2);
// console.log(fourth2);
// console.log(fifth);
// console.log(first3);
// console.log(second3);
