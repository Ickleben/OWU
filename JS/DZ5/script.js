// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
// function Tag(name,action,attrs) {
//         this.name = name
//         this.action = action
//         this.attrs = attrs
//
//
// }
// let aTag = new Tag('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.',[{nameOFAttr:'coords',actionOfAttr:'Устанавливает координаты активной области.'},{nameOFAttr:'download',actionOfAttr:'Предлагает скачать указанный по ссылке файл.'}])
// let divTag = new Tag('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',[{nameOFAttr:'align',actionOfAttr:'Задает выравнивание содержимого тега <div>.'},{nameOFAttr:'title',actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}])
// let h1Tag = new Tag('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',[{nameOFAttr:'class',actionOfAttr:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},{nameOFAttr:'dir',actionOfAttr:'Задает направление и отображение текста — слева направо или справа налево.'}])
// let spanTag = new Tag('span','Тег <span> предназначен для определения строчных элементов документа.',[{nameOFAttr:'id',actionOfAttr:'Указывает имя стилевого идентификатора.'},{nameOFAttr:'style',actionOfAttr:'Применяется для определения стиля элемента с помощью правил CSS..'}])
// let inputTag = new Tag('input','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',[{nameOFAttr:'alt',actionOfAttr:'Альтернативный текст для кнопки с изображением.'},{nameOFAttr:'autocomlete',actionOfAttr:'Включает или отключает автозаполнение.'}])
// let formTag = new Tag('form','Тег <form> устанавливает форму на веб-странице.',[{nameOFAttr:'method',actionOfAttr:'Метод протокола HTTP.'},{nameOFAttr:'name',actionOfAttr:'Имя формы.'}])
// let optionTag = new Tag('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',[{nameOFAttr:'disabled',actionOfAttr:'Заблокировать для доступа элемент списка.'},{nameOFAttr:'label',actionOfAttr:'Указание метки пункта списка.'}])
// let selectTag = new Tag('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',[{nameOFAttr:'size',actionOfAttr:'Количество отображаемых строк списка.'},{nameOFAttr:'tabindex',actionOfAttr:'Определяет последовательность перехода между элементами при нажатии на клавишу Tab'}])
// console.log(aTag);
// console.log(divTag);
// console.log(h1Tag);
// console.log(spanTag);
// console.log(inputTag);
// console.log(formTag);
// console.log(optionTag);
// console.log(selectTag);
//
//

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// ==============================================

// class Tag{
//     constructor(name,action,attrs) {
//         this.name = name
//         this.action = action
//         this.attrs = attrs
//     }
//
// }
// let aTag = new Tag('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.',[{nameOFAttr:'coords',actionOfAttr:'Устанавливает координаты активной области.'},{nameOFAttr:'download',actionOfAttr:'Предлагает скачать указанный по ссылке файл.'}])
// let divTag = new Tag('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',[{nameOFAttr:'align',actionOfAttr:'Задает выравнивание содержимого тега <div>.'},{nameOFAttr:'title',actionOfAttr:'Добавляет всплывающую подсказку к содержимому.'}])
// let h1Tag = new Tag('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',[{nameOFAttr:'class',actionOfAttr:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},{nameOFAttr:'dir',actionOfAttr:'Задает направление и отображение текста — слева направо или справа налево.'}])
// let spanTag = new Tag('span','Тег <span> предназначен для определения строчных элементов документа.',[{nameOFAttr:'id',actionOfAttr:'Указывает имя стилевого идентификатора.'},{nameOFAttr:'style',actionOfAttr:'Применяется для определения стиля элемента с помощью правил CSS..'}])
// let inputTag = new Tag('input','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',[{nameOFAttr:'alt',actionOfAttr:'Альтернативный текст для кнопки с изображением.'},{nameOFAttr:'autocomlete',actionOfAttr:'Включает или отключает автозаполнение.'}])
// let formTag = new Tag('form','Тег <form> устанавливает форму на веб-странице.',[{nameOFAttr:'method',actionOfAttr:'Метод протокола HTTP.'},{nameOFAttr:'name',actionOfAttr:'Имя формы.'}])
// let optionTag = new Tag('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',[{nameOFAttr:'disabled',actionOfAttr:'Заблокировать для доступа элемент списка.'},{nameOFAttr:'label',actionOfAttr:'Указание метки пункта списка.'}])
// let selectTag = new Tag('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',[{nameOFAttr:'size',actionOfAttr:'Количество отображаемых строк списка.'},{nameOFAttr:'tabindex',actionOfAttr:'Определяет последовательность перехода между элементами при нажатии на клавишу Tab'}])
// console.log(aTag);
// console.log(divTag);
// console.log(h1Tag);
// console.log(spanTag);
// console.log(inputTag);
// console.log(formTag);
// console.log(optionTag);
// console.log(selectTag);
// ==============================================
//
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
function Tag(model, company, year, maxSpeed, vEngine,driver) {
    this.model = model;
    this.company = company;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.vEngine = vEngine;
    this.driver=driver
    this.drive = function () {
        console.log('їдемо зі швидкістю ' + this.maxSpeed + 'км на годину')
    }
    this.info = function () {
        console.log('Модель ' + this.model + ',компанія ' + this.company + ',рік випуску ' + this.year + ',максимальна швидкість ' +

            this.maxSpeed + ',обєм ' + this.vEngine)
    }
    this.newSpeed = function () {
        this.maxSpeed += 100;
    }

    this.newYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
this.driver=driver

    }


}

let m5 = new Tag('m5', 'BMW', '2000', 200, '2.4 l.', 2020,)


m5.drive()
m5.info()
m5.newSpeed()
m5.newYear(2020)
m5.addDriver({name: 'Andrii', age: 20})
console.log(m5)

