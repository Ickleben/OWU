import React, {useState, useEffect, useReducer} from 'react';
import PostService from "../../service/PostService";
import './../User.css'

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_POST": {
            return action.payload
        }
    }
    switch (action.type) {
        case 'CHANGE_NUMBER': {
            return {
                ...state,
                number: action.payload
            }

        }
        default: {
            return state
        }
    }
}
const initialState = {
    userId: null,
    id: null,
    title: null,
    body: null,
    number: null
}
export default function () {
    const postService = new PostService()
    const [state, dispatch] = useReducer(reducer, initialState);
    const [counter, setCounter] = useState(1)
    console.log(state)
    useEffect(() => {
        if (counter > 0 && counter <= 100) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)
                .then(response => response.json())
                .then(json => {
                    dispatch({type: "SET_POST", payload: json});
                    console.log(json)
                })
        } else {
            dispatch({type: "SET_POST", payload: {title: 'Ви вибрали ID якого не існує.'}})

        }

    }, [counter])
    const handlerRight = () => setCounter((prev) => prev + 1)
    const handlerRightTen = () => setCounter((prev) => prev + 10)
    const handlerLeftTen = () => setCounter((prev) => prev - 10)
    const handlerLeft = () => setCounter((prev) => prev - 1)
    const randomNumber = () => dispatch({type: 'CHANGE_NUMBER', payload: Math.floor(Math.random() * (100 - 1)) + 1})

    return (
        <div className='body'>
            <button onClick={handlerLeftTen}>-10</button>
            <button onClick={handlerLeft}>-1</button>
            <button onClick={handlerRight}>+1</button>
            <button onClick={handlerRightTen}>+10</button>
            <div>
                <button onClick={randomNumber}>Random Number</button>
            </div>

            <h2>COUNTER {counter}</h2>
            {!!state &&
            <>
                <h2>ID {state.id}</h2>
                <h2>TITLE:{state.title}</h2>
                <h2>BODY:{state.body}</h2>
                <h2>RANDOM- {state.number} -</h2>
            </>}
        </div>
    );
}