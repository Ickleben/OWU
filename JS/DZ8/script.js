// Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// let id =document.getElementById('text')
// id.oninput=()=>{
//     localStorage.setItem('id',id.value)
//
// }
// id.value=localStorage.getItem('id')

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// let id =document.getElementById('text')
// let inputik =document.getElementById('inputik')
// let checkbox =document.getElementById('checkbox')
// let radio =document.getElementById('radio')
// let select =document.getElementById('select')
// id.oninput=()=>{
//     localStorage.setItem('id',id.value)
// }
// inputik.oninput=()=>{
//     localStorage.setItem('inputik',inputik.value)
// }
// checkbox.oninput=()=>{
//     localStorage.setItem('checkbox',checkbox.checked)
// }
// radio.oninput=()=>{
//     localStorage.setItem('radio',radio.checked)
// }
// select.oninput=()=>{
//     localStorage.setItem('select',select.value)
// }
// id.value=localStorage.getItem('id')
// inputik.value=localStorage.getItem('inputik')
// checkbox.checked=localStorage.getItem('checkbox')
// radio.checked=localStorage.getItem('radio')
// select.value=localStorage.getItem('select')


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let button =document.createElement('button')
// let right=document.getElementById('arrowRight')
// let left=document.getElementById('arrowLeft')
// button.innerText='Сохранить'
// document.body.appendChild(button)
// let id =document.getElementById('text')
// let name = 0
// let max = localStorage.length -1;
// console.log(max)
// const min = 2;
// button.onclick=(ev)=> {
//         name+=1
//     localStorage.setItem('index',name)
//     if (id.value!=='') {
//         localStorage.setItem(name, id.value)
//     }
// max=localStorage.length -1;
// }
// right.onclick=(ev)=>{
//     if (max>name) {
//         name = name + 1
//     }
//     id.value=localStorage.getItem(name)
// }
// left.onclick=(ev)=>{
//     if (name>=min) {
//         name = name - 1
//     }
//     id.value=localStorage.getItem(name)
// }
// window.onload = function () {
//     const i = localStorage.getItem('index');
//     if(i) {
//         name = +i ;
//     }
// }
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
let span = document.getElementById('span')
let button = document.getElementById('button')
let name = document.getElementById('name')
let phone = document.getElementById('phone')
let email = document.getElementById('email')
let company = document.getElementById('company')
let department = document.getElementById('department')
let birthd = document.getElementById('birthd')
let buttonLoad =document.createElement('button')
let buttonSaveChanges=document.createElement('button')
buttonSaveChanges.innerText='Save Changes'
buttonLoad.innerText='Загрузити список'

span.appendChild(buttonLoad)
span.appendChild(buttonSaveChanges)
const arr=[]


button.onclick=()=> {
    class Users {
        constructor(names, phone, email, company, department, birthd) {
            this.names = names
            this.phone = phone
            this.email = email
            this.company = company
            this.department = department
            this.birthd = birthd
        }


    }

    arr.push(new Users(name.value, phone.value, email.value, company.value, department.value, birthd.value))

    console.log(arr);


    localStorage.setItem('users', JSON.stringify(arr))


    buttonLoad.onclick = () => {
let divDelete=document.getElementsByTagName('div')
        for (let c=0;c<divDelete.length;c++){
            divDelete[c].style.display='none'

        }
        for (let x = 0; x < arr.length; x++) {
            let div = document.createElement('div')
            document.body.appendChild(div)
            let a = JSON.stringify(arr[x])
            div.innerText = a
            let del = document.createElement('button')
            let change = document.createElement('button')
            div.appendChild(del)
            div.appendChild(change)
            del.innerText = 'Delete'
            change.innerText = 'Change'
            del.onclick = (ev) => {
                ev.target.parentElement.style.display = 'none'
                let pos = arr.indexOf(a)
                arr.splice(pos, 1)
                console.log(arr);
                localStorage.setItem('users', JSON.stringify(arr))

            }
            change.onclick = (ev) => {

                name.value = arr[x].names
                phone.value = arr[x].phone
                email.value = arr[x].email
                company.value = arr[x].company
                department.value = arr[x].department
                birthd.value = arr[x].birthd
                buttonSaveChanges.onclick = () => {
                    class Save {
                        constructor(names, phone, email, company, department, birthd) {
                            this.names = names
                            this.phone = phone
                            this.email = email
                            this.company = company
                            this.department = department
                            this.birthd = birthd
                        }


                    }

                    let changeSaving = new Save(name.value, phone.value, email.value, company.value, department.value, birthd.value)

                    arr.splice(x, 1, changeSaving)

                    localStorage.setItem('users', JSON.stringify(arr))


                }

            }

        }

    }
}

