import React from 'react'
import { useState,useEffect } from 'react'

function Products1() {
    let [products,setProducts] = useState([])

    let getProductsFromServer = async ()=>{
      let reqOPtions = {
        method:"GET"
      }
   
     let JSONData = await fetch("https://api.escuelajs.co/api/v1/categories",reqOPtions)
     let JSOData =await JSONData.json()
     setProducts(JSOData)
  
     console.log(JSOData)
  
    }

    useEffect(()=>{
        getProductsFromServer()
      },[])

  return (
    <div>
    <h1>Products</h1>
    <div className='productContainer'>
    {products.map((ele,i)=>{
      return ( <div key={i} className='productDiv'>
        <img className='productImg' src={ele.image}></img>
        <h4>{ele.id}.{ele.name}</h4>
      </div> )
    })}
    </div>

    </div>
  )
}

export default Products1