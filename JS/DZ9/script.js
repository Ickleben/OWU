// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.


// let energy = 2000
// console.log(`Початок дня у мене ${energy} поінтів енергії`)
// function daySeven(en,cbSeven) {
//
//     setTimeout(() => {
//         en-= 200
//         if (en <= 0) {
//             cbSeven(new Error)
//             return
//         }
//         cbSeven(null, en)
//     }, 500)
// }
//
// function dayOne(data,cbOne) {
//
//     setTimeout(() => {
//         data -= 200
//         if (data <= 0) {
//             cbOne(new Error)
//             return
//         }
//         cbOne(null, data)
//     }, 1900)
// }
//
// function dayTwo(dataTwo,cbTwo) {
//
//     setTimeout(() => {
//         dataTwo += 300
//         if (dataTwo <= 0) {
//             cbTwo(new Error)
//             return
//         }
//         cbTwo(null, dataTwo)
//     }, 1800)
// }
//
// function dayThree(dataThree,cbTree) {
//
//     setTimeout(() => {
//         dataThree -= 100
//         if (dataThree <= 0) {
//             cbTree(new Error)
//             return
//         }
//         cbTree(null, dataThree)
//     }, 4000)
// }
//
// function dayFour(dataFour,cbFour) {
//
//     setTimeout(() => {
//         dataFour -= 1000
//         if (dataFour <= 0) {
//             cbFour(new Error)
//             return
//         }
//         cbFour(null, dataFour)
//     }, 1000)
// }
//
// function dayFive(dataFive,cbFive) {
//
//     setTimeout(() => {
//         dataFive += 600
//         if (dataFive <= 0) {
//             cbFive(new Error)
//             return
//         }
//         cbFive(null, dataFive)
//     }, 2000)
// }
//
// function daySix(dataSix,cbSix) {
//
//     setTimeout(() => {
//         dataSix += 1000
//         if (dataSix <= 0) {
//             cbSix(new Error)
//             return
//         }
//         cbSix(null, dataSix)
//     }, 1000)
// }

// daySeven(energy,(err, en) => {
//     if (err) {
//         console.log('ТИ не зміг прокинутися WASTED')
//         return
//     } else {
//         console.log('Я встав');
//         console.log(`У мене ${en} поінтів енергії`);
//     }
//     dayOne(en,(err, data) => {
//         if (err) {
//             console.log('Wasted')
//             return
//         } else {
//             console.log('Зробив зарядку')
//             console.log(`У мене ${data} поінтів енергії`);
//         }
//         dayTwo(data,(err, dataTwo) => {
//             if (err) {
//                 console.log('Wasted')
//                 return
//             } else {
//                 console.log('Я поїв')
//                 console.log(`У мене ${dataTwo} поінтів енергії`);
//                 dayThree(dataTwo,(err, dataThree) => {
//                     if (err) {
//                         console.log('Wasted')
//                         return
//                     } else {
//                         console.log('Я покурив')
//                         console.log(`У мене ${dataThree} поінтів енергії`);
//                         dayFour(dataThree,(err, dataFour) => {
//                             if (err) {
//                                 console.log('Wasted')
//                                 return
//                             } else {
//                                 console.log('Програмую')
//                                 console.log(`У мене ${dataFour} поінтів енергії`);
//                             }
//                             dayFive(dataFour,(err, dataFive) => {
//                                 if (err) {
//                                     console.log('Wasted')
//                                     return
//                                 } else {
//                                     console.log('Написав до Віті')
//                                     console.log(`У мене ${dataFive} поінтів енергії`);
//                                 }
//                                 daySix(dataFive,(err, dataSix) => {
//                                     if (err) {
//                                         console.log('Wasted')
//                                         return
//                                     } else {
//                                         console.log('Ліг спати')
//                                         console.log(`У мене ${dataSix} поінтів енергії`);
//                                     }
//
//                                 })
//
//                             })
//
//                         })
//                     }
//                 })
//             }
//         })
//     })
// })
let energy=2000
let video=5
function dayOne(en) {
    return new Promise((resolve, reject) =>
    {

        setTimeout(() => {
            en -= 200
            if (en <= 0) {
                reject('Ти помер')
                return
            }
            resolve( en)
        }, 500)
    })
}
function dayTwo(data) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        data -= 200
        if (data <= 0) {
            reject('Ти помер')
            return
        }
        resolve( data)
    }, 1900)
})
}
function dayThree(en) {
    return new Promise((resolve, reject) =>
    {

        setTimeout(() => {
            en -= 500
            if (en <= 0) {
                reject('Ти помер')
                return
            }
            resolve( en)
        }, 1000)
    })
}
function dayFour(en) {
    return new Promise((resolve, reject) =>
    {

        setTimeout(() => {
            en += 300
            if (en <= 0) {
                reject('Ти помер')
                return
            }
            resolve(en)
        }, 600)
    })
}
function dayFive(en){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            en-=1000
            if (en<=0){
                reject('Енергія закінчился ,Виключення......')
                return
            }
            resolve(en)
        },400)
    })
}
function daySix(en){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            en+=500
            if (en<=0){
                reject('Опа щось голова паморичиться')
                return
            }
            resolve(en)
        },900)
    })
}
function daySeven(video){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (video<5){
                reject(`Я переглянув тільки ${video} лекцій,треба ще раз переглянути` )
            }
            resolve(video)
        })
    })
}
dayOne(energy).then(en=>{
    console.log('Прокинувся')
    console.log(en)

    return dayTwo(en)
})
    .then(en=>{
        console.log('Піднявся з ліжка')
        console.log(en)
        return dayThree(en)
    })
    .then(en=>{
        console.log('Побився з котом')
        console.log(en)
        return dayFour(en)
    })
    .then(en=>{
        console.log('Найшов кусок шоколадки під ліжком і схавав')
        console.log(en)
        return dayFive(en)
    })
    .then(en=>{
        console.log('Сів робити домашку')
        console.log(en)
        return daySix(en)
    })
    .then(en=>{
        console.log('Опа 2 літри кави зробив')
        console.log(en)
        return daySeven(video)
    })
    .then(video=>{
        console.log(`Так достатньо ${video} рпзів переглянути лекцію, я зрозумів promise`)
       

    })
.catch(reason=>{
    console.log(reason)

})
.finally(()=>{
    console.log('---------------------Finish---------------------')
})