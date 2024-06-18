import React from 'react'
import { useState,useEffect } from 'react'

function Phones() {
    let [phones,setPhones] = useState([])

    let getPhonesFromServer = async ()=>{
      let reqOPtions = {
        method:"GET"
      }
   
     let JSONData = await fetch("https://dummyapi.online/api/products",reqOPtions)
     let JSOData =await JSONData.json()
     setPhones(JSOData)
  
     console.log(JSOData)
  
    }

    useEffect(()=>{
        getPhonesFromServer()
      },[])


  return (
    <div>
          <h1>Phones</h1>
    <div className='phoneContainer'>
    {phones.map((ele,i)=>{
      return ( <div key={i} className='phoneDiv'>
        <img className='phoneImg' src={ele.thumbnailImage} title={ele.description}></img>
        <h5>{ele.id}.{ele.name}<br></br>
        {ele.brand}<br></br>
        {ele.basePrice}/-</h5>
        <p>{ele.storageOptions}, <br></br>
        {ele.display}, <br></br>
        {ele.CPU}</p>


      </div> )
    })}
    </div>



    </div>
  )
}

export default Phones