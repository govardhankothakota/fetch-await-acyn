import logo from './logo.svg';
import {useEffect, useState} from "react"
import './App.css';
import Products1 from './components/Products1';
import Phones from './components/Phones';


function App() {
  let [movieList,setMovieList] = useState([])

  let getMovieListFromServer = async ()=>{
    let reqOPtions = {
      method:"GET"
    }
 
   let JSONData = await fetch(" https://dummyapi.online/api/movies",reqOPtions)
   let JSOData =await JSONData.json()
   setMovieList(JSOData)

   console.log(JSOData)
  }
  useEffect(()=>{
    getMovieListFromServer()
  },[])

  return (
    <div  className="App">
       <Phones/>
  
    <h1>Top Rating Movies list in Imdb</h1>
    <div className='movieContainer'>
    {movieList.map((ele,i)=>{
      return ( <div key={i} className='movieDiv'>
        <img className='movieImg' src={ele.image}></img>
        <h4>{ele.id}.{ele.movie}</h4>
        <h4>{ele.rating}</h4>
        <h6>{ele.imdb_url}</h6>
      
      </div>
      )
    })}
    </div>

  <Products1/>
  
    </div>
  );
}

export default App;
