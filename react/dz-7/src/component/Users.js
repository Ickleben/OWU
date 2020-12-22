import React,{useState,useEffect} from 'react';
import UserService from "../service/UserService";
import './User.css'
export default function  (){
    const userService=new UserService()
    const [counter,setCounter]= useState(1)
    const [user,setUser]= useState()
const handlerRight=()=>{
        setCounter(counter + 1)
}
    const handlerLeft=()=>{
        setCounter(counter - 1)
    }
    const reset=()=>{
        setCounter(1)
    }
useEffect(()=>{
    if (counter > 0 && counter <= 10){
    userService.getUserbyId(counter).then(value => setUser(value))
}else {
        setUser({name: 'Користувача з таким ID не існує'})
    }
    },[counter])
    return (
        <div className={'body'}>
            <h1>Change Users</h1>
            <button onClick={handlerLeft}>{'<-'}</button>
            <button onClick={handlerRight}>{'->'}</button>
            <button onClick={reset}>Reset</button>

           <h2>{counter}</h2>
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