//ProductList.js
import React,{useContext, useEffect} from 'react'
import {Product} from '../Product/product'
import ProductContext from '../Store/ProductContext'

export const ProductList = (props) => {
  
    let ProductCtx= useContext(ProductContext)
    try{
    useEffect(()=>{
        getProduct();
    },[ProductCtx.products])
    let getProduct=async ()=>{
        let data= await fetch('http://127.0.0.1:4001/product/')
        let products_data= await data.json()
       
        // console.log(products_data);
        ProductCtx.setProducts(products_data.products)
      }
    }catch(err){
      console.log(err.message)
    }
  return (
    <div>  
        <h2>Product List</h2>
        
        <div className='row row-cols-1 row-cols-md-5 g-4' style={{margin:'5px'}}>
        {ProductCtx.products.map((product,index)=>
          <Product key={index} productName={product.productName} productPrice={product.productPrice} productImage={product.productImage} productCreatedBy={product.productCreatedBy}/> )}
        </div>
    </div>
  )
}
