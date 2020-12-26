import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import UserService from "../service/UserService";
export default function  (){
    const userService=new UserService()
    const counter =useSelector(({counter})=>counter)
    const dispatch=useDispatch();
    const [user,setUser]= useState()
    console.log(counter)
    useEffect(()=>{
        if (counter > 0 && counter <= 10){
            userService.getUserId(counter).then(value => setUser(value))
        }else {
            setUser({name: 'Користувача з таким ID не існує'})
        }
    },[counter])
    console.log(user)
    return (
        <div>
            <button onClick={()=>dispatch({type:'INC_COUNTER'})}>INC</button>
            <button onClick={()=>dispatch({type:'DEC_COUNTER'})}>DEC</button>
            <button onClick={()=>dispatch({type:'RESET_COUNTER'})}>RESET</button>
            <div>{counter}</div>
            {!!user &&
            <>
                <h2>{user.id}</h2>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
            </>
            }
        </div>
    );
}