// ------------------ще один варіант з баганим видаленням
// let index = 0
// button.onclick = (ev) => {
//     location.reload()
//     index += 1
//     localStorage.setItem('index', index)
//     if (name.value !== '') {
//         localStorage.setItem('name' + index, name.value)
//
//
//     }
//
//
//     if (phone.value !== '') {
//         localStorage.setItem('phone' + index, phone.value)
//     }
//     if (email.value !== '') {
//         localStorage.setItem('email' + index, email.value)
//     }
//     if (company.value !== '') {
//         localStorage.setItem('company' + index, company.value)
//     }
//     if (department.value !== '') {
//         localStorage.setItem('department' + index, department.value)
//     }
//     if (birthd.value !== '') {
//         localStorage.setItem('birthd' + index, birthd.value)
//     }
//
// }
// window.onload = function () {
//     let x = localStorage.getItem('index');
//     if (x) {
//         index = +x
//     }
    // for (let i = 1; i <= x; i++) {
//         let div = document.createElement('div')
//         document.body.appendChild(div)
//         div.innerText = localStorage.getItem('name' + i)
//         if (localStorage.getItem('name' + 1) !== '') {
//             let del = document.createElement('button')
//             let change = document.createElement('button')
//             div.appendChild(del)
//             div.appendChild(change)
//             del.innerText = 'Delete'
//             change.innerText = 'Change'
//             div.style.margin = '20px'
//             del.onclick = (ev) => {
//                 ev.target.parentElement.style.display = 'none'
//                 localStorage.removeItem('phone' + i)
//                 localStorage.removeItem('email' + i)
//                 localStorage.removeItem('company' + i)
//                 localStorage.removeItem('department' + i)
//                 localStorage.removeItem('birthd' + i)
//                 localStorage.removeItem('name' + i)
//                 localStorage.setItem('index', i - 1)
//
//             }
//             change.onclick = (ev) => {
//                 button.style.display = 'none'
//                 name.value = localStorage.getItem('name' + i)
//                 phone.value = localStorage.getItem('phone' + i)
//                 email.value = localStorage.getItem('email' + i)
//                 company.value = localStorage.getItem('company' + i)
//                 department.value = localStorage.getItem('department' + i)
//                 birthd.value = localStorage.getItem('birthd' + i)
//                 let buttonChangeSave = document.createElement('button')
//                 buttonChangeSave.innerText = 'Save'
//                 if (span.appendChild(buttonChangeSave)) {
//                 } else {
//                     span.appendChild(buttonChangeSave)
//                 }
//                 buttonChangeSave.onclick = () => {
//                     if (name.value !== '') {
//                         localStorage.setItem('name' + i, name.value)
//                     }
//                     if (phone.value !== '') {
//                         localStorage.setItem('phone' + i, phone.value)
//                     }
//                     if (email.value !== '') {
//                         localStorage.setItem('email' + i, email.value)
//                     }
//                     if (company.value !== '') {
//                         localStorage.setItem('company' + i, company.value)
//                     }
//                     if (department.value !== '') {
//                         localStorage.setItem('department' + i, department.value)
//                     }
//                     if (birthd.value !== '') {
//                         localStorage.setItem('birthd' + i, birthd.value)
//                     }
//
//                     location.reload()
//                 }
//
//             }
//
//         }
//     }
// }


