// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let h2=document.getElementsByTagName('h2')
// let id=document.getElementById('content')
// let p=document.getElementsByTagName('p')
// console.log(h2);
// for (let i=0;i<h2.length;i++){
//     let ul=document.createElement('ul')
//     let li=document.createElement('li')
//     id.appendChild(ul)
// ul.innerText=`${h2[i].innerText}`
//
//     li.innerText=`${p[i].innerText}`
//     ul.appendChild(li)
// }
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
//
// for (const rule in rules) {
//     let div=document.createElement('div')
//     let div1=document.createElement('div')
//     let div2=document.createElement('div')
//     let h2=document.createElement('h2')
//     document.body.appendChild(div)
//     div.appendChild(div1)
//     div.appendChild(div2)
//     div1.appendChild(h2)
//     h2.innerText=`${rules[rule].title}`
//     div2.innerText=`${rules[rule].body}`
// }
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((json) => json.forEach(({id, name, username, email,website,address,company,phone}) => {
//         let div=document.createElement('div')
//         let divAddress=document.createElement('div')
//         let divCompany=document.createElement('div')
//         let divGeo=document.createElement('div')
//         div.style.margin='20px'
//         document.body.appendChild(div)
//     div.innerText=`id:${id}: NAME:${name}.  USERNAME:${username};  EMAIL:${email} WEBSITE:${website}    PHONE:${phone}`
//         div.appendChild(divAddress)
//         div.appendChild(divGeo)
//         div.appendChild(divCompany)
//         divAddress.innerText=`ADDRESS:${address.street},${address.suite},${address.city} ,${address.zipcode} `
//         divGeo.innerText=`GEO:${address.geo.lat},${address.geo.lng}`
//         divCompany.innerText=`COMPANY:${company.name},${company.catchPhrase},${company.bs}`
//   })
// )

