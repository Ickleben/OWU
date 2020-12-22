import React,{useState} from 'react';
import './Menu.css'
export default function  (){
    const [counter,setCounter]=useState()
    const [counter2,setCounter2]=useState()
    const showMenu=()=>{
        setCounter(<>
            <h2 className={`h2`} onClick={changeH2}>One</h2>
            <h2 className={`h2`} onClick={changeH2}>Two</h2>
            <h2 className={`h2`} onClick={changeH2}>Three</h2>

        </>)
    }
    const h2div = document.querySelector('.h2div');
    const changeH2=(e)=>{

        console.log(e);
        e.target.parentElement.childNodes[0].style.backgroundColor='white'
        e.target.parentElement.childNodes[1].style.backgroundColor='white'
        e.target.parentElement.childNodes[2].style.backgroundColor='white'
        e.target.style.backgroundColor='red'
        setCounter2(e.target.innerText)


    }
    document.onclick = function(e){


        if ( e.target.className != 'h1' && e.target.className != `h2` ) {
        setCounter()
            setCounter2()
        }
    }

    return (
        <div className={'body'} >
            <h1 onClick={showMenu} className={'h1'} >Menu</h1>
            <div className={'h2div'}>{counter}</div>
            <h2>{counter2}</h2>


        </div>
    );
}