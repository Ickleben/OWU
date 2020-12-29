import React, {Component,useEffect,useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {useServices} from "./services";
import {ProductsService} from "./services/products-service";


export default function  (){
    const {cart,wishlist,products} =useSelector(({cart:{cart},wishlist:{wishlist},products:{products}})=> ({
        cart, wishlist, products
    }))
const dispatch=useDispatch()
    const {productService}=useServices()
    const fetchData =useCallback(async()=> {
        const response = await productService.productsGet()
        const json =await response.json()
        console.log(json)
    },[])
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            <Header/>
            <ProductList/>
            <h2>{cart.length} {wishlist.length} {products.length} </h2>
        </div>
    );
}