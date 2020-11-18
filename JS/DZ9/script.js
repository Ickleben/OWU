function daySeven(cbSeven){

    setTimeout(() => {
        cbSeven()
    }, 50)
}
function dayOne(cb){

    setTimeout(() => {
  cb()
}, 2000)
}
function dayTwo(cbTwo){

    setTimeout(() => {
        cbTwo()
    }, 1000)
}
function dayTree(food,cbTree){

    setTimeout(() => {
        if (food!=='apple'){
            console.log('я лишився голодний')
            return

        }
        cbTree()

    }, 4000)
}
function dayFour(cbFour){

    setTimeout(() => {
        cbFour()
    }, 1500)
}
function dayFive(internet,cbFive){

    setTimeout(() => {
        if (internet!==true){

            console.log('Блін...нема інтернету')
            return
        }
        cbFive()
    }, 900)
}
function daySix(numbers,cbSix){

    setTimeout(() => {
        if (numbers<5){

            console.log(`Я передивився ${numbers} раз лекцію,але не зрозумів ,треба ще раз переглянути`)
            return
        }
        cbSix()
    }, 1900)
}


dayOne( ()=>{
    console.log('встаю з ліжка')
   dayTwo(()=>{
       console.log('Роблю каву')
       dayTree('apple',()=>{
           console.log('Я поснідав')
           dayFour(()=>{
               console.log('Сів працювати')
               dayFive(true,()=>{
                   console.log('Ура я поставив bid на багато машин')
                   daySix(5,()=>{
                       console.log('В мене вийшло зробити Callback')
                       daySeven(()=>{
                           console.log('Лекцію переглянув ,дз зробив ,Віті написав ,можна лягати спати')


                       })

                   })

               })

           })
       })
   })
}
)
