import {useSelector,useDispatch} from "react-redux";
import {useState} from 'react'
import './App.css'
export default function  (){
    const state = useSelector(state=>state)
    const dispatch=useDispatch()
    const [choosenId,setId]= useState()

   let Add=(e)=>{
        e.preventDefault()

       const name =e.target[0].value
       const age =+e.target[1].value
       dispatch({type:'ADD',payload:{id:new Date().getTime(), name,age }})

   }
    let Choose =(e)=> {
        // console.log(e.target.parentElement.target);
        console.log(e.target.children[0].innerText);

        let targLength = e.target.parentElement.childNodes;
        console.log(targLength[1]);
        for (let i = 1; i < targLength.length; i++) {
            targLength[i].style.backgroundColor = 'white'
        }

            setId(+e.target.children[0].innerText)

            e.target.style.backgroundColor = 'red'

    }

   let Delete =(e)=>{
e.preventDefault()
       dispatch({type:'DELETE_USER',payload: choosenId })

   }

    return (
        <div>

            <form onSubmit={Add}>
                <input type='text'/>
                <input type='number'/>
                <button>save</button>
            </form>
            <form onSubmit={Delete}>
                <button>delete</button>
            </form>

                <div > {state.map(value=>(<p className='text-align' key={value.id} onClick={Choose}>name:{value.name} age:{value.age}<div className='display-none'>{value.id}</div></p>))}</div>


        </div>
    )
}