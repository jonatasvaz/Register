import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import Img from "../img"
import {useAuth} from  "../provider/Auth"

const Home = () => {
   // const {setProduct}=useAuth

  function handleComprar(index){
  // console.log(index.target.id)
  }

  return (
    <div className='card'>
    {Img.map((index)=>{
      return(
      <ul className='linha-ul'  key={index.id}>
         <li className='linha-li' >
         <img  src={index.url} alt='imageOne'  className='img'/>
           <h1 className='nome' name={index.name}>{index.nome}</h1>
           <p>preço: {index.price}</p> 
            <button className='btn' onClick={handleComprar(index)}  > <Link to="/comprar" >COMPRAR</Link></button>
         </li>
      </ul>
      )
    })}
</div>
  )
}

export default Home
