import {useDispatch} from "react-redux";

export default function  (props){
    let {choseenId}=props
    console.log(props.choseenId)
    const dispatch=useDispatch()
let Delete=(e)=>{
    e.preventDefault()
    dispatch({type:'DELETE_USER',payload: choseenId })
}
    return (
        <div>
            <form onSubmit={Delete}>
                <button>Delete</button>
            </form>
        </div>
    );
}