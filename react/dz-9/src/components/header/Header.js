import React, {Component} from 'react';
import './../../App.css'
export const Header =(props)=>{
    return (
        <header className='d-flex justify al-it'>
            <h2>Space Shop</h2>
            <div className='d-flex'>
                <div className='mg-15'>cart:</div>
                <div className='mg-15'>whishlist:</div>
            </div>
        </header>
    )
}