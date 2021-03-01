import {useDispatch, useSelector} from "react-redux";
import DeleteButton from "./button/DeleteButton";
import Change from "./button/Change";

export default function  (){
    const state=useSelector(state=>state)
    const dispatch=useDispatch()
    let Add=(e)=>{
        e.preventDefault()
        console.log(e);
        const name=e.target[0].value
        const age=e.target[1].value
        dispatch({type:'ADD_USER',payload:{ id:new Date().getTime(),name,age }})
    }

    return (
        <div>
            <form onSubmit={Add}>
                <input/>
                <input onSubmit='number'/>
                <button>Save</button>
            </form>

            <form>

            </form>
            <div>{state.map(value=><p key={value.id} >name:{value.name} age:{value.age}<DeleteButton choseenId={value.id}/><Change/></p>)}</div>
        </div>
    );
